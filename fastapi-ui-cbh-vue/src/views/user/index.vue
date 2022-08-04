<!--
 * @Description: 
 * @FilePath: \frontend-codesd:\projects\xxxxxxxx\github\wbytts\cbh-admin\fastapi-ui-cbh-vue\src\views\user\index.vue
 * ******************************
 * @Author: 陈炳翰
 * @Date: 2022-07-16 00:10:53
 * @LastEditors: 陈炳翰
 * @LastEditTime: 2022-08-05 03:31:30
 * good good study 📚, day day up ✔️.
-->
<template>
    <div class="container">
        <div class="form-container">
            <el-form inline>
                <el-form-item label="用户名">
                    <el-input size="mini"></el-input>
                </el-form-item>
                <el-form-item label="电话号码">
                    <el-input size="mini"></el-input>
                </el-form-item>
                <el-form-item label="创建时间">
                    <el-date-picker size="mini"></el-date-picker>
                </el-form-item>
                <el-form-item label="角色状态">
                    <el-select size="mini"></el-select>
                </el-form-item>
                <div class="buttons">
                    <el-button style="background-color:rgb(187, 47, 171);color:white" size="middle">查询</el-button>
                    <el-button style="background-color:rgb(187, 47, 171);color:white" size="middle">重置</el-button>
                </div>
            </el-form>
        </div>
        <div class="table-container">
            <div class="table-container-head">
                <div>用户管理</div>
                <div>
                    <el-button style="background-color:rgb(187, 47, 171);color:white;width:150px">用户创建</el-button>
                </div>
            </div>
            <div>
                <el-table :data="userList" border>
                    <el-table-column prop="username" label="用户名" width="80"></el-table-column>
                    <el-table-column prop="user_phone" label="手机号" width="80"></el-table-column>
                    <el-table-column prop="user_email" label="邮箱" width="80"></el-table-column>
                    <el-table-column prop="create_time" label="创建日期" width="250"></el-table-column>
                    <el-table-column prop="user_status" label="状态" width="80"></el-table-column>
                    <el-table-column type="index" label="操作" width="250">
                        <el-button>角色</el-button>
                        <el-button>编辑</el-button>
                        <el-button>删除</el-button>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import userApi from "@/api/user.js";
import { pageInfo } from "@/utils/element-config";
export default {
    components: {},
    data() {
        return {
            userList: [],
            pageInfo: { ...pageInfo },
        };
    },
    methods: {
        queryList() {
            let params = {
                pageSize: this.pageInfo.pageSize,
                pageNum: this.pageInfo.pageNum,
            };
            userApi.queryList(params).then((res) => {
                this.userList = res.data;
                this.pageInfo.total = res.total;
                console.log("查询列表");
            });
        },
        handleStatusChange(row) {
            row.roleStatus = !row.roleStatus;
            this.doEdit(row);
        },
    },
    created() {
        this.queryList();
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