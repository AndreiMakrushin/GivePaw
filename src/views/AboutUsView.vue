<script setup>
  import BannerPage from '../components/BannerPage.vue'
  import FounderSponsorPage from '../components/FounderSponsorPage.vue';
  import InformationAboutTheNumberOfAnimalsPage from '../components/InformationAboutTheNumberOfAnimalsPage.vue';
  import AboutUsPage from '../components/AboutUsPage.vue';
  import BannerAboutUs from '../components/BannerAboutUs.vue'
  
</script>
<template>
  <div>
    <BannerAboutUs>
      <template #banneraboutus>
        <div>
          <h3>О нас</h3>
        </div>
      </template>
    </BannerAboutUs>
    <AboutUsPage/>
    <InformationAboutTheNumberOfAnimalsPage/>
    <FounderSponsorPage/>
    <BannerPage/>
  </div>
</template>

<style scoped>
  h3{
    color: white;
  }
</style>
