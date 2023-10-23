<script setup lang="ts">
import { ref } from "vue";
import p1 from "../../assets/49r6enwfixzgvof0-0_1_desktop_0_1X.png";
import p2 from "../../assets/49r6enwfixzgvof0-1_1_desktop_1_1X.png";
import p3 from "../../assets/49r6enwfixzgvof0-2_1_desktop_2_1X.png";
import p4 from "../../assets/49r6enwfixzgvof0-3_1_desktop_1X.png";
import p5 from "../../assets/49r6enwfixzgvof0-4_1_desktop_1X.png";
import p6 from "../../assets/49r6enwfixzgvof0-5_1_desktop_5_1X.png";
import i1 from "../../assets/49r6enwfixzgvof0-0_0_desktop_0_1X.jpg";
import i2 from "../../assets/49r6enwfixzgvof0-1_0_desktop_1_1X.jpg";
import i3 from "../../assets/49r6enwfixzgvof0-2_0_desktop_2_1X.jpg";
import i4 from "../../assets/49r6enwfixzgvof0-3_0_desktop_3_1X.jpg";
import i5 from "../../assets/49r6enwfixzgvof0-4_0_desktop_1X.jpg";
import i6 from "../../assets/49r6enwfixzgvof0-5_0_desktop_5_1X.jpg";
const productData = ref([
  {
    index: 1,
    titleUrl: p1,
    imgUrl: i1,
    text: "單手旗艦 放膽拍",
    buy: true,
    item: [],
  },
  {
    index: 2,
    titleUrl: p2,
    imgUrl: i2,
    text: "完美雙艙 競享組裝",
    buy: false,
    item: [],
  },
  {
    index: 3,
    titleUrl: p3,
    imgUrl: i3,
    text: "有膽創異",
    buy: true,
    item: [],
  },
  {
    index: 4,
    titleUrl: p4,
    imgUrl: i4,
    text: "極智強悍*商務專家",
    buy: true,
    item: [],
  },
  {
    index: 5,
    titleUrl: p5,
    imgUrl: i5,
    text: "專業繪圖設備*創作首選",
    buy: false,
    item: [],
  },
  {
    index: 6,
    titleUrl: p6,
    imgUrl: i6,
    text: "提供專業人士所需的所有必備功能",
    buy: false,
    item: [],
  },
]);
// defineProps<{}>();
</script>

<template>
  <div
    :style="{ background: `no-repeat url(${item.imgUrl}) 50% 30%` }"
    class="card"
    v-for="item in productData"
    :key="item.index"
  >
    <img class="card__titleImg" :src="item.titleUrl" alt="" />
    <span>{{ item.text }}</span>
    <div class="card__btnGroup">
      <button class="card_btn">立即購買</button>
      <button class="card_btn2">了解更多 ></button>
    </div>
    <!-- <img class="card_img" :src="item.imgUrl" alt="" /> -->
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: auto;
  height: 547px;
  background-clip: content-box;
  padding-top: 16px;
  margin: 12px 0;
  background-origin: content-box;
}
.card__titleImg {
  max-width: 100%;
  width: 300px;
  height: auto;
  vertical-align: bottom;
  padding-bottom: 4px;
}
.card__btnGroup {
  margin-top: 16px;
}
.card_btn {
  padding: 8px 16px;
  border: 1px solid rgb(128, 128, 128);
  border-radius: 4px;
  color: rgb(128, 128, 128);
}
.card_btn:hover {
  background-color: rgb(128, 128, 128);
  color: white;
}
.card_btn2 {
  color: rgb(128, 128, 128);
  margin-left: 16px;
}
</style>
