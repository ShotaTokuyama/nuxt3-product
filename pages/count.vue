<script setup lang="ts">
const btnTitle = ['add', 'delete', 'reset'];
const { count, inc, dec, res } = useCounter(0);
</script>
<template>
  <h1 class="text-6xl text-green-400 w-full mb-8">Counter</h1>
  <p class="text-red-400 text-5xl text-center mb-8">{{ count }}</p>
  <div class="flex justify-between">
    <Button @click="inc" :name="btnTitle[0]" />
    <Button @click="dec" :name="btnTitle[1]" />
    <Button @click="res" :name="btnTitle[2]" />
  </div>
</template>