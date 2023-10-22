<script setup lang="ts">
import { ref } from "vue";
import Sns from "./SnsIcon.vue";
const productItem = ref([
  {
    id: 1,
    url: "https://www.asus.com/media/Odin/Images/eCommerce/truck.svg",
    title: "免運服務",
    text: "結帳商品滿＄500 免運費",
  },
  {
    id: 2,
    url: "https://www.asus.com/media/Odin/Images/eCommerce/service_talk.svg",
    title: "客服即時通",
    text: "針對需求與客服聯繫",
  },
  {
    id: 3,
    url: "https://www.asus.com/media/Odin/Images/eCommerce/easy_refund.svg",
    title: "售後服務",
    text: "享有七天鑑賞期",
  },
  {
    id: 4,
    url: "https://www.asus.com/media/Odin/Images/eCommerce/secure_payments.svg",
    title: "安心線上付款",
    text: "透過SSL 256 bit加密機制完成交易",
  },
]);
const messageData = ref([
  {
    id: 1,
    text: "購物和學習",
    item: [
      {
        text: "手機/電競掌機/健康",
        item: [{ text: "智慧手機" }, { text: "醫療器材軟體" }],
      },
      {
        text: "筆記型電腦",
        item: [{ text: "家用" }, { text: "商用" }],
      },
    ],
  },
  {
    id: 2,
    text: "探索更多",
    item: [
      {
        text: "Asus 設計中心",
        item: [],
      },
      {
        text: "商用站",
        item: [],
      },
    ],
  },
  {
    id: 3,
    text: "支援與服務",
    item: [
      {
        text: "維修進度查詢",
        item: [],
      },
      {
        text: "找尋服務據點",
        item: [],
      },
    ],
  },
  {
    id: 4,
    text: "關於我們",
    item: [
      {
        text: "關於華碩",
        item: [],
      },
      {
        text: "最新消息",
        item: [],
      },
    ],
  },
]);
const showDetail = ref(0);
const showDetailHandler = (id) => {
  if (showDetail.value == id) {
    showDetail.value = 0;
  } else {
    showDetail.value = id;
  }
};
// defineProps<{}>();
</script>

<template>
  <div class="container">
    <div class="product_item" v-for="item in productItem" :key="item">
      <img class="product_item_img" :src="item.url" alt="" />
      <div>
        <h2 class="product_item_h2">{{ item.title }}</h2>
        <p class="product_item_p">{{ item.text }}</p>
      </div>
    </div>
    <div class="message" v-for="items in messageData" :key="items">
      <div class="message_text" @click="() => showDetailHandler(items.id)">
        <p>{{ items.text }}</p>
        <button>
          <font-awesome-icon
            v-if="showDetail == items.id"
            :icon="['fas', 'chevron-down']"
          />
          <font-awesome-icon v-else :icon="['fas', 'chevron-up']" />
        </button>
      </div>
      <div v-show="showDetail == items.id">
        <ul v-for="detail in items.item" :key="detail">
          <li v-if="detail.item.length == 0">{{ detail.text }}</li>
          <div v-else>
            <p class="message_title">{{ detail.text }}</p>
            <ul v-for="text in detail.item" :key="text">
              <li>{{ text.text }}</li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
    <div class="messageBottom"></div>
    <!-- sns -->
    <Sns />
    <!--  -->
    <div>
      <div style="padding: 16px 0">Taiwan /繁體中文</div>
      <div style="padding: 8px 0; color: #666; font-size: 14px">
        ＠ASUSTeK Computer Inc. All rightsed
      </div>
      <div>使用條款 ｜ 隱私權保護政策</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #f5f5f5;
  padding-top: 16px;
  padding: 0px 32px;
}
.product_item {
  display: flex;
  margin-bottom: 12px;
}
.product_item img {
  margin-right: 12px;
}
.product_item_h2 {
  font-weight: 500;
  margin-bottom: 4px;
}
.product_item_p {
  color: #666;
  font-size: 12px;
}
.message {
  border-top: 1px solid #aaa;
  padding: 8px 0;
}
.message_text {
  display: flex;
  justify-content: space-between;
}
.message_title {
  font-size: 13px;
  font-weight: bold;
  padding: 8px;
}
.messageBottom {
  border-bottom: 1px solid #aaa;
}
li {
  padding: 8px 16px;
  font-size: 12px;
  color: #4d4d4d;
}
</style>
