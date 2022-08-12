export default {
  render(h) {
    return (
      <ElButton {...this.$attrs} onClick={this.$listeners.click} style="background-color:rgb(2, 24, 58);color:white;">
        {this.$slots.default}
      </ElButton>
    );
  },
};

