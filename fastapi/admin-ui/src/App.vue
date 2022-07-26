<!--
 * @Description: App.vue
 * @FilePath: \admin-ui\src\App.vue
 * **************************************************
 * @Author: BingYi
 * @Date: 2022-07-18 01:45:21
 * @LastEditors: 陈炳翰
 * @LastEditTime: 2022-07-20 21:26:02
 * good good study 📚, day day up ✔️.
-->
<script setup lang="ts">
import { NConfigProvider } from 'naive-ui';
// 主题
import { darkTheme, lightTheme } from 'naive-ui';
// 本地化、日期本地化
import { zhCN, dateZhCN } from 'naive-ui';
// 自定义组件
import ApiPage from './views/api/index.vue';
</script>

<template>
  <n-config-provider :theme="lightTheme" :locale="zhCN" :date-locale="dateZhCN">
    <ApiPage />
  </n-config-provider>
</template>
