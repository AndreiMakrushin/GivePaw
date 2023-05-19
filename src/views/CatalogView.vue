<script setup>
    import { ref, onMounted } from "vue";
    import { useAnimalStore } from "../stores/animalStore";

    const animals = useAnimalStore()
    const result = ref(null)

    onMounted(async()=>{
        const animal = await animals.getAnimals()
        result.value = animal.data
    })
</script>
<template>
    <div>
        <div class="catalog-container">
            <div class="container" v-for="oneAnimal in result" :key="oneAnimal.id">
                <h2>{{oneAnimal.attributes.name}}</h2>
                <h2>{{oneAnimal.attributes.breed}}</h2>
                <h2>{{oneAnimal.attributes.size}}</h2>
                <h2>{{oneAnimal.attributes.descriptions}}</h2>
                <h2>{{oneAnimal.attributes.overexposure}}</h2>
                <h2>{{oneAnimal.attributes.gender}}</h2>
                <img :src="`http://localhost:1337${oneAnimal.attributes.img.data[0].attributes.url}`">
                <h2>{{oneAnimal.attributes.type}}</h2>
                <h2>{{oneAnimal.attributes.date}}</h2>
                <h2>{{oneAnimal.attributes.region}}</h2>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .catalog-container{
        display: flex;
        justify-content: center;
    }
    h1{
        font-size: 60px;
    }
</style>