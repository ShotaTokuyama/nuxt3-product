<script setup lang="ts">
import type { Tweet } from "@/types/Tweet";

const props = defineProps({
  tweets: {
    type: Array as PropType<Tweet[]>,
  },
});
const emits = defineEmits(["click"]);
const onClickTweet = (id: string) => {
  emits("click", id);
};
</script>

<template>
  <div class="tweet-list">
    <ul>
      <li
        v-for="tweet in props.tweets"
        :key="tweet.id"
        @click="() => onClickTweet(tweet.id)"
      >
        {{ tweet.text }}
        <span class="tweet-list-user">@{{ tweet.userName }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.tweet-list ul li {
  padding: 1em;
  border-bottom: 1px solid #ccc;
  font-size: 1.5em;
}

.tweet-list-user {
  font-size: 0.75em;
  color: #ccc;
}
</style>
