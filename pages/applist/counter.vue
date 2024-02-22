<script setup lang="ts">
const { count, inc, dec, res } = useCounter(0);
</script>

<template>
  <h1 class="text-6xl text-green-400 w-full mb-8">Counter App</h1>
  <p class="text-red-400 text-5xl mb-8 text-center">{{ count }}</p>
  <div class="flex gap-x-4 justify-center">
    <ActionButton @click="inc" name="add" />
    <ActionButton @click="dec" name="delete" />
    <ActionButton @click="res" name="reset" />
  </div>
</template>
