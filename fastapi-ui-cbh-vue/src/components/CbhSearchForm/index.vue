<template>
    <div>
        <el-form :model="form" :rules="rules">
            <el-form-item
                v-for="(item, index) in formItems"
                :key="index"
            >
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            form: {},
            rules: {},
        }
    }
};
</script>