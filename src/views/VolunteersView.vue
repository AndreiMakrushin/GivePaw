<script setup>
import BannerPage from "../components/BannerPage.vue";
import ServicesView from "../components/ServicesView.vue";
import BannerAboutUs from "../components/BannerAboutUs.vue";
</script>
<template>
  <div>
    <BannerAboutUs>
        <template #banneraboutus>
            <div>
                <h3 class="title-volunteers">Волонтеры</h3>
            </div>
        </template>
    </BannerAboutUs>
    <ServicesView>
      <template #header>
        <div>
          <h3>Вы хотите стать волонтером?</h3>
          <p>
            Если вы хотите стать волонтёром, звоните по телефону 8(3452)3-22-86.
          </p>
        </div>
      </template>
      <template #content1>
        <div>
          <h3>Волонтёрство</h3>
          <p>это вклад в общее дело, развитие культуры и общества.</p>
        </div>
      </template>
      <template #content2>
        <div>
          <h3>Волонтер в приюте</h3>
          <p>востребован для прогулок с животными и игр с ним.</p>
        </div>
      </template>
      <template #content3>
        <div>
          <h3>Волонтер в приюте</h3>
          <p>помогает животным пройти адаптацию и социализацию.</p>
        </div>
      </template>
    </ServicesView>
    <BannerPage />
  </div>
</template>
<style scoped>
.title-volunteers{
  color: white;
}
</style>
