<script setup>
import BannerAboutUs from "../components/BannerAboutUs.vue";
import ContactsPage from "../components/ContactsPage.vue";
</script>
<template>
  <div>
    <BannerAboutUs>
      <template #banneraboutus>
        <div>
          <h3>Контакты</h3>
        </div>
      </template>
    </BannerAboutUs>
    <ContactsPage/>
  </div>
</template>
<style scoped>
h3{
    font-size: 50px;
    color: #fff;
    margin-bottom: 0;
    font-family: "Poppins", sans-serif;
    text-transform: capitalize;
}
</style>
