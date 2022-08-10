<template>
    <el-table 
        v-bind="$attrs" 
        :header-cell-style="headClass"
    >
        <slot></slot>
    </el-table>
</template>

<script>
export default {
    methods: {
        headClass() {
            return "text-align:center ;background-color: rgb(242, 209, 19);color:black";
        },
    }
}
</script>

<style lang="scss" scoped>

</style>