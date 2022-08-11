<!--
 * @Description: 
 * @FilePath: \frontend-codesd:\projects\xxxxxxxx\github\wbytts\cbh-admin\fastapi-ui-cbh-vue\src\views\user\index.vue
 * ******************************
 * @Author: 陈炳翰
 * @Date: 2022-07-16 00:10:53
 * @LastEditors: 陈炳翰
 * @LastEditTime: 2022-08-12 02:53:48
 * good good study 📚, day day up ✔️.
-->
<template>
    <div class="container">
        <div class="form-container">
            <el-form :model="form" inline>
                <el-form-item>
                    <span slot="label">
                        <span style="color:white">用户名:</span>
                    </span>
                    <el-input v-model="form.username" size="mini"></el-input>
                </el-form-item>
                <el-form-item>
                    <span slot="label">
                        <span style="color:white">电话号码:</span>
                    </span>
                    <el-input v-model="form.user_phone" size="mini"></el-input>
                </el-form-item>
                <el-form-item>
                    <span slot="label">
                        <span style="color:white">创建时间:</span>
                    </span>
                    <el-date-picker v-model="form.create_time" size="mini"></el-date-picker>
                </el-form-item>
                <el-form-item>
                    <span slot="label">
                        <span style="color:white">角色状态:</span>
                    </span>
                    <el-select v-model="form.user_status" placeholder="请选择" size="mini">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <div class="buttons">
                    <el-button style="background-color:rgb(2, 24, 58);color:white" size="middle" @click="handleQuery">查询
                    </el-button>
                    <el-button style="background-color:rgb(2, 24, 58);color:white" size="middle" @click="handleReset">重置
                    </el-button>
                </div>
            </el-form>
        </div>
        <div class="table-container">
            <div class="table-container-head">
                <div style="color:white">用户管理</div>
                <div>
                    <el-button @click="$refs.userAddDialog.show('用户新增')"
                        style="background-color:rgb(2, 24, 58);color:white;width:150px">用户创建</el-button>
                </div>
            </div>
            <div>
                <el-table :data="userList" border :header-cell-style="headClass">
                    <el-table-column prop="username" label="用户名" width="80"></el-table-column>
                    <el-table-column prop="user_phone" label="手机号" width="150"></el-table-column>
                    <el-table-column prop="user_email" label="邮箱" width="80"></el-table-column>
                    <el-table-column prop="create_time" label="创建日期" width="250"></el-table-column>
                    <el-table-column label="状态" width="80">
                        <template slot-scope="{ row }">
                            <div>
                                <el-switch v-model="row.user_status" inactive-color="rgb(159, 189, 235)"
                                    active-color="rgb(2, 24, 58)" @change="handleStatusChange"
                                    v-bind:disabled="$store.state.userInfo.user_type === false"></el-switch>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column type="index" label="操作" width="250">
                        <template slot-scope="{ row }">
                            <div>
                                <el-button size="mini">角色配置</el-button>
                                <el-button size="mini">编辑</el-button>
                                <el-button size="mini" @click="handleDelete(row)">删除</el-button>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="pagination">
                <cbh-pagination :pageInfo.sync="pageInfo" align="center" :updateFunc="queryList"
                    background="rgb(187, 47, 171)" />
            </div>
        </div>
        <UserAddDialog ref="userAddDialog" :allRoles="roleList" @confirm="handleConfirm" />
        <RoleDeploy ref="roleDeploy" />
    </div>
</template>

<script>
import userApi from "@/api/user.js";
import roleApi from "@/api/role.js";
import CbhPagination from "@/components/CbhPagination/index.vue";
import { confirmConfig, pageInfo } from "@/utils/element-config";
import UserAddDialog from "@/views/user/add.vue";
import RoleDeploy from "@/views/user/roledeploy.vue";

const initForm = {
    username: "",
    user_phone: "",
    user_email: "",
    create_time: "",
    user_status: "",
};

export default {
    // setup() {
    //     console.log('setup......')
    // },
    components: { CbhPagination, UserAddDialog, RoleDeploy },
    data() {
        return {
            form: { ...initForm },
            userList: [],
            pageInfo: { ...pageInfo },
            options: [
                {
                    value: "1",
                    label: "生效",
                },
                {
                    value: "0",
                    label: "禁用",
                },
            ],
            roleList: [],
            value: "",
        };
    },
    methods: {
        //查询
        handleQuery() {
            this.queryList();
            this.pageInfo.pageNum = 1;
            console.log("查询");
        },
        //重置
        handleReset() {
            this.form = { ...initForm };
            this.handleQuery();
        },
        //更改状态
        handleStatusChange(row) {
            row.user_status = !row.user_status;
            this.doEdit(row);
        },
        //新增角色确认
        handleConfirm(params) {
            //逻辑短路写法,如果有id
            params.id || this.doCreate(params)
        },
        // 点击删除操作
        // @让用户确认一下("是否确认要删除")
        handleDelete(row) {
            // this.doDelete(row)
            this.$confirm("是否确认删除此角色", "提示", confirmConfig)
                .then(() => this.doDelete(row))
                .catch(() => this.$message.info("删除已取消"));
        },
        //用户新增
        doCreate(params) {
            userApi.create(params).then((res) => {
                this.$refs.userAddDialog.closeAndClear();
                if (res.code == 200) {
                    this.$message(res.message);
                    this.handleQuery();
                }
            })
        },
        //用户删除
        doDelete(row) {
            userApi.delete({ user_id: row.id }).then((res) => {
                this.queryList();
                this.$message.success("删除成功");
            });
        },
        //查询表单
        queryList() {
            let params = {
                pageSize: this.pageInfo.pageSize,
                pageNum: this.pageInfo.pageNum,
            };
            if (this.form.username) {
                params.username = this.form.username;
            }
            if (this.form.user_phone) {
                params.user_phone = this.form.user_phone;
            }
            if (this.form.create_time) {
                params.create_time = this.form.create_time;
            }
            if (this.form.user_status) {
                params.user_status = this.form.user_status;
            }
            userApi.queryList(params).then((res) => {
                this.userList = res.data;
                this.pageInfo.total = res.total;
                console.log("查询列表");
            });
        },
        //获取所有角色信息
        allRoles() {
            roleApi.all({}).then((res) => {
                this.roleList = res.data.all_role
            })
        },
        headClass() {
            return "text-align:center ;background-color:rgb(2, 24, 58);color:white";
        },
    },
    created() {
        this.queryList();
        this.allRoles();
    },
}
</script>

<style lang="scss" scop>
.el-form.form.el-form--inline,
.el-form-item {
    display: flex;
    align-items: center;
    margin-bottom: 0 !important;
}

.buttons {
    display: inline-block;
    position: absolute;
    right: 10px;
}

.table-container-head {
    position: relative;
    height: 40px;
    min-width: 1000px;
    margin-top: 10px;
    margin-bottom: 20px;

    >div {
        display: inline-block;
        position: absolute;
    }

    >div:nth-child(1) {
        left: 10px;
        line-height: 40px;
    }

    >div:nth-child(2) {
        right: 1px;
    }
}
</style>