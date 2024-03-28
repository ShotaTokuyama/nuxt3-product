<script setup>
import { storeToRefs } from "pinia";
const counterStore = useCounterStore();
const { increment } = counterStore;
const { count } = storeToRefs(counterStore);
</script>

<template>
  <div>
    <h1>Count:{{ count }}</h1>
    <ActionButton @click="increment" name="INC" />
    <nuxt-link to="/applist/piniaCounter" class="ml-4">もどる</nuxt-link>
  </div>
</template>
