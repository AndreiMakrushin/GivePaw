<script setup>
import BannerPage from "../components/BannerPage.vue";
import TitlePage from "../components/TitlePage.vue";
import ServicesView from "../components/ServicesView.vue";
import AboutUsPage from "../components/AboutUsPage.vue";
import InformationAboutTheNumberOfAnimals from "../components/InformationAboutTheNumberOfAnimalsPage.vue";
import FounderSponsorPage from "../components/FounderSponsorPage.vue";
</script>

<template>
  <div>
    <TitlePage />
    <ServicesView>
      <template #header>
        <div>
          <h3>Забота о каждом животном</h3>
          <p>
            Помогаем бездомным животным обрести семью. Заботимся об их здоровье
            и подготавливаем к переезду в новый дом!
          </p>
        </div>
      </template>
      <template #content1>
        <div>
          <h3>Проверка здоровья</h3>
          <p>
            Все животные, поступившие в приют проходят обязательный осмотр у
            ветеринара.
          </p>
        </div>
      </template>
      <template #content2>
        <div>
          <h3>Дрессировка</h3>
          <p>
            Волонтеры обучают собак базовым командам и готовят их к переезду в
            новый дом.
          </p>
        </div>
      </template>
      <template #content3>
        <div>
          <h3>Социализация</h3>
          <p>
            Специально обученный человек помогает животным стать доверчивее к
            людям.
          </p>
        </div>
      </template>
    </ServicesView>
    <AboutUsPage />
    <InformationAboutTheNumberOfAnimals />
    <FounderSponsorPage />
    <BannerPage />
  </div>
</template>
