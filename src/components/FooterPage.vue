<template>
  <div class="main">
    <div class="footer">
      <div class="contacts">
        <h3>Контакты</h3>
        <ui>
          <li>+7 922 474 09 23</li>
          <li><a href="#">@gmail.com</a></li>
          <li>Россия, Тюмень, 50 лет Октября</li>
        </ui>
      </div>
      <div class="main-info">
        <h3>Общая информация</h3>
        <ui>
          <li><a href="#">Информация о животных</a></li>
          <li><a href="#">Ветерная клиника</a></li>
          <li><a href="#">Наши партнеры</a></li>
        </ui>
      </div>
      <div class="fond">
        <h3>Наш Фонд</h3>
        <ui>
          <li><a href="#">О Нас</a></li>
          <li><a href="#">Политика конфиденциальности</a></li>
        </ui>
      </div>
      <div class="logo">
        <img src="../images/logo.png" alt="" />
        <ui>
          <li>Россия, Тюмень</li>
        </ui>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  display: flex;
  justify-content: center;
}
.footer {
  width: 1140px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 30px;
  padding-top: 120px;
}
h3 {
  font-size: 25px;
  font-weight: 500;
  color: #2e2e2e;
  text-transform: capitalize;
  margin-bottom: 36px;
  font-family: "Poppins", sans-serif;
  position: relative;
}
ui {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #7a7a7a;
  transition: 0.3s;
}
a:hover {
  color: #fd7e14;
  transition: 0.3s;
}
li {
  list-style: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 40px;
  font-family: "Poppins", sans-serif;
  color: #7a7a7a;
}
@media (max-width: 850px) {
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 30px;
    padding-top: 120px;
    text-align: center;
  }
  .contacts,
  .main-info,
  .fond,
  .logo {
    margin-bottom: 20px;
    border-bottom: 1px solid #dbd8d8;
  }
}
</style>
