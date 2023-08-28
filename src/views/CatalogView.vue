<script setup>

import { useAnimalStore } from "../stores/animalStore";
import CardsCatalog from "../components/CardsCatalog.vue";

const animals = useAnimalStore();
</script>
<template>
  <div>
    <div class="content-container">
      <h1>Каталог животных</h1>
      <div class="container">
        <div class="catalog-component">
          <CardsCatalog :animals="animals" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content-container {
  text-align: center;
  margin: 0 auto;
  max-width: 1200px;
}
.filter-component {
  max-height: 400px;
}
.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
h1 {
  margin-bottom: 80px;
  font-size: 60px;
}
</style>
