<template>
    <div :style="containerStyle">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="pageData.total"
          :page-size.sync="pageData.pageSize"
          :page-sizes="[10, 20, 30, 40]"
          :current-page.sync="pageData.pageNum"
        >
        </el-pagination>
      </div>
</template>

<script>
export default {
    props: {
        pageInfo: {
            type: Object,
            default: {
                total: 0,
                pageSize: 10,
                pageNum: 1
            }
        },
        align: {
            type: String,
            default: "left"
        },
        updateFunc: {
            type: Function,
            default: () => {}
        }
    },
    data() {
        return {
            pageData: {
                total: 10,
                pageSize: 10,
                pageNum: 1
            }
        }
    },
    methods: {
        handleSizeChange() {
            console.log('每页条数切换', this.pageData)
            this.updateFunc();
        },
        handleCurrentChange() {
            console.log('当前页切换', this.pageData)
            this.updateFunc();
        },
    },
    computed: {
        containerStyle() {
            return {
                textAlign: this.align
            }
        }
    },
    watch: {
        pageData: {
            deep: true,
            handler() {
                console.log('封装的分页组件内,分页信息变化', this.pageData)
                this.$emit('update:pageInfo', this.pageData)
            }
        }
    },
    mounted() {
        console.log('分页组件加载')
        this.pageData = this.pageInfo;
    }
}
</script>

<style>

</style>