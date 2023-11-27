<script setup>
const getInput = ((event) => {
  console.log(event)
})
</script>
<template>
  <h1 class="text-6xl text-green-400 w-full mb-8">Contact</h1>
  <FormKit type="form" :config="{ validationVisibility: 'submit' }" @submit="getInput">
    <FormKit type="text" label="Name" validation="required|length:3" />
    <FormKit type="email" label="Email" validation="required|email" />
    <FormKit type="textarea" name="instructions" label="Message" validation="length:0,120" :validation-messages="{
      length: 'Instructions cannot be more than 120 characters.',
    }" />
  </FormKit>
  <p class="text-2xl text-red-400 w-full mt-8">※現状返信などはできません。こちらに届くこともありません。</p>
</template>
