<script setup>
import { ref, onMounted } from "vue";
import FilterCatalogVue from "../components/FilterCatalog.vue";
import { useAnimalStore } from "../stores/animalStore";
import CardsCatalog from "../components/CardsCatalog.vue";

const animals = useAnimalStore();
const result = ref(null);
onMounted(() => {
  result.value = animals.test;
  if (!animals.test) {
    console.log("выполняется загрузка контента");
  }
});
</script>
<template>
  <div>
    <div class="content-container">
      <div class="container">
        <div class="filter-component">
          <FilterCatalogVue v-if="result !== null" :result="result"/>
        </div>

        <div class="catalog-component">
          <CardsCatalog :animals="animals" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content-container{
  margin: 0 auto;
  max-width: 1200px;
}
.filter-component{
  max-height: 400px;
}
.container{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
h1 {
  font-size: 60px;
}
</style>
