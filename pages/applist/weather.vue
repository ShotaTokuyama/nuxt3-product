<script setup lang="ts">
import type { City } from "@/types/interfaces"
const cityList = useState<Map<number, City>>("cityList");
</script>

<template>
  <h1 class="text-6xl text-green-400 w-full mb-8">Weather App</h1>
</template>