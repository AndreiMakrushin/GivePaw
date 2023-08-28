<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useAnimalStore } from "../stores/animalStore";
import Dropdown from "primevue/dropdown";
import { storeToRefs } from "pinia";

const animals = useAnimalStore();
const animal = storeToRefs(animals);

const animalBreed = ref([]);
const arrGAnderType = ref([]);

onMounted(async () => {
  await animals.getAnimals();
  arrGAnderType.value = animal.store.value.data.reduce((acc, animal) => {
    const typeObj = { type: animal.attributes.type };
    const genderObj = { gender: animal.attributes.gender };

    if (!acc.some((obj) => obj.type === typeObj.type)) {
      acc.push(typeObj);
    }
    if (!acc.some((obj) => obj.gender === genderObj.gender)) {
      acc.push(genderObj);
    }

    return acc;
  }, []);
});

const filteredGenderType = computed(() => {
  return arrGAnderType.value.filter((item) =>
    Object.values(item).some((value) => value !== "" && value !== undefined)
  );
});

watch(animal.typeAnimal, () => {
  animalBreed.value = animal.store.value.data.reduce((acc, animals) => {
    if (animals.attributes.type === animal.typeAnimal.value) {
      acc.push({ breed: animals.attributes.breed });
    }
    return acc;
  }, []);
});
</script>

<template>
  <div>
    <h1>Фильтрация</h1>
    <div class="card flex justify-content-center" v-if="animal.test">
      <div class="p-float-label">
        <Dropdown
          v-model="animal.typeAnimal.value"
          inputId="dd-city"
          :options="filteredGenderType"
          optionLabel="type"
          optionValue="type"
          placeholder="Выберите питомца"
          class="w-full md:w-14rem"
        />
        <label for="dd-city">Выберите питомца</label>
      </div>
      <div class="p-float-label">
        <Dropdown
          v-model="animal.genderAnimal.value"
          inputId="dd-city"
          :options="filteredGenderType"
          optionLabel="gender"
          optionValue="gender"
          placeholder="Выберите пол"
          class="w-full md:w-14rem"
        />
        <label for="dd-city">Выберите пол</label>
      </div>
      <div class="p-float-label" v-if="animal.typeAnimal">
        <Dropdown
          v-model="animal.breedAnimal.value"
          inputId="dd-city"
          :options="animalBreed"
          optionLabel="breed"
          optionValue="breed"
          placeholder="Выберите породу"
          class="w-full md:w-14rem"
        />
        <label for="dd-city">Выберите породу</label>
      </div>
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
h1 {
  text-align: center;
}
</style>
