<script setup lang="ts">
import { ref } from "vue";
import ig from "../../assets/a27007fd-e650-4ea9-a192-3e0a13ed9796.svg";
import yt from "../../assets/2bdf8aac-431d-4fdb-ad47-26a7543189f1.svg";
import fb from "../../assets/12504b6a-400f-4c48-8df2-86f6a5ff3293.svg";
import tw from "../../assets/81d7a880-6f76-4a82-872f-09cc06485244.svg";
import i1 from "../../assets/8d65db98-b4fd-4b71-891f-ed272cc41edc.svg";
import pi from "../../assets/5cc6dd1e-97bd-41cb-be12-9a745194457e.svg";
// tw 81d7a880-6f76-4a82-872f-09cc06485244.svg
// fb 12504b6a-400f-4c48-8df2-86f6a5ff3293
//ig a27007fd-e650-4ea9-a192-3e0a13ed9796
//yt 2bdf8aac-431d-4fdb-ad47-26a7543189f1
//p 5cc6dd1e-97bd-41cb-be12-9a745194457e
//in 8d65db98-b4fd-4b71-891f-ed272cc41edc
const snsData = ref([
  {
    ulr: ig,
  },
  {
    ulr: yt,
  },
  {
    ulr: fb,
  },
  {
    ulr: tw,
  },
  {
    ulr: i1,
  },
  {
    ulr: pi,
  },
]);
// defineProps<{}>();
</script>

<template>
  <div class="container">
    <div class="container_body">
      <div class="container_img" v-for="(url, index) in snsData" :key="index">
        <img fall="#faf" :src="url.ulr" alt="" />
      </div>
    </div>
    <div></div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ccc;
}
.container_body {
  display: flex;
  justify-content: center;
  width: 200px;
  flex-wrap: wrap;
}
.container_img {
  margin: 8px;
}
</style>
