<script setup></script>
<template>
  <div>
    <div class="contact-container">
      <div class="conteiner">
        <div class="contacts">
          <div class="header">
            <h1>
              Информация для желающих принять участие в благотворительности
            </h1>
          </div>
          <div class="contact">
            <div class="contact-dog">
              <p>Если хотите приютить собаку</p>
              <span>+7 (700) 789 19 19</span>
              <span>+7 (500) 759 79 19</span>
            </div>
            <div class="contact-volunteer">
              <p>Благотворительность, волонтерское движение</p>
              <span>+7 (600) 789 19 89</span>
              <span>+7 (530) 759 49 19</span>
            </div>
            <div class="contact-adress">
              <p>Адрес</p>
              <span>где-то на карте планеты Земли</span>
            </div>
            <div class="contact-logos">
              <p>happy@gmail.d</p>
              <span>Пн, Ср, Пт - 11:00-18:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
}
.conteiner {
  margin-top: 60px;
  width: 1140px;
  text-align: center;
}
.contacts {
  margin: 5px;
  flex-direction: column;
}
.header h1 {
  font-weight: bold;
  color: #2e2e2e;
}
.contact {
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
p {
    font-size: 25px;
  color: #2e2e2e;
  font-weight: 400;
}
.contact-dog,
.contact-volunteer,
.contact-adress,
.contact-logos {

  max-width: 100%;
  display: flex;
  flex-direction: column;
}
span {
    font-size: 16px;
    line-height: 40px;
  font-weight: bold;
  color: #7a7a7a;
}
@media (max-width: 850px) {
  .contact {
    flex-direction: column;
  }
  .contact-dog,
  .contact-volunteer,
  .contact-adress,
  .contact-logos {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #dbd8d8;
  }
}
</style>
