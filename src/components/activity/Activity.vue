<script setup lang="ts">
import { ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const i1 =
  "https://www.asus.com/media/Odin/Websites/tw/SiteSetting/20231016102741.jpg?webp";
const i2 =
  "https://www.asus.com/media/Odin/Websites/tw/SiteSetting/20230830015136.jpg?webp";
const i3 =
  "https://www.asus.com/media/Odin/Websites/tw/SiteSetting/20230830015507.jpg?webp";
const i4 =
  "https://www.asus.com/media/Odin/Websites/tw/SiteSetting/20230807025153.jpg?webp";
const i5 =
  "https://www.asus.com/media/Odin/Websites/tw/SiteSetting/20230903080824.jpg?webp";
const i6 =
  "https://www.asus.com/media/Odin/Websites/tw/SiteSetting/20230831031149.jpg?webp";
const i7 =
  "https://www.asus.com/media/Odin/Websites/tw/SiteSetting/20230831031147.jpg?webp";
const i8 =
  "https://www.asus.com/media/Odin/Websites/tw/SiteSetting/20230509093207.jpg?webp";
// const ii1 = "../../assets/20231016102741.jpg";
// const ii2 = "../../assets/20230830015136.jpg";
// const ii3 = "../../assets/20230830015507.jpg";
// const ii4 = "../../assets/20230807025153.jpg";
// const ii5 = "../../assets/20230903080824.jpg";
// const ii6 = "../../assets/20230831031149.jpg";
// const ii7 = "../../assets/20230831031147.jpg";
// const ii8 = "../../assets/20230509093207.jpg";
const items = ref([
  {
    image: i1,
    text: "【與RTX逃出黑暗】購買華碩 GEFORCE RTX™ 40 系列指定顯示卡 / 品牌桌機 / 筆電，即可獲得《心靈殺手2》。",
  },
  {
    image: i2,
    text: "【手機舊換新】全台ASUS Zenfone專賣店，折抵上看$30,000！",
  },
  { image: i3 },
  { image: i4 },
  { image: i5 },
  { image: i6 },
  { image: i7 },
  { image: i8 },
]);
// const currentIndex = ref(0);

// const slideStyle = computed(
//   () => `transform: translateX(-${currentIndex.value * 100}%)`
// );
// const currentItem = computed(() => items.value[currentIndex.value]);

// const nextSlide = () => {
//   currentIndex.value = (currentIndex.value + 1) % items.value.length;
// };

// const prevSlide = () => {
//   currentIndex.value =
//     (currentIndex.value - 1 + items.value.length) % items.value.length;
// };
</script>

<template>
  <div class="container">
    <h2>活動專區</h2>
    <a href="#">查看所有熱門活動列表></a>
    <Carousel wrapAround>
      <Slide v-for="slide in items" :key="slide.text">
        <div class="carousel__item">
          <img :src="slide.image" alt="" style="width: 50%; height: 50%" />
          <div class="aa">{{ slide.text }}</div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
    <!-- <div class="carousel">
      <div class="carousel-slide" :style="slideStyle">
        <img :src="currentItem.image" alt="Carousel Item" />
      </div>
      <button @click="prevSlide">Previous</button>
      <button @click="nextSlide">Next</button>
    </div> -->
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
a {
  all: unset;
  color: #006ce1;
}
.carousel__item {
  /* display: flex;
  flex-direction: column;
  align-items: center; */
}
.aa {
  margin: auto;
  margin-top: 16px;
  color: #666a73;
  /* padding: 14px 24px 12px; */
  background-color: #f5f5f5;
  width: 50%;
}
</style>
