<template>
  <div>
    <div class="banner-container">
      <div class="banner">
        <h1>Нашли животное на улице?</h1>
        <h3>
          Если вы нашли на улице животное, свяжитель с нами. Мы приедем и окажем
          ему всю необходимую помощь, а также постараемся найти ему новый дом.
        </h3>
        <div class="contacts">
          <a href="#">Контакты</a>
          <p>или</p>
          <p class="numberPhone">+7 922 474 03 43</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.banner-container {
  margin-top: 70px;
  justify-content: center;
  align-items: center;
  display: flex;
  background-image: url("../images/contact_bg.png");
  background-position: center center;
  background-size: cover;
  padding-top: 150px;
  padding-bottom: 140px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.banner {
 
  max-width: 730px;
  text-align: center;
}
h1 {
  color: #fff;
  font-size: 50px;
  font-weight: 700;
  line-height: 60px;
}
h3 {
  font-size: 25px;
  font-weight: 100;
  color: #fff;
  line-height: 40px;
  margin-top: 35px;
  margin-bottom: 50px;
}
.contacts {
  display: flex;
  flex-direction: row;
  margin: 20px;
  justify-content: center;
  align-items: center;
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
}
a:hover {
  color: #fff;
  background: #ff3500;
  border: 2px solid #fff;
  transition: 0.3s;
}
p {
  padding: 0 0 0 20px;
  color: #fff;
}
.numberPhone {
  font-weight: bold;
}
</style>
