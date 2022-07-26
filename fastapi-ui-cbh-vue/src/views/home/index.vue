<template>
    <div>
        <input type="text" v-model="x">

        <!-- 
            x等于几，自定义的组件就要展示h几 
            x==1， h1
            x==2,  h2
            ...
        -->
        <!-- <h1 v-if="x == 1">你好啊</h1>
        <h2 v-if="x == 2">你好啊</h2>
        <h3 v-if="x == 3">你好啊</h3>
        <h4 v-if="x == 4">你好啊</h4>
        <h5 v-if="x == 5">你好啊</h5>
        <h6 v-if="x == 6">你好啊</h6> -->

        <!-- <hx :x="x" /> -->

        <component :is="'h' + x">你好啊</component>

    </div>
</template>

<script>
import hx from './hx.js'

export default {
    components: {hx},
    data() {
        return {
            x: 1
        };
    },
    methods: {
        handleClick() {
            this.flag = !this.flag;
        }
    },
    mounted() {},
};
</script>

<style>
</style>