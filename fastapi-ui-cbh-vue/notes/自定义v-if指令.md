```js
Vue.directive('cbh-if', {
  // 指令与元素成功绑定的时候
  bind(element, binding, vnode, oldVnode) {
    // 创建一个HTML注释元素
    console.log('bind', element.parentNode)
    if(!binding.value) {
      vnode.context.$nextTick(() => {
        const comment = document.createComment('')
        element.parentNode.replaceChild(comment, element);
        vnode.elm = comment;
        vnode.isComment = true;
      })
    }
  },
  // 指令所在的元素，被插入到页面时
  inserted(element, binding, vnode, oldVnode) {
  },
  // 指令所在的模板被解析时
  update(element, binding, vnode, oldVnode) {
    let flag = binding.value;
    console.log('update')
    
    if(flag == false) {
      console.log('false -> vnode', vnode)
      const comment = document.createComment('')
      element.parentNode.replaceChild(comment, element);
      vnode.elm = comment;
      vnode.isComment = true;
    } else {
      console.log('true -> vnode', vnode)
      vnode.context.$el.replaceChild(element, vnode.elm);
      vnode.elm = element;
      vnode.isComment = false;
    }
  },
  // 指令所在的组件的 vnode 及其子组件的 vnode 全部更新后
  componentUpdated(element, binding, vnode, oldVnode) {
  },
  // 指令与元素解绑的时候
  unbind(element, binding, vnode, oldVnode) {
  }
});
```