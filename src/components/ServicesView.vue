<script></script>
<template>
  <div>
    <div class="services-container">
      <div class="services">
        <div class="title-services">
          <slot name="header"></slot>
        </div>
        <div class="cards-services">
          <div class="card">
            <div class="single-card">
              <div class="img-card">
                <div class="icon">
                  <img src="../images/service_icon_1.png" alt="" />
                </div>
              </div>
              <div class="card-text-content">
                <slot name="content1"></slot>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="single-card">
              <div class="img-card">
                <div class="icon">
                  <img src="../images/service_icon_2.png" alt="" />
                </div>
              </div>
              <div class="card-text-content">
                <slot name="content2"></slot>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="single-card">
              <div class="img-card">
                <div class="icon">
                  <img src="../images/service_icon_3.png" alt="" />
                </div>
              </div>
              <div class="card-text-content">
                <slot name="content3"></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.services-container {
  display: flex;
  justify-content: center;
}
.services {
  width: 1140px;
  text-align: center;
  justify-content: center;
  margin-top: 220px;
}

.cards-services {
  margin-top: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.card {
  align-items: center;
}
.single-card:hover {
  transform: scale(1.01);
  border: 1px solid white;
  box-shadow: 0 5px 15px 5px #e8edf1;
}
.single-card {
  margin: 10px;
  padding: 70px 25px 65px 25px;
  border: 1px solid #ffc5c2;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  margin-bottom: 30px;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
.img-card {
  height: 140px;
  width: 160px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: auto;
  background-image: url("../images/service_icon_bg_1.png");
}
img {
  margin-top: 30px;
}
@media (max-width: 950px) {
  .cards-services {
    flex-direction: column;
  }
}
</style>
