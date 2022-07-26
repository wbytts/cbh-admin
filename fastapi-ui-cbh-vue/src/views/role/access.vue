<template>
    <el-dialog
        ref="dialog"
        :visible="visible"
        title="绑定权限"
        width="500px"
        :modal-append-to-body="false"
        :append-to-body="true"
        :close-on-click-modal="false"
        @close="$emit('update:visible', false)"
        class="dialog"
    >
        <el-tree
            show-checkbox
            :data="accessArray"
            :default-checked-keys="roleAccess"
            :props="{children: 'children', label: 'title'}"
            ref="tree"
            node-key="key"
        ></el-tree>
        <el-button type="primary" @click="confirm">确认</el-button>
        <el-button @close="$emit('update:visible', false)">取消</el-button>
    </el-dialog>
</template>

<script>
import accessApi from "@/api/access";
export default {
    data() {
        return {
            accessArray: [],
            roleAccess: [],
        };
    },
    props: {
        visible: {
            type: Boolean,
            default: false,
        },
        role: {
            type: Object,
            default: null,
        },
    },
    methods: {
        confirm() {
            accessApi.set({ role_id: this.role.id, access: this.$refs.tree.getCheckedKeys() }).then((res) => {
                if (res.code == 200) {
                    this.$message.success(res.message);
                    this.$emit('update:visible', false);
                }
            });
        },
        
    },
    async mounted() {
        const loading = this.$loading({
            target: this.$refs.dialog.$refs.dialog,
            fullscreen: false,
        });
        let res = await accessApi.queryAccess(this.role.id);
        loading.close();
        this.accessArray = res.data.all_access;
        this.roleAccess = res.data.role_access;
        console.log("access", res);
    },
};
</script>

<style>
</style>