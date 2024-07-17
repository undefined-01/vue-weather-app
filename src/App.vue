<script setup>
  import Navbar from "./components/Navbar.vue";
  import MainComp from "./components/MaimComp.vue";
  import About from "./components/About.vue";
  import { ref, onMounted } from "vue";

  import { useStore } from './store/store.js';
  import { storeToRefs } from "pinia";

  const store = useStore();
  const { weatherData, toggle } = storeToRefs(store);
  
  onMounted(() => {
    store.getWeather();
  });

</script>

<template>
  <Navbar />
  <div v-if="!toggle">
    <MainComp />
  </div>
  <div v-else>
    <About />
  </div>
</template>

<style lang="scss" scoped>

</style>
