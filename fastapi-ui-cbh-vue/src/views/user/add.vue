<template>
    <el-dialog
        :title="title"
        :visible.sync="visible"
        :modal-append-to-body="false"
        width="500px"
        class="role-add-dialog"
        :close-on-click-modal="false"
    >
        <el-form v-model="form">
            <el-row>
                <el-form-item label="用户名称">
                    <el-input></el-input>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item label="用户密码">
                    <el-input></el-input>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item label="手机电话">
                    <el-input></el-input>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item label="状态">
                    <el-radio :label="false">禁用</el-radio>
                    <el-radio :label="true">启用</el-radio>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item label="用户备注">
                    <el-input></el-input>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item label="角色配置">
                    <el-select v-model="form.roleList">
                        <el-option v-for="item in rolelist" :key="item.id" :label="item.role_name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
            </el-row>
        </el-form>
    </el-dialog>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: "",
                password: "",
                user_phone: "",
                user_status: "",
                remarks: "",
                role: [],
            },
            rolelist: [],
            visible: false,
            title: "",
        };
    },
    methods: {
        show(title) {
            this.title = title;
            this.visible = true;
            console.log("成功");
        },

    },
};
</script>
<style>
</style>