<script setup>
 import gsap from "gsap"
const props = defineProps(["animals"]);
const afterEnter = (el)=>{
  }
  const beforeEnter = (el) =>{
    el.style.opacity = 0;
    el.style.transform = "translateY(-50px)";
  }
  const enter = (el) =>{
    gsap.to(el, {
      y: 0,
      opacity: 1,
      duration: 0.9,
      delay: el.dataset.index * 0.3
    })
    
  }
</script>
<template>
  <div>
    <div class="container">
      <transition-group
        name="fade"
        appear
        @after-enter="afterEnter"
        @before-enter="beforeEnter"
        @enter="enter"
      >
        <div
          class="one-card-container"
          v-for="(oneAnimal, index) in props.animals.test"
          :key="oneAnimal.id"
          :data-index="index"
        >
          <div class="card">
            <div class="image">
              <img
                :src="`http://localhost:1337${oneAnimal.attributes.img.data[0].attributes.url}`"
              />
            </div>
            <div class="content">
              <h1 class="desc">{{ oneAnimal.attributes.name }}</h1>
              <h4 class="desc">Порода: {{ oneAnimal.attributes.breed }}</h4>
              <span class="desc">Размер: {{ oneAnimal.attributes.size }}</span>
              <h4 class="desc">Пол: {{ oneAnimal.attributes.gender }}</h4>
              <h2 class="desc">{{ oneAnimal.attributes.region }}</h2>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>
<style scoped>

.image {
  max-width: 350px;
}
img {
  width: 100%;
  border-radius: 20px;
}
.desc {
  padding: 10px 10px;
}
.one-card-container {
  margin: 15px;
  border: 2px solid #a6b0b9;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.2);
}
.container {
  display: flex;
  flex-direction: row;
}
</style>
