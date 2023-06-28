<script setup>
import { ref, watch} from "vue";
import Dropdown from "primevue/dropdown";
import { useAnimalStore } from "../stores/animalStore";
const props = defineProps(["result"]);
const animal = useAnimalStore()



const animalFilter = props.result.map((animal) => {
  return animal.attributes;
});


const type = ref("");
const gender = ref("");
const breed = ref("");
 
watch(type, () => {
  animal.typeAnimal = type.value.type;
});
watch(gender, () => {
  animal.genderAnimal = gender.value.gender;
});
watch(breed, () => {
  animal.breedAnimal = breed.value.breed;
});

console.log(animalFilter);
</script>
<template>
  <h1>Фильтрация</h1>
  <div class="card flex justify-content-center">
    <div class="p-float-label">
      <Dropdown
        v-model="type"
        inputId="dd-city"
        :options="animalFilter"
        optionLabel="type"
        placeholder="Выберите питомца"
        class="w-full md:w-14rem"
      />
      <label for="dd-city">Выберите питомца</label>
    </div>
    <div class="p-float-label">
      <Dropdown
        v-model="gender"
        inputId="dd-city"
        :options="animalFilter"
        optionLabel="gender"
        placeholder="Выберите пол"
        class="w-full md:w-14rem"
      />
      <label for="dd-city">Выберите пол</label>
    </div>
    <div class="p-float-label">
      <Dropdown
        v-model="breed"
        inputId="dd-city"
        :options="animalFilter"
        optionLabel="breed"
        placeholder="Выберите породу"
        class="w-full md:w-14rem"
      />
      <label for="dd-city">Выберите породу</label>
    </div>
  </div>
</template>
<style scoped>
:deep(.p-dropdown-label) {
  width: 300px;
}
:deep(.p-dropdown) {
  margin: 20px;
}
label {
  margin-left: 16px;
}
</style>
