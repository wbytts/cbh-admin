<template>
    <!-- 角色创建对话框 -->
    <el-dialog :title="title" :visible.sync="visible" :modal-append-to-body="false" width="500px"
        class="role-add-dialog" :close-on-click-modal="false" :before-close="closeAndClear">
        <el-form ref="form" :model="form" :rules="rules" inline>
            <el-row>
                <el-form-item prop="roleName" label="角色名称">
                    <el-input v-model="form.roleName" @keydown.native="keyEvent = $event" @input="handleRoleNameInput"
                        @paste.native="handleRoleNamePaste"></el-input>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item prop="roleStatus" label="角色状态">
                    <el-radio-group v-model="form.roleStatus">
                        <el-radio :label="false">禁用</el-radio>
                        <el-radio :label="true">启用</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item prop="roleDesc" label="角色描述">
                    <el-input type="textarea" v-model="form.roleDesc" maxlength="60" show-word-limit
                        :autosize="{ minRows: 5, maxRows: 16 }"></el-input>
                </el-form-item>
            </el-row>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="closeAndClear">取 消</el-button>
            <el-button type="primary" @click="handleConfirm"
                style="background-color:rgb(4, 77, 186);color:white;border:rgb(4, 77, 186) solid 1px">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import _ from "lodash";
import { validateNoNumber } from "@/utils/validate";

export default {
    props: {},
    data() {
        return {
            keyEvent: null,
            visible: false,
            title: "",
            form: {
                id: null,
                roleName: "",
                roleStatus: true,
                roleDesc: "",
            },
            rules: {
                roleName: [{ validator: validateNoNumber, trigger: "blur" }],
                roleStatus: [{ required: true, message: "请选择角色状态", trigger: "blur" }],
                roleDesc: [{ required: true, message: "请填写角色描述", trigger: "blur" }],
            },
        };
    },
    methods: {
        show(title) {
            this.title = title;
            this.visible = true;
        },
        closeAndClear() {
            this.$refs.form.resetFields();
            this.visible = false;
        },
        setParams(row) {
            this.form = {
                id: row.id,
                roleName: row.role_name,
                roleStatus: row.role_status,
                roleDesc: row.role_desc,
            };
        },
        handleConfirm() {
            this.$refs.form.validate((valid, fileds) => {
                if (valid) {
                    let params = {
                        id: this.form.id,
                        role_name: this.form.roleName,
                        role_status: this.form.roleStatus,
                        role_desc: this.form.roleDesc,
                    };
                    this.$emit("confirm", params);
                } else {
                    console.log("填错的字段", fileds);
                }
            });
        },
        handleRoleNameInput() {
            let val = this.form.roleName;
            let key = this.keyEvent.key;
            let curPos = this.keyEvent.target.selectionStart;
            if (/[0-9\(\)@#$%&]/.test(key)) {
                let chars = val.split("");
                chars.splice(curPos - 1, 1);
                this.form.roleName = chars.join("");
            }
        },
        handleRoleNamePaste(event) {
            const clipboardData = event.clipboardData || window.clipboardData;
            const text = clipboardData.getData("text/plain");
            if (/[0-9\(\)@#$%&]/.test(text)) {
                setTimeout(() => (this.form.roleName = ""));
                this.$message.error("粘贴的数据不合法!!!");
                return false;
            } else {
                this.$message.success("粘贴成功!");
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.role-add-dialog {

    /* width: 500px; */
    .el-input,
    .el-textarea {
        width: 350px;
    }
}
</style>
