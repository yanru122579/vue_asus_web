<script setup lang="ts">
import { ref } from "vue";

// defineProps<{}>();
const menu = ref<boolean>(false);
const sideBarData = ref([
  [
    {
      index: 1,
      category: "手機/電競掌機/健康",
      items: [
        { index: 1, name: "智慧手機", items: [] },
        {
          index: 1,
          category: "手機/電競掌機/健康",
          items: [{ index: 1, name: "智慧手機", items: [] }],
        },
      ],
    },
    {
      index: 2,
      category: "筆記型電腦",
      items: [
        { index: 1, name: "家用", items: [] },
        {
          index: 1,
          category: "商用",
          items: [{ index: 1, name: "智慧手機", items: [] }],
        },
      ],
    },
  ],
  [
    {
      index: 1,
      category: "商店",
      items: [
        { index: 1, name: "官方商城", items: [] },
        {
          index: 1,
          category: "體驗店",
          items: [{ index: 1, name: "智慧手機", items: [] }],
        },
      ],
    },
    {
      index: 2,
      category: "服務&社群",
      items: [
        { index: 1, name: "服務與支援", items: [] },
        {
          index: 1,
          category: "活動登錄專區",
        },
      ],
    },
  ],
  [
    {
      index: 1,
      category: "華碩徵才",
      items: [],
    },
    {
      index: 2,
      category: "電競",
      items: [
        { index: 1, name: "ROG-Republic of Gamers", items: [] },
        {
          index: 1,
          category: "TUF Gaming",
          items: [],
        },
      ],
    },
  ],
]);
</script>

<template>
  <div class="head">
    <button class="btn" @click="() => (menu = !menu)">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>
    <div>
      <img
        class="head__logo"
        src="https://dlcdnimgs.asus.com/images/logo/logo-002.svg"
        alt=""
      />
    </div>
    <div class="head__icon">
      <div style="margin-left: 25px">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </div>
      <div style="margin-left: 25px">
        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
      </div>
    </div>
    <!-- sideBar -->
    <div class="sideBar" v-if="menu">
      <div class="sideBar__menu">
        <div class="sideBar__menu__head">
          <button class="btn" @click="() => (menu = !menu)">
            <font-awesome-icon
              icon="fa-solid fa-xmark"
              style="width: 18px; height: 18px; padding-left: 18px"
            />
          </button>
        </div>
        <div calss="sideBar__menu__body">
          <div
            class="sideBar__menu__body__item"
            v-for="(items, index) in sideBarData"
            :key="index"
          >
            <div class="" v-for="(item, index) in items" :key="index">
              <span>{{ item.category }}</span>
              <button class="btn">
                <font-awesome-icon :icon="['fas', 'plus']" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}
.head {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  position: fixed;
  z-index: 1;
  background-color: #fff;
  width: 100vw;
}
.head__logo {
  height: 15px;
  width: 71px;
  @media only screen and (min-width: 1024px) {
    height: 50px;
    width: 50px;
  }
}
.head__icon {
  display: flex;
}
.sideBar {
  position: absolute;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  opacity: 1;
}
.sideBar__menu {
  width: 250px;
  height: 100vh;
  background-color: #fff;
}
.sideBar__menu__head {
  width: 250px;
  height: 48px;
  display: flex;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
.sideBar__menu__body {
}
.sideBar__menu__body__item {
  border-bottom: 1px solid #ccc;
}
.sideBar__menu__body__item div {
  display: flex;
  justify-content: space-between;
  color: #666;
  padding: 16px;
}
</style>
