<script setup>

</script>

<template>
  <div>
    <div class="main-container">
      <div class="container">
        <div class="content">
          <h3><span>Животным нужен дом</span> возьмите себе друга!</h3>
          <p>
            С нашей помощью более 300 питомцев нашли себе новую заботливую
            семью. Помогите еще одному четвероногому другу стать счастливым!
          </p>
          <a>Связаться с нами</a>
        </div>
        <div class="cards">
          <div class="adapt-card">
            <div class="single-card">
              <div class="logo">
                <img src="../imagess/1.1.png" alt="" />
              </div>
              <h1>81</h1>
              <span>Сейчас в приюте</span>
            </div>
            <div class="double-card">
              <div class="single-card">
                <div class="logo">
                  <img src="../imagess/3.png" alt="" />
                </div>
                <h1>200+</h1>
                <span>Собак нашли новый дом</span>
              </div>
              <div class="single-card">
                <div class="logo">
                  <img src="../imagess/2.png" alt="" />
                </div>
                <h1>50+</h1>
                <span>Кошек нашли новый дом</span>
              </div>
            </div>
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
  margin: 50px 15px 100px 15px;
  display: flex;
  flex-direction: row;
  width: 1140px;
  align-items: center;
  justify-content: space-between;
}
.content {
  max-width: 450px;
}
.content h3 {
  font-size: 50px;
  font-weight: 700;
  line-height: 60px;
  color: #191d34;
  font-family: "Poppins", sans-serif;
}
.content span {
  font-weight: 300;
}
.content p {
  max-width: 400px;
  color: #66666f;
  line-height: 23px;
  font-size: 16px;
  margin-bottom: 54px;
  margin-top: 30px;
}
a {
  cursor: pointer;
  background: #ff3500;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid transparent;
  color: #fff;
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
a:hover {
  color: #ff3500;
  background: #fff;
  border: 2px solid #ff3500;
  transition: 0.3s;
}
.adapt-card {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.single-card {
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-shadow: 0 5px 15px 5px #e8edf1;
  border-radius: 20px;
  margin: 15px;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.single-card h1 {
  font-size: 60px;
  font-weight: 700;
  color: #383737;
  display: inline-block;
  margin-bottom: 2px;
  margin-top: 22px;
  line-height: 1;
}
.single-card span {
  max-width: 160px;
  font-size: 20px;
  color: #808080;
  font-weight: 400;
  display: block;
  margin-bottom: 0;
}
@media (max-width: 850px){
  .container{
    display: flex;
  flex-direction: column;
  }
  .adapt-card {
    display: flex;
  flex-direction: column;
}
.single-card span {
  max-width: 100%;
}
.single-card{
  width: 100%;
  margin: 0;
  margin-top: 20px;
}
}
</style>
