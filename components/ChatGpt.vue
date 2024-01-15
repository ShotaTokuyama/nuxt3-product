<script setup lang="ts">
const keyword = ref('');
const generateText = ref('')

const prompt = computed(() => `
  日本語で回答して下さい。${keyword.value}について最大150文字で説明してください。
`)

const handleClick = async () => {
  const { data } = await useFetch('/api/generate', {
    method: 'POST',
    body: {
      prompt: prompt.value
    }
  })
  console.log(data.value)
  if (data.value !== undefined) {
    generateText.value = data.value.choices[0].text
  } else {
    console.log("データがありません。")
  }
}
</script>

<template>
  <div class="menu w-96 bg-base-200 text-white relative">
    <h1 class="text-4xl p-4 mb-8">Chat Gpt</h1>
    <div class="flex gap-x-4 mb-8 justify-center">
      <input v-model="keyword" type="text" placeholder="Type here"
        class="input input-bordered input-primary w-full max-w-xs" />
      <Button name="Send" @click="handleClick" />
    </div>
    <h2>生成テキスト</h2>
    <p>{{ generateText }}</p>
  </div>
</template>