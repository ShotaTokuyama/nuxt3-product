<script setup lang="ts">
const colorMode = useColorMode();
const themes = [
  "dark",
  "halloween",
  "sunset",
];
</script>

<template>
  <select class="select w-full max-w-xs" v-model="colorMode.preference">
    <option disabled selected>Theme</option>
    <option v-for="theme of themes" :key="theme">{{ theme }}</option>
  </select>
</template>