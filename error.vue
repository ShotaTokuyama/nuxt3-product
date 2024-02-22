<script setup>
const error = useError();
</script>
<template>
  <div class="text-center mt-40">
    <h1 v-if="error.statusCode === 404" class="text-6xl">
      こちらのページは存在しません
    </h1>
    <h1 v-else>何らかのErrorが発生しています。</h1>
    <br />
    <div class="text-3xl">{{ error.message }}</div>
  </div>
</template>
