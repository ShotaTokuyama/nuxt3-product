<script setup lang="ts">
interface Props {
  name: string
}

const props = defineProps<Props>();
</script>

<template>
  <button class="btn">{{ name }}</button>
</template>