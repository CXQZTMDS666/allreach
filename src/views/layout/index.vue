<script setup>
  import layoutNav from './components/layoutNav.vue'
  import layoutHeader from './components/layoutHeader.vue'
  import layoutFooter from './components/layoutFooter.vue'
  import layoutFixed from './components/layoutFixed.vue'
</script>

<template>
  <layoutFixed />
  <layoutNav />
  <layoutHeader />
  <RouterView />
  <layoutFooter />
</template>