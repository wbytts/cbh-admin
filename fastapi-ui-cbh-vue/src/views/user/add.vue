<template>
    <el-dialog :title="title" :visible.sync="visible" :modal-append-to-body="false" width="500px"
        class="role-add-dialog" :close-on-click-modal="false" :before-close="closeAndClear">
        <el-form ref="form" :model="form" :rules="rules" inline>
            <el-row>
                <el-form-item prop="username" label="用户名称">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item prop="password" label="用户密码">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item prop="user_phone" label="手机电话">
                    <el-input v-model="form.user_phone"></el-input>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item prop="user_status" label="状态">
                    <el-radio-group v-model="form.user_status">
                        <el-radio :label="false">禁用</el-radio>
                        <el-radio :label="true">启用</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item prop="remarks" label="用户备注">
                    <el-input v-model="form.remarks"></el-input>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item prop="roles" label="角色配置">
                    <el-select v-model="form.roles" multiple>
                        <el-option v-for="item in allRoles" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-row>
            <el-row>
                <el-button @click="closeAndClear">取消</el-button>
                <el-button @click="hanldeConfirm">确认</el-button>
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
            rules: {
                username: [{ required: true, message: "请选择角色状态", trigger: "blur" }, { min: 3, max: 10, message: "长度在 3 到 10个字符", trigger: 'blur' }],
                password: [{ required: true, message: "密码不能为空", trigger: "blur" }, { min: 6, max: 10, message: "长度在 3 到 10个字符", trigger: 'blur' }],
                user_status: [{ required: true, message: "密码不能为空", trigger: "blur" }],
            },
            //初始化,粉碎该组件
        };
    },
    methods: {
        //关闭对话框
        closeAndClear() {
            this.$refs.form.resetFields();
            this.visible = false;
        },
        show(title) {
            this.title = title;
            this.visible = true;
            console.log("成功");
        },
        hanldeConfirm() {
            this.$refs.form.validate((correct, files) => {
                if (correct) {
                    let params = {
                        username: this.form.username,
                        password: this.form.password,
                        user_phone: this.form.user_phone,
                        user_status: this.form.user_status,
                        remarks: this.form.remarks,
                        roles: this.form.roles
                    }
                    this.$emit("confirm", params)
                } else {
                    this.$message.error("验证失败")
                }
            })
        },
    },
    created() {
        this.$refs.form.resetFields()
    }
};
</script>
<style>
</style>