<script setup lang="ts">
import { ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
// defineProps<{}>();
// import aa from "../../assets/mrnsmtuqt95g4y6c-0_0_desktop_0_1X.jpg";
import bb from "../../assets/8gqevxw9hfoogwqx-0_0_desktop_0_1X.jpg";
// import cc from "../../assets/e51hz2knhx9dulvi-0_0_desktop_0_1X.jpg";
// import dd from "../../assets/plyii8g5pxwod3jx-0_0_desktop_0_1X.jpg";
// import ee from "../../assets/h74hxr7oal0jao67-0_0_desktop_0_1X.jpg";
const bannerImgData = ref([
  "https://www.asus.com/WebsitesBanner/TW/banners/mrnsmtuqt95g4y6c/mrnsmtuqt95g4y6c-0_0_mobile_0_2X.jpg?webp",
  bb,
  "https://www.asus.com/WebsitesBanner/TW/banners/e51hz2knhx9dulvi/e51hz2knhx9dulvi-0_0_mobile_0_2X.jpg?webp",
  "https://www.asus.com/WebsitesBanner/TW/banners/zndnpojggaheu83a/zndnpojggaheu83a-0_0_mobile_0_2X.jpg?webp",
  "https://www.asus.com/WebsitesBanner/TW/banners/plyii8g5pxwod3jx/plyii8g5pxwod3jx-0_0_mobile_0_2X.jpg?webp",
  "https://www.asus.com/WebsitesBanner/TW/banners/h74hxr7oal0jao67/h74hxr7oal0jao67-0_0_mobile_0_2X.jpg?webp",
]);
</script>

<template>
  <!-- <img :src="aa" :alt="bannerImgData[0]" /> -->
  <Carousel wrapAround>
    <!-- <Carousel autoplay="1500" wrapAround> -->
    <Slide v-for="slide in bannerImgData" :key="slide">
      <div class="carousel__item">
        <img :src="slide" alt="" style="width: 100%; height: 500px" />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
  <!-- <img
    class="bg"
    src="../../../public/mbvsjneqnammcpm1-0_0_mobile_0_2X.webp"
    alt=""
    style="width: 100%"
  /> -->
  <img
    src="https://www.asus.com/WebsitesBanner/TW/banners/mbvsjneqnammcpm1/mbvsjneqnammcpm1-0_0_mobile_0_2X.jpg?webp"
    alt=""
    style="width: 100%"
  />
</template>

<style scoped>
</style>
