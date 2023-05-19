import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useAnimalStore = defineStore("animals", () => {
  const openModal = ref(false);
  const getAnimals = async() => {
   const responce = await axios.get('http://localhost:1337/api/animals?populate=*')
   return responce.data
  }

  const setAnimals = () => {};
  return { getAnimals, setAnimals, openModal };
});
