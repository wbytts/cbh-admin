export default {
  render(h) {
    return (
      <ElButton {...this.$attrs} onClick={this.$listeners.click} style="background-color:rgb(246, 216, 22);color:black;font-weight:boder">
        {this.$slots.default}
      </ElButton>
    );
  },
};
