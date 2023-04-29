<script setup>
import { RouterView } from "vue-router";
import { useAnimalStore } from './stores/animalStore';
import HeaderPage from "./components/HeaderPage.vue";
import FooterPage from "./components/FooterPage.vue";
import ModalPage from './components/ModalPage.vue';

const animals = useAnimalStore()
</script>

<template>
  <div>
    <ModalPage v-if="animals.openModal"/>
    <HeaderPage />
    <RouterView />
    <FooterPage />
  </div>
</template>
<style scoped>
html {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
