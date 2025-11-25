<script setup>
import homeCategory from './components/homeCategory.vue'
import homeBanner from './components/homeBanner.vue'
import homeNew from './components/homeNew.vue'
import homeHot from './components/homeHot.vue'
import homeProduct from './components/homeProduct.vue'
import homePanel from './components/homePanel.vue'
</script>

<template>
  <div class="container">
    <homeCategory />
    <homeBanner />
  </div>
  <homeNew />
  <homeHot />
  <homeProduct />
  <!-- 测试面板组件 -->
   <homePanel title="新鲜好物" sub-title="新鲜">

   </homePanel>
   <homePanel title="人气推荐">

   </homePanel>
</template>

<style>

</style>