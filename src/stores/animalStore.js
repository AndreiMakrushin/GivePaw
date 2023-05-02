import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useAnimalStore = defineStore("animals", () => {
  const openModal = ref(false);
  const getAnimals = async() => {
    const response = await axios.get('http://localhost:1337/api/animals')

    console.log(response);
  };
  getAnimals()
  const setAnimals = () => {};
  return { getAnimals, setAnimals, openModal };
});
