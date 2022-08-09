<template>
    <el-dialog :title="title" :visible.sync="visible" :modal-append-to-body="false" width="500px"
        class="role-add-dialog" :close-on-click-modal="false">
        <el-form v-model="form">
            <el-row>
                <el-form-item label="用户名称">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item label="用户密码">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item label="手机电话">
                    <el-input v-model="form.user_phone"></el-input>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item label="状态">
                    <el-radio-group v-model="form.user_status">
                        <el-radio :label="false">禁用</el-radio>
                        <el-radio :label="true">启用</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item label="用户备注">
                    <el-input v-model="form.remarks"></el-input>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item label="角色配置">
                    <el-select v-model="form.roles" multiple>
                        <el-option v-for="item in allRoles" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-row>
            <el-row>
                <el-button @click="hanldeconfirm">确认</el-button>
                <el-button>取消</el-button>
            </el-row>
        </el-form>
    </el-dialog>
</template>

<script>
export default {
    props: ['allRoles'],
    data() {
        return {
            form: {
                username: "",
                password: "",
                user_phone: "",
                user_status: "",
                remarks: "",
                roles: [],
            },
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