<script setup lang="ts">
const btnTitle = 'SEND MESSAGE';
const keyword = ref('');
const generateText = ref('')

const prompt = computed(() => `
  日本語で回答して下さい。${keyword.value}について最大150文字で説明してください。
`)

const handleClick = async () => {
  const { data } = await useFetch('/api/generate', {
    method: 'POST',
    body: {
      prompt
    }
  })

  generateText.value = data.value.choices[0].text
}
</script>

<template>
  <h1 class="text-6xl text-green-400 w-full mb-8">GPT-3 APP</h1>
  <div class="flex gap-x-4 mb-8 justify-center">
    <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs"
      v-model="keyword" />
    <Button :name="btnTitle" @click="handleClick" />
  </div>
  <div>
    <h2>生成テキスト</h2>
    <div> {{ generateText }}</div>
  </div>
</template>