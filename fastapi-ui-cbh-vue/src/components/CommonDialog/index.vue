<template>
  <div>
    <el-dialog></el-dialog>
  </div>
</template>

<script>

export default {
  props: {},
  data() {},
  methods: {
      handleDialogShow() {

        const modal = useNiceModal('对话框标识');
        modal.show(options)
        .then(result => {}) // 点确定, Promise 执行 resolve
        .catch(() => {}); // 点取消，Promise 执行 reject

      }
  },
  computed: {},
  watch: {},
  mounted() {},
  beforeDestroy(),
};
</script>

<style>
</style>