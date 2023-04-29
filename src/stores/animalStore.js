import { defineStore } from "pinia";
import {ref} from "vue"

export const useAnimalStore = defineStore("animals", () => {
  const openModal = ref(false);
  const getAnimals = () => {};
  const setAnimals = () => {};
  return { getAnimals, setAnimals, openModal };
});
