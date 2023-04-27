<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>
<template>
  <div>
    <div class="main-container">
      <div class="container">
        <div class="image">
          <img src="../images/pet_care.png" alt="" />
        </div>
        <div class="content">
          <div class="header-content">
            <span>Мы заботимся о <b>бездомных животных</b></span>
          </div>
          <div class="body-content">
            <span
              >Нам нужна именно ваша помощь. В новые семьи отдано более 300
              собак и кошек.</span
            >
            <br />
            <span
              >Если Вы хотите забрать себе животное из приюта, обращайтесь к
              нам!</span
            >
          </div>
          <div class="footer-content">
            <a @click="router.push(`/aboutUs`)">О нас</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main-container {
  display: flex;
  justify-content: center;
}
.container {
  width: 1140px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 170px;
}
.content {
  max-width: 460px;
}
.header-content span {
  font-size: 50px;
  line-height: 60px;
  color: #191d34;
  font-family: "Poppins", sans-serif;
}
.body-content {
  color: #66666f;
  line-height: 28px;
  font-size: 16px;
  margin-bottom: 54px;
  margin-top: 30px;
}
a {
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  padding: 17px 55px;
  font-family: "Poppins", sans-serif;
  display: inline-block;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  background-position: 100% 0;
  background-position: 0 0;
  text-decoration: none;
  background-image: -webkit-linear-gradient(0deg, #f14437 0%, #ed5b0d 99%);
  border: 2px solid transparent;
  transition: 0.3s;
}
a:hover {
  border: 2px solid #f14437;
  background-image: -webkit-linear-gradient(0deg, #fff 0%, #fff 99%);
  color: #ed5b0d;
  transition: 0.3s;
}
</style>
