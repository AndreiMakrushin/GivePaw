<template>
  <div>
    <div class="main-container">
      <div class="container">
        <slot name="banneraboutus"></slot>
        
      </div>
    </div>
  </div>
</template>
<style scoped>
.main-container {
  justify-content: center;
  align-items: center;
  display: flex;
  background-image: url("../images/bradcam.png");
  background-position: center center;
  background-size: cover;
  padding-top: 150px;
  padding-bottom: 140px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.container {
  font-size: 50px;
  color: #fff;
  font-weight: 900;
  margin-bottom: 0;
  text-transform: capitalize;
}
</style>
