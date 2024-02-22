<script setup lang="ts">
const text = ref("");
const handleClick = async () => {
  const { data } = await useFetch("/api/jsonp", {
    method: "POST",
  });
  text.value = data.value;
};
</script>

<template>
  <h1 class="text-6xl text-green-400 w-full mb-8">Json Placeholder API</h1>
  <div class="flex gap-x-4 justify-center">
    <ActionButton @click="handleClick" name="JSON" />
    <div class="w-96">
      <p>{{ text }}</p>
    </div>
  </div>
</template>
