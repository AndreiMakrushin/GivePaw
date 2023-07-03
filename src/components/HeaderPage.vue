<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

const burgerVisible = ref(false);
</script>
<template>
  <main>
    <div class="main">
      <div class="header">
        <div class="logo">
          <img src="../imagess/logo.png" alt="" />
        </div>
        <div class="burger" @click="burgerVisible = true">
          <img src="../imagess/menu.png" alt="" />
        </div>
        <div
          class="menu"
          :class="burgerVisible === true ? 'active-menu' : ''"
          @click="burgerVisible = false"
        >
          <div class="burger" @click="burgerVisible = false">
            <img src="../imagess/close.png" alt="" />
          </div>
          <ui>
            <li>
              <RouterLink active-class="active" class="text" to="/"
                >Главная</RouterLink
              >
            </li>
            <li>
              <RouterLink active-class="active" class="text" to="/catalog"
                >Каталог</RouterLink
              >
            </li>
            <li>
              <RouterLink active-class="active" class="text" to="/aboutUs"
                >О Нас</RouterLink
              >
            </li>
            <li>
              <RouterLink active-class="active" class="text" to="/volunteers"
                >Волонтеры</RouterLink
              >
            </li>
            <li>
              <RouterLink active-class="active" class="text" to="/contact"
                >Контакты</RouterLink
              >
            </li>
          </ui>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.main {
  display: flex;
  justify-content: center;
}
.header {
  width: 1140px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.burger {
  margin-right: 10px;
  width: 50px;
  height: 50px;
}
.burger img {
  width: 100%;
}
.text {
  text-decoration: none;
  transition: 0.3s;
  color: #102955;
  padding: 10px;
}
.text:hover {
  color: #fd7e14;
  transition: 0.3s;
}
.active {
  color: #fd7e14;
}
ui {
  display: flex;
  flex-direction: row;
  color: darkblue;
  font-size: 18px;
}
li {
  list-style: none;
  font-weight: 500;
  cursor: pointer;
}
@media (max-width: 750px) {
  .menu {
    position: absolute;
    margin-top: -100%;
  }
  .active-menu {
    transition: 0.3s;
    margin-top: 150%;
    position: absolute;
    right: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    z-index: 9;
  }
  .active-menu ui {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  .active-menu li {
    margin: 5px;
    font-size: 25px;
  }
}

@media (min-width: 750px) {
  .burger {
    display: none;
  }
}
</style>
