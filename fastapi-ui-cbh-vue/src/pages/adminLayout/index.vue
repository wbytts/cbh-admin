<!--
 * @Description: 
 * @FilePath: \frontend-codesd:\projects\xxxxxxxx\github\wbytts\cbh-admin\fastapi-ui-cbh-vue\src\pages\adminLayout\index.vue
 * ******************************
 * @Author: 陈炳翰
 * @Date: 2022-07-14 21:34:53
 * @LastEditors: 陈炳翰
 * @LastEditTime: 2022-08-04 03:19:37
 * good good study 📚, day day up ✔️.
-->
<template>
    <div class="admin-page">
        <div class="header">
            <div class="title">CBH管理系统</div>
            <el-dropdown class="el-dropdown-user" @command="userControl">
                <div class="user-profile"></div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item cmmand="1">1234</el-dropdown-item>
                    <el-dropdown-item divided command="2">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="body">
            <div class="el-container">
                <div class="el-aside">
                    <sidebar class="sidebar" />
                </div>
            </div>
            <div class="main">
                <keep-alive v-if="$route.query.live">
                    <router-view></router-view>
                </keep-alive>
                <router-view v-else></router-view>
            </div>
        </div>
    </div>
</template>


<script>
//import：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import
// export：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export
import accessApi from "@/api/access";
export default {
    components: {
        sidebar: () => import("@/pages/adminLayout/sidebar"),
    },
    //data必须是一个函数
    data() {
        return {};
    },
    methods: {
        userControl(command) {
            if(command==2){
                localStorage.removeItem("token");
                this.$message("已退出");
                this.$router.push("/login");
            }
        }
    },
    //生命周必须是一个函数
    beforeCreate() {
        this.$store.dispatch("getRoleIds");
    },
};
</script>

<style lang="scss" scoped>
.header {
    /* width: 100vw; */
    position: fixed;
    top: 0;
    /* bottom: 0; */
    left: 0;
    right: 0;
    background-color: rgb(194, 41, 176);
    height: 45px;
    .title {
        display: inline-block;
        text-align: center;
        line-height: 45px;
        background: rgb(194, 41, 176);
        width: 200px;
        height: 45px;
        color: rgb(251, 250, 250);
    }
    .el-dropdown-user {
        position: absolute;
        right: 0;
        margin-right: 25px;
        line-height: 45px;
        height: 45px;
        .user-profile {
            height: 35px;
            width: 35px;
            border-radius: 50%;
            background: white;
            border: 1px solid white;
        }
    }
}
.body {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    .el-container {
        display: inline-block;
        background-color: #671a58;
        width: 200px;
        height: calc(100vh - 45px);
        .el-aside {
            width: 200px !important;
            overflow-x: hidden;
            .el-menu-vertical-demo {
                width: 200px;
            }
            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
    .main {
        display: inline-block;
        width: calc(100vw - 200px);
        height: calc(100vh - 50px);
        vertical-align: top;
    }
}

::v-deep .sidebar .el-menu {
    border-right: none !important;
}
</style>