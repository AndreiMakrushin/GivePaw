import { defineStore } from "pinia";
import { computed, onMounted, ref } from "vue";
import axios from "axios";

export const useAnimalStore = defineStore("animals", () => {
  const openModal = ref(false);
  const typeAnimal = ref("");
  const genderAnimal = ref("");
  const breedAnimal = ref("");
  const store = ref([]);

  const getAnimals = async () => {
    const response = await axios.get(
      "http://localhost:1337/api/animals?populate=*"
    );
    store.value = response.data;
  };

  onMounted(() => {
    getAnimals();
  });

  const test = computed(() => {
    if (Array.isArray(store.value.data)) {
      return store.value.data.filter((animal) => {
        return (
          animal.attributes.type.includes(typeAnimal.value) &&
          animal.attributes.gender.includes(genderAnimal.value) &&
          animal.attributes.breed.includes(breedAnimal.value)
        );
      });
    } else {
      return [];
    }
  });

  const setAnimals = () => {};
  return {
    getAnimals,
    test,
    setAnimals,
    openModal,
    typeAnimal,
    genderAnimal,
    breedAnimal,
    store,
  };
});

/* const readAnimalList = async () => {
 const result = await getAnimals()

const animals = computed(()=>{
  return result.data.filter((animal)=>{
    console.log(animal.attributes);
    return  animal.attributes.type.includes(typeAnimal.value) || animal.attributes.gender.includes(genderAnimal.value) || animal.attributes.breed.includes(breedAnimal.value)
  })
})
console.log(animals);
  return result.data
}
 */
