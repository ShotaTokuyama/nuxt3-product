<script setup>
const { locale } = useI18n();
const locales = ["en", "ja"];
</script>

<template>
  <select class="select max-w-xs" v-model="locale">
    <option disabled selected>Locales</option>
    <option v-for="locale of locales" :key="locale">{{ locale }}</option>
  </select>
  <div>{{ $t("welcome") }}</div>
</template>
