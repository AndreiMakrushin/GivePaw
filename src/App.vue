<script setup>
import {  RouterView } from 'vue-router'
import HeaderPage from './components/HeaderPage.vue';
import FooterPage from './components/FooterPage.vue';
</script>

<template>
  <div>
    <HeaderPage/>
    <RouterView />
    <FooterPage/>
  </div>
</template>
<style scoped>
html {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>