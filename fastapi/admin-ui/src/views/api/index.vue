<!--
 * @Description:
 * @FilePath: /admin-ui/src/views/api/index.vue
 * **************************************************
 * @Author: BingYi
 * @Date: 2022-07-20 14:08:30
 * @LastEditors: BingYi
 * @LastEditTime: 2022-07-20 15:22:50
 * good good study 📚, day day up ✔️.
-->
<script setup lang="ts">
import { NSpace, NLayout, NLayoutHeader, NLayoutSider, NMenu } from 'naive-ui';
import type { MenuOption } from 'naive-ui';

const menuOptions: MenuOption[] = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat',
      },
    ],
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    disabled: true,
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
          },
          {
            label: '羊男',
            key: 'sheep-man',
          },
        ],
      },
      {
        label: '饮品',
        key: 'beverage',
        children: [
          {
            label: '威士忌',
            key: 'whisky',
          },
        ],
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich',
          },
        ],
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes',
      },
    ],
  },
];

const defaultExpandedKeys = ['food'];

function handleUpdateExpandedKeys(keys: string[]) {
  message.info('[onUpdate:expandedKeys]: ' + JSON.stringify(keys));
}
</script>

<template>
  <n-space vertical size="large">
    <n-layout has-sider content-style="height: 100vh;">
      <n-layout-sider>
        <n-menu
          :options="menuOptions"
          :default-expanded-keys="defaultExpandedKeys"
          @update:expanded-keys="handleUpdateExpandedKeys"
        />
      </n-layout-sider>
      <n-layout>
        <n-layout-header>顶部</n-layout-header>
        <n-layout-content>内容</n-layout-content>
      </n-layout>
    </n-layout>
  </n-space>
</template>


<style scoped>
.n-layout-sider {
  border: 1px solid red;
}
.n-layout-header {
  height: 80px;
  border: 1px solid blue;
}
.n-layout-content {
  border: 1px solid purple;
}
</style>