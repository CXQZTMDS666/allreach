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
  <RouterView />
  <layoutFooter />
</template>