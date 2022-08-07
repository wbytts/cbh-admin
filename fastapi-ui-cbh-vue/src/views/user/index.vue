<!--
 * @Description: 
 * @FilePath: \frontend-codesd:\projects\xxxxxxxx\github\wbytts\cbh-admin\fastapi-ui-cbh-vue\src\views\user\index.vue
 * ******************************
 * @Author: 陈炳翰
 * @Date: 2022-07-16 00:10:53
 * @LastEditors: 陈炳翰
 * @LastEditTime: 2022-08-08 03:28:51
 * good good study 📚, day day up ✔️.
-->
<template>
    <div class="container">
        <div class="form-container">
            <el-form :model="form" inline>
                <el-form-item label="用户名">
                    <el-input v-model="form.username" size="mini"></el-input>
                </el-form-item>
                <el-form-item label="电话号码">
                    <el-input v-model="form.user_phone" size="mini"></el-input>
                </el-form-item>
                <el-form-item label="创建时间">
                    <el-date-picker v-model="form.create_time" size="mini"></el-date-picker>
                </el-form-item>
                <el-form-item label="角色状态">
                    <el-select v-model="form.user_status" placeholder="请选择" size="mini">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <div class="buttons">
                    <el-button
                        style="background-color:rgb(187, 47, 171);color:white"
                        size="middle"
                        @click="handleQuery"
                    >查询</el-button>
                    <el-button
                        style="background-color:rgb(187, 47, 171);color:white"
                        size="middle"
                        @click="handleReset"
                    >重置</el-button>
                </div>
            </el-form>
        </div>
        <div class="table-container">
            <div class="table-container-head">
                <div>用户管理</div>
                <div>
                    <el-button
                        @click="$refs.userAddDialog.show('用户新增')"
                        style="background-color:rgb(187, 47, 171);color:white;width:150px"
                    >用户创建</el-button>
                </div>
            </div>
            <div>
                <el-table :data="userList" border>
                    <el-table-column prop="username" label="用户名" width="80"></el-table-column>
                    <el-table-column prop="user_phone" label="手机号" width="150"></el-table-column>
                    <el-table-column prop="user_email" label="邮箱" width="80"></el-table-column>
                    <el-table-column prop="create_time" label="创建日期" width="250"></el-table-column>
                    <el-table-column label="状态" width="80">
                        <template slot-scope="{ row }">
                            <div>
                                <el-switch
                                    v-model="row.user_status"
                                    inactive-color="rgb(255, 189, 247)"
                                    active-color="rgb(187, 47, 171)"
                                    @change="handleStatusChange"
                                    v-bind:disabled="$store.state.userInfo.user_type === false"
                                ></el-switch>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column type="index" label="操作" width="250">
                        <el-button size="mini">角色</el-button>
                        <el-button size="mini">编辑</el-button>
                        <el-button size="mini">删除</el-button>
                    </el-table-column>
                </el-table>
            </div>
            <div class="pagination">
                <cbh-pagination
                    :pageInfo.sync="pageInfo"
                    align="center"
                    :updateFunc="queryList"
                    background="rgb(187, 47, 171)"
                />
            </div>
        </div>
        <UserAddDialog ref="userAddDialog" />
    </div>
</template>

<script>
import CbhPagination from "@/components/CbhPagination/index.vue";
import userApi from "@/api/user.js";
import { confirmConfig, pageInfo } from "@/utils/element-config";
import UserAddDialog from "@/views/user/add.vue";
const initForm = {
    username: "",
    user_phone: "",
    user_email: "",
    create_time: "",
    user_status: "",
};

export default {
    components: { CbhPagination, UserAddDialog },
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
        //配置角色权限
        roleDeploy(params) {
            userApi.deploy(params).then((res) => {
                this.roleList = res.roles;
            });
        },
    },
    created() {
        this.roleDeploy();
        this.queryList();
        console.log(this.roleList);
    },
};
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
    > div {
        display: inline-block;
        position: absolute;
    }
    > div:nth-child(1) {
        left: 10px;
        line-height: 40px;
    }
    > div:nth-child(2) {
        right: 1px;
    }
}
</style>