<script setup lang="ts">
const tweet = ref("");

const onSubmit = () => {
  emits("submit", tweet.value);
  tweet.value = "";
};

const isValidInput = ref(true);
watch(tweet, (newTweet) => {
  if (newTweet.length > 20 || newTweet.length < 0) {
    isValidInput.value = false;
  } else {
    isValidInput.value = true;
  }
});

const emits = defineEmits(["submit"]);
</script>

<template>
  <div>
    <form class="tweet-form">
      <input
        :style="{ color: isValidInput ? 'black' : 'red' }"
        v-model="tweet"
        type="text"
        placeholder="Type here"
        class="input input-bordered input-primary w-full max-w-xs"
      />
      <Button
        name="submit"
        @click.prevent="onSubmit"
        type="submit"
        :disabled="!isValidInput"
      />
    </form>
  </div>
</template>

<style scoped>
.tweet-form {
  display: flex;
  align-items: center;
}

.tweet-form textarea {
  height: 6em;
  border: 1px solid #ccc;
  border-radius: 0.5em;
  padding: 0.5em;
  font-size: 1.5em;
}
</style>
