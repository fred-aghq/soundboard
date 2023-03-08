<script setup>
import NavView from '@/views/NavView.vue'
import { RouterView } from 'vue-router'
import { useInputListStore } from '@/stores/InputListStore.js';
const inputListStore = useInputListStore();

inputListStore.fill();
</script>

<template>
  <NavView />
  <RouterView>

  </RouterView>
</template>

<style scoped>

</style>
