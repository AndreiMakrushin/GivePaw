<template>
  <div>
    <div class="main-container">
      <div class="container">
        <img src="../images/1.png" alt="" />

        <div class="text-content">
          <h3>имя Фамилия</h3>
          <p>Основатель фонда помощи бездомным животным</p>
          <span>
            В 2020 году Имя Фамилия стала основателем Фонда помощи бездомным
            животным. С тех пор свой дом нашли более 300 кошек и собак.</span
          >
        </div>
        <div class="description"></div>
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
  margin: 150px 0 120px 0;
  padding: 70px;
  width: 920px;
  align-items: center;
  display: flex;
  border-radius: 20px;
  box-shadow: 0 5px 15px 5px #e8edf1;
}
img {
  margin-right: 25px;
}
.text-content {
  display: flex;
  flex-direction: column;
}
.text-content h3 {
  font-size: 20px;
  font-weight: 600;
  color: #383737;
  margin-bottom: 0;
}
.text-content p {
  display: block;
  color: #979797;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 16px;
  margin-bottom: 16px;
  line-height: 1;
  margin-top: 3px;
}
.text-content span {
  font-size: 18px;
  color: #66666f;
  margin-bottom: 0;
  line-height: 35px;
}
@media (max-width: 700px) {
  .container {
    margin: 5px;
    flex-direction: column;
  }
}
</style>
