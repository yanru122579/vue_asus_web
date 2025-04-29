<script setup >
import Head from "../components/head/Head.vue";
import Fav from "../components/head/Fav.vue";
import Banner from "../components/banner/Banner.vue";
import Product from "../components/product/Product.vue";
import Activity from "../components/activity/Activity.vue";
import Sale from "../components/sale/Sale.vue";
import Footer from "../components/footer/Footer.vue";
import { ref } from "vue";
const downloadUrl = ref(null);
const handleFile = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const text = await file.text();
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const payments = ["cash", "card", "transfer"];
  const result = [];

  for (const id of lines) {
    for (const pay of payments) {
      result.push(`${id},${pay}`);
    }
  }

  const csvContent = result.join("\n");
  const blob = new Blob([csvContent], { type: "text/csv" });
  downloadUrl.value = URL.createObjectURL(blob);
};
</script>

<template>
  <div>
    <div class="p-4">
    <input type="file" accept=".csv" @change="handleFile" />
    <a
      v-if="downloadUrl"
      :href="downloadUrl"
      download="formatted_output.csv"
      ref="downloadLink"
      class="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded"
    >
      下載轉換後的檔案
    </a>
  </div>
  <Head />
  <Fav />
  <Banner />
  <Product />
  <Activity />
  <Sale />
  <Footer />
  </div>
  
</template>

<style scoped>
</style>
