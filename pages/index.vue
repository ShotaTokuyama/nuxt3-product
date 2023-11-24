<script setup lang="ts">
const btnTitle = ['add', 'delete', 'reset'];
const { count, inc, dec, res } = useCounter(0);
</script>
<template>
  <h1 class="text-red-400 text-2xl">{{ count }}</h1>
  <Button @click="() => inc()" :name="btnTitle[0]" />
  <Button @click="() => dec()" :name="btnTitle[1]" />
  <Button @click="() => res()" :name="btnTitle[2]" />
</template>