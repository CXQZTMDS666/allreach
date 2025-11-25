<script setup>
  import layoutNav from './components/layoutNav.vue'
  import layoutHeader from './components/layoutHeader.vue'
  import layoutFooter from './components/layoutFooter.vue'
  import layoutFixed from './components/layoutFixed.vue'

//触发获取导航列表的action

import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()

onMounted(() => categoryStore.getCategory())
</script>

<template>
  <layoutFixed />
  <layoutNav />
  <layoutHeader />
  <!-- 添加key 破坏复用机制 强制销毁重建 但是会销毁整个页面，包括不需要更改的-->
  <!-- <RouterView :key="$route.fullPath"/> -->
   <RouterView/>
  <layoutFooter />
</template>