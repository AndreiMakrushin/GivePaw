<script setup>
import { useAnimalStore } from '../stores/animalStore';
const animals = useAnimalStore()
const opennModal = () =>{
    animals.openModal = true
}

</script>
<template>
  <div>
    <div class="title-container">
      <div class="title">
        <div class="title-text">
          <span
            >Фонд помощи
            <h3>Бездомным животным</h3></span
          >
          <p>Помогаем бездомным животным обрести любящую семью.</p>
          <a @click="opennModal">Связаться с нами</a>
        </div>

        <div class="image">
          <img src="../images/dog.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.title-container {
  font-family: "Poppins", sans-serif;
  justify-content: center;
  align-items: center;
  display: flex;
  background-image: url("../images/banner.png");
  background-position: center center;
  background-size: cover;
  padding-top: 100px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.title {
  width: 1140px;
  display: flex;
  justify-content: space-between;
}
h3 {
  color: white;
}
.title-text {
  max-width: 450px;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  margin-bottom: 4px;
  z-index: 0;
}
.title-text span {
  line-height: 85px;
  font-size: 75px;
}
.title-text p {
  margin-top: 20px;
  line-height: 30px;
  font-size: 20px;
  padding-bottom: 30px;
}
.image {
  left: 40%;
  position: absolute;
  z-index: 9;
}
img {
  width: 100%;
}
a {
  background: #fff;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid transparent;
  color: #ff3500;
  padding: 17px 50px;
  font-family: "Poppins", sans-serif;
  display: inline-block;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  text-decoration: none;
  border: 2px solid transparent;
  transition: 0.3s;
  margin-bottom: 100px;
}
h3 {
  font-weight: bold;
  font-weight: 800;
}
a:hover {
  color: #fff;
  background: #ff3500;
  border: 2px solid #fff;
  transition: 0.3s;
}
@media (max-width: 1100px) {
  .title-text {
    padding-left: 10px;
  }
  .title-text span {
    line-height: 65px;
    font-size: 55px;
  }
  .title-text p {
    line-height: 30px;
    font-size: 20px;
    padding-bottom: 30px;
  }
}
@media (max-width: 850px) {
  .title-text {
    max-width: 250px;
    padding-left: 10px;
  }
  .title-text span {
    line-height: 45px;
    font-size: 35px;
  }
  .title-text p {
    line-height: 20px;
    font-size: 15px;
    padding-bottom: 30px;
  }
}
@media (max-width: 700px) {
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title-text {
    max-width: 250px;
    padding-left: 10px;
  }
  .title-text span {
    line-height: 45px;
    font-size: 35px;
  }
  .title-text p {
    line-height: 20px;
    font-size: 15px;
    padding-bottom: 30px;
  }
}
</style>
