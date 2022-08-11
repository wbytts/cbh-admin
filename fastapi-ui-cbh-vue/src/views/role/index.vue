<!--
 * @Description: asfgdgjhkl
 * @FilePath: \frontend-codesd:\projects\xxxxxxxx\github\wbytts\cbh-admin\fastapi-ui-cbh-vue\src\views\role\index.vue
 * ******************************
 * @Author: 陈炳翰
 * @Date: 2022-07-20 21:35:32
 * @LastEditors: 陈炳翰
 * @LastEditTime: 2022-08-12 01:13:05
 * good good study 📚, day day up ✔️.
-->
<template>
    <div class="container cbh-scroll">
        <div class="form-container">
            <el-form class="form" :model="form" inline style="color:white">
                <el-form-item>
                    <span slot="label">
                        <span style="color:white">角色名称:</span>
                    </span>
                    <el-input v-model="form.roleName" size="mini" placeholder="请输入角色名"></el-input>
                </el-form-item>
                <el-form-item>
                    <span slot="label">
                        <span style="color:white">创建时间:</span>
                    </span>
                    <el-date-picker v-model="form.createTime" type="datetime" value-format="yyyy-MM-dd HH:mm:ss"
                        placeholder="请选择时间" size="mini"></el-date-picker>
                </el-form-item>
                <div class="buttons">
                    <!-- style="" -->
                    <cbh-button @click="handleQuery">查询</cbh-button>
                    <cbh-button @click="handleReset">重置</cbh-button>
                </div>
            </el-form>
        </div>
        <div class="table-container">
            <div class="table-container-head">
                <div style="color:white">所有角色</div>
                <div>
                    <cbh-button @click="$refs.roleAddDialog.show('角色新增')">创建角色</cbh-button>
                </div>
            </div>
            <cbh-table :data="roleList" border>
                <el-table-column type="index" label="序号" width="80"></el-table-column>
                <el-table-column prop="role_name" label="角色名称" min-width="200"></el-table-column>
                <el-table-column prop="role_desc" label="备注" min-width="200"></el-table-column>
                <el-table-column prop="create_time" label="创建日期" width="250">
                    <template slot-scope="{row}">{{ row.create_time | dateFormat }}</template>
                </el-table-column>
                <el-table-column prop="role_status" label="状态" min-width="150" align="center">
                    <template slot-scope="{ row }">
                        <el-switch v-model="row.role_status" @change="handleStatusChange(row)"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" min-width="220" align="center" fixed="right">
                    <template slot-scope="{ row }">
                        <div>
                            <cbh-button size="mini" @click="handleEdit(row)" class="form-boder">编辑</cbh-button>
                            <cbh-button size="mini" @click="handleAccess(row)" class="form-boder">权限</cbh-button>
                            <cbh-button size="mini" @click="handleDelete(row)" class="form-boder">删除</cbh-button>
                        </div>
                    </template>
                </el-table-column>
            </cbh-table>
            <!-- 分页组件 -->
            <div class="pagination">
                <cbh-pagination :pageInfo.sync="pageInfo" align="center" :updateFunc="queryList"
                    background="rgb(187, 47, 171)" />
            </div>
        </div>

        <!-- 角色创建对话框 -->
        <RoleAddDialog ref="roleAddDialog" @confirm="handleConfirm" />
        <RoleAccess :visible="roleAccessVisible" v-if="roleAccessVisible" :role="currentRole" />
    </div>
</template>

<script>
import roleApi from "@/api/role.js";
import CbhPagination from "@/components/CbhPagination/index.vue";
import { confirmConfig, pageInfo } from "@/utils/element-config";
import RoleAddDialog from "./add.vue";
import RoleAccess from "./access.vue";


const initForm = {
    roleName: "",
    createTime: "",
};

export default {
    components: { CbhPagination, RoleAddDialog, RoleAccess },
    data() {
        return {
            form: { ...initForm },
            roleList: [],
            pageInfo: { ...pageInfo },
            roleAccessVisible: false, // 角色权限对话框是否显示
            currentRole: null, // 当前选中的角色
        };
    },
    methods: {
        // 点击列表查询按钮
        handleQuery() {
            this.pageInfo.pageNum = 1;
            this.queryList();
        },
        // 搜索表单重置
        handleReset() {
            this.form = { ...initForm };
            this.handleQuery();
        },
        // 点击添加/编辑角色对话框确认按钮
        handleConfirm(params) {
            // 如果id没有
            params.id || this.doCreate(params);
            // 如果id有
            params.id && this.doEdit(params);
        },
        // 点击角色编辑按钮
        handleEdit(row) {
            this.$refs.roleAddDialog.setParams(row);
            this.$refs.roleAddDialog.show("角色编辑");
        },
        // 点击修改角色状态开关
        handleStatusChange(row) {
            row.roleStatus = !row.roleStatus;
            this.doEdit(row);
        },
        // 点击删除操作
        // @让用户确认一下("是否确认要删除")
        handleDelete(row) {
            // this.doDelete(row)
            this.$confirm("是否确认删除此角色", "提示", confirmConfig)
                .then(() => this.doDelete(row))
                .catch(() => this.$message.info("删除已取消"));
        },
        //点击配置权限
        handleAccess(row) {
            this.currentRole = row;
            this.roleAccessVisible = true;
        },
        // 执行删除操作
        doDelete(row) {
            roleApi.delete({ role_id: row.id }).then((res) => {
                this.queryList();
                this.$message.success("删除成功");
            });
        },
        // 角色新增
        doCreate(params) {
            roleApi.create(params).then((res) => {
                this.$refs.roleAddDialog.closeAndClear();
                if (res.code == 200) {
                    this.$message.success(res.message);
                    this.handleQuery();
                }
            });
        },
        // 角色编辑
        doEdit(params) {
            roleApi.edit(params).then((res) => {
                this.$refs.roleAddDialog.close();
                if (res.code == 200) {
                    this.$message.success(res.message);
                    this.queryList();
                }
            });
        },
        // 角色列表查询
        queryList() {
            let params = {
                pageSize: this.pageInfo.pageSize,
                current: this.pageInfo.pageNum,
            };
            if (this.form.roleName) params.role_name = this.form.roleName;
            if (this.form.createTime) params.create_time = this.form.createTime;
            roleApi.queryList(params).then((res) => {
                this.roleList = res.data;
                this.pageInfo.total = res.total;
            });
        },
        // 表头样式修改
        // headClass() {
        //     return "text-align:center ;background-color: rgb(246, 216, 22);color:white";
        // },
    },
    created() {
        this.queryList();
    },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
@import '@/style/mixin.scss';
@import '@/plugins/cbh-element-diy/scss/var.scss';

.buttons {
    @include abs-pos('', 0, '', '');
    margin-right: 20px;
}

.el-form.form.el-form--inline,
.el-form-item {
    display: flex;
    align-items: center;
    margin-bottom: 0 !important;
}

.table-container-head {
    margin-top: 10px;
    margin-bottom: 20px;
}

/* ::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: rgb(4, 77, 186) !important;
}

.form-boder:hover {
    background-color: rgb(4, 77, 186);
    color: white;
    border: rgb(4, 77, 186) solid 1px;
}

.form-boder:focus {
    background-color: rgb(4, 77, 186);
    color: white;
    border: rgb(4, 77, 186) solid 1px;
} */
</style>
