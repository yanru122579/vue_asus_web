<script setup lang="ts">
import { ref } from "vue";
import i1 from "../../assets/20210521081726.svg";
import i2 from "../../assets/20210521081514.svg";
import i3 from "../../assets/20210521081749.svg";
import i4 from "../../assets/20210521081817.svg";
import i5 from "../../assets/20210521081846.svg";
import i6 from "../../assets/20210521081926.svg";
const saleData = ref([
  {
    id: 1,
    img: i1,
    text: "筆記型電腦",
  },
  {
    id: 2,
    img: i2,
    text: "手機/電競掌機/健康",
  },
  {
    id: 3,
    img: i3,
    text: "顯示器/桌上型電腦",
  },
  {
    id: 4,
    img: i4,
    text: "主機板/零組件",
  },
  {
    id: 5,
    img: i5,
    text: "通訊產品/Iot/伺服器",
  },
  {
    id: 6,
    img: i6,
    text: "周邊配件",
  },
]);
const data = ref([
  {
    id: 1,
    imgUrl:
      "https://dlcdnwebimgs.asus.com/gain/09b890fa-ea2d-42c6-b9fb-bccda7af4b90/w185/fwebp",
    text1: "16.5",
    text2: "ASUS TUF Gaming F15(2023)",
    text3: "ASUS Store 建議售價(起)",
    text4: "NT$35,999",
    text5: [
      "Windows 11 Home - ASUS 推薦商務用 Windows 11 Pro",
      "最高支援 GeForce RTX™ 4060 筆記型電腦 GPU",
      "Intel® Core™ i9-13900H 處理器",
      "900Wh電池",
      "Type-C 快速充電",
      "84 葉片 Arc-Flow 風扇和 4個排氣口",
      "含 NVIDIA Advanced Optimus 的 Mux 獨顯直接開關",
      "MIL-STD-810H 標準",
    ],
  },
  {
    id: 2,
    imgUrl:
      "https://dlcdnwebimgs.asus.com/gain/9453D60E-F7DD-40AA-A0A5-7AF57EA85E23/w185/fwebp",
    text1: "",
    text2: "ROG Phone 6",
    text3: "",
    text4: "NT$28.990",
    text5: [
      "Qualcomm Snapdragon 8 +Gen 1",
      "LPDDR5 16GB",
      "UFS3.1 512GB",
      "6000mAh電池",
    ],
  },
  {
    id: 3,
    imgUrl:
      "https://dlcdnwebimgs.asus.com/gain/1c345ffb-d1dd-41c1-adee-b6bfd9f3b637/w185/fwebp",
    text1: "15L",
    text2: "ExpertCenter D9 Mini Tower(D900MD)",
    text3: "ASUS Sotre 建議售價(起)",
    text4: "NT$48,900",
    text5: [
      "商務用Windows 11 Pro",
      "支援IntelvProEnterprise 升級管理功能",
      "可擴充設計、精巧機身",
      "免工具拆卸,易於升級維護",
      "通過MILSTD810H 美國軍規測試標準及華碩內部測試",
      "全方位連接性,滿足各種商務需求",
      "企業級安全性,支援TPM2.0等各種功能",
    ],
  },
  {
    id: 4,
    imgUrl:
      "https://dlcdnwebimgs.asus.com/gain/5A4FF340-772D-4E9A-8761-C35D55BB9C53/w185/fwebp",
    text1: "15L",
    text2: "ExpertCenter D9 Mini Tower(D900MD)",
    text3: "ASUS Sotre 建議售價(起)",
    text4: "NT$48,900",
    text5: [
      "商務用Windows 11 Pro",
      "支援IntelvProEnterprise 升級管理功能",
      "可擴充設計、精巧機身",
      "免工具拆卸,易於升級維護",
      "通過MILSTD810H 美國軍規測試標準及華碩內部測試",
      "全方位連接性,滿足各種商務需求",
      "企業級安全性,支援TPM2.0等各種功能",
    ],
  },
  {
    id: 5,
    imgUrl:
      "https://www.asus.com/media/global/gallery/2evb1msqr3lubckh_setting_xxx_0_90_end_184.png",
    text1: "15L",
    text2: "ExpertCenter D9 Mini Tower(D900MD)",
    text3: "ASUS Sotre 建議售價(起)",
    text4: "NT$48,900",
    text5: [
      "通過MILSTD810H 美國軍規測試標準及華碩內部測試",
      "全方位連接性,滿足各種商務需求",
      "企業級安全性,支援TPM2.0等各種功能",
    ],
  },
  {
    id: 6,
    imgUrl:
      "https://dlcdnwebimgs.asus.com/gain/9bd22979-db20-43ae-9fdd-6a9519ec82a8/w185/fwebp",
    text1: "15L",
    text2: "ExpertCenter D9 Mini Tower(D900MD)",
    text3: "ASUS Sotre 建議售價(起)",
    text4: "NT$48,900",
    text5: [
      "支援IntelvProEnterprise 升級管理功能",
      "可擴充設計、精巧機身",
      "免工具拆卸,易於升級維護",
      "通過MILSTD810H 美國軍規測試標準及華碩內部測試",
      "全方位連接性,滿足各種商務需求",
      "企業級安全性,支援TPM2.0等各種功能",
    ],
  },
]);
const formatData = ref({
  id: 1,
  imgUrl:
    "https://dlcdnwebimgs.asus.com/gain/09b890fa-ea2d-42c6-b9fb-bccda7af4b90/w185/fwebp",
  text1: "16.5",
  text2: "ASUS TUF Gaming F15(2023)",
  text3: "ASUS Store 建議售價(起)",
  text4: "NT$35,999",
  text5: [
    "Windows 11 Home - ASUS 推薦商務用 Windows 11 Pro",
    "最高支援 GeForce RTX™ 4060 筆記型電腦 GPU",
    "Intel® Core™ i9-13900H 處理器",
    "900Wh電池",
    "Type-C 快速充電",
    "84 葉片 Arc-Flow 風扇和 4個排氣口",
  ],
});
const tab = ref(1);
const changeData = (id: any) => {
  tab.value = id;

  const newData = data.value.filter((e) => id === e.id);
  formatData.value = newData[0];
};
// defineProps<{}>();
</script>

<template>
  <div>
    <div class="title">熱門銷售</div>

    <div class="head">
      <button
        v-for="item in saleData"
        :key="item.id"
        @click="
          () => {
            changeData(item.id);
          }
        "
      >
        <img :src="item.img" alt="" style="width: 64px; height: 64px" />
        <span>{{ item.text }}</span>
      </button>
    </div>
    <div class="container">
      <div class="card">
        <div class="card_head">
          <img :src="formatData.imgUrl" alt="" />
          <span style="color: #4d4d4d; margin: 5px">{{
            formatData.text1
          }}</span>
          <h2 class="card_info_h2">{{ formatData.text2 }}</h2>
        </div>
        <div class="card_info">
          <span class="card_info_text">{{ formatData.text3 }}</span>
          <span class="card_info_h2">{{ formatData.text4 }}</span>
        </div>
        <div class="card_body">
          <ul
            style="color: #4d4d4d; font-size: 14px; padding: 8px"
            v-for="item in formatData.text5"
            :key="item"
          >
            <li>‧{{ item }}</li>
            <!-- <li>Windows 11 Home - ASUS 推薦商務用 Windows 11 Pro</li>
            <li>最高支援 GeForce RTX™ 4060 筆記型電腦 GPU</li>
            <li>Intel<sup>®</sup> Core™ i9-13900H 處理器</li>
            <li>900Wh電池</li>
            <li>Type-C 快速充電</li>
            <li>84 葉片 Arc-Flow 風扇和 4個排氣口</li>
            <li>含 NVIDIA Advanced Optimus 的 Mux 獨顯直接開關</li>
            <li>MIL-STD-810H 標準</li> -->
          </ul>
        </div>
        <div class="card_btnGloup">
          <button class="btn1">購買</button>
          <button class="btn2">了解更多</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  margin: 74px 0 22px;
  font-weight: 700;
  font-size: 42px;
}
li {
  padding-bottom: 8px;
}
.head {
  display: flex;
  justify-content: space-between;
}
.head button {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f5f5f5;
  padding: 60px 0 6px;
}
.card {
  position: relative;
  width: 404px;
  background-color: #fff;
  border-radius: 20px;
  padding: 12px;
}
.card_head {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.card_info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 0;
  padding: 8px 0;
  border-top: 1px solid rgb(220, 220, 220);
  border-bottom: 1px solid rgb(220, 220, 220);
}
.card_info span {
  margin-bottom: 4px;
}
.card_info_text {
  color: #666666;
  font-size: 12px;
}
.card_info_h2 {
  font-weight: bold;
  font-size: 20px;
}
.card_btnGloup {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 12px;
  margin: 0 auto;
}
.card_body {
  padding-bottom: 200px;
}
button {
  width: 400px;
  height: 32px;
  border-radius: 4px;
  margin-top: 16px;
}
.btn1 {
  background-color: #006ce1;
  color: white;
}
.btn2 {
  background-color: #fff;
  height: 32px;
  color: #006ce1;
  border: 2px solid #006ce1;
}
border-radius: 8px;
</style>
