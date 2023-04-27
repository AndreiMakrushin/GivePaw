<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <main>
    <div class="main">
      <div class="header">
        <div class="logo">
          <img src="../images/logo.png" alt="" />
        </div>
        <div class="menu">
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
.active {
  color: #fd7e14;
}
</style>
