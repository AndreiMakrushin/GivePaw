<script setup>
import { onMounted, ref, watch } from "vue";
import { useAnimalStore } from "../stores/animalStore";
import Dropdown from "primevue/dropdown";
import { storeToRefs } from "pinia";

const animals = useAnimalStore();
const animal = storeToRefs(animals);

const animalFilter = ref([]);
const animalType = ref([]);
const animalGender = ref([]);
const animalBreed = ref([]);

onMounted(async () => {
  await animals.getAnimals();

  animalType.value = Array.from(
    new Set(animal.store.value.data.map((animal) => animal.attributes.type))
  ).map((type) => ({ type }));
  animalGender.value = Array.from(
    new Set(animal.store.value.data.map((animal) => animal.attributes.gender))
  ).map((gender) => ({ gender }));
});

const type = ref("");
const gender = ref("");
const breed = ref("");

watch(type, () => {
  animalFilter.value = animal.store.value.data.filter(
    (animal) => animal.attributes.type === type.value.type
  );
  animalBreed.value = animalFilter.value
    .map((animal) => animal.attributes.breed)
    .map((breed) => ({ breed }));
});

watch(type, () => (animals.typeAnimal = type.value.type));
watch(gender, () => (animals.genderAnimal = gender.value.gender));
watch(breed, () => (animals.breedAnimal = breed.value.breed));
</script>

<template>
  <h1>Фильтрация</h1>
  <div class="card flex justify-content-center" v-if="animal.test">
    <div class="p-float-label">
      <Dropdown
        v-model="type"
        inputId="dd-city"
        :options="animalType"
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
        :options="animalGender"
        optionLabel="gender"
        placeholder="Выберите пол"
        class="w-full md:w-14rem"
      />
      <label for="dd-city">Выберите пол</label>
    </div>
    <div class="p-float-label" v-if="type">
      <Dropdown
        v-model="breed"
        inputId="dd-city"
        :options="animalBreed"
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
