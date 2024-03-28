<script setup lang="ts">
const counter = useCounterStore();
</script>

<template>
  <div>
    <nuxt-link to="/applist/piniaCounter/count">count ページへ飛ぶ </nuxt-link>
    <p>ボタンを{{ counter.count }}回おしました!</p>
  </div>
</template>
