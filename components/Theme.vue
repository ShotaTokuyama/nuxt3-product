<script setup lang="ts">
const colorMode = useColorMode();
const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];
</script>

<template>
  <select class="select w-full max-w-xs" v-model="colorMode.preference">
    <option disabled selected>Theme</option>
    <option v-for="theme of themes" :key="theme">{{ theme }}</option>
  </select>
</template>