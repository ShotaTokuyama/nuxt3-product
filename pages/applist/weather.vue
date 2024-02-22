<script setup lang="ts">
import type { City } from "@/types/interfaces";

const cityList = useState<Map<number, City>>("cityList");
</script>

<template>
  <h1 class="text-6xl text-green-400 w-full mb-8">Weather App</h1>
  <div class="flex gap-x-4 justify-center">
    <h2>都市リスト</h2>
    <ul class="w-96">
      <li v-for="[id, city] in cityList" :key="id">
        <NuxtLink :to="{ name: 'applist-WeatherInfo-id', params: { id: id } }"
          >{{ city.name }}の天気</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
