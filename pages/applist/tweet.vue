<script setup lang="ts">
import type { Tweet } from "@/types/Tweet";
import { userNameKey, updateUserNameKey } from "~/key";

const tweets = ref<Tweet[]>([]);

const onSubmitForm = (tweet: string) => {
  tweets.value.push({
    id: String(Math.random()),
    text: tweet,
    userName: userName.value,
  });
};

const isModalOpen = ref(false);
const onClickSetting = () => {
  isModalOpen.value = true;
};

const onSubmitSettings = () => {
  isModalOpen.value = false;
};
const userName = ref("");
const updateUserName = (value: string) => {
  userName.value = value;
};
provide(userNameKey, readonly(userName));
provide(updateUserNameKey, updateUserName);

const isShowDeleteModal = ref(false);
const isDeletingID = ref("");
const onClickTweet = (id: string) => {
  isShowDeleteModal.value = true;
  isDeletingID.value = id;
};

const onDelete = () => {
  deleteTweet(isDeletingID.value);
};

const deleteTweet = (id: string) => {
  tweets.value = tweets.value.filter((tweet) => tweet.id !== id);
  isShowDeleteModal.value = false;
};
</script>

<template>
  <div class="container">
    <div class="container-header">
      <p>{{ userName }}</p>
      <Button name="投稿者名設定" @click="onClickSetting" />
    </div>
    <Teleport to="body">
      <TweetModal v-if="isModalOpen" @submit="onSubmitSettings" />
    </Teleport>
    <Teleport to="body">
      <TweetDeleteModal
        v-if="isShowDeleteModal"
        @submit="onDelete"
        @cancel="isShowDeleteModal = false"
      />
    </Teleport>
    <TweetForm @submit="onSubmitForm" />
    <TweetList :tweets="tweets" @click="(id) => onClickTweet(id)" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 600px;
}

.container-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1em;
}
.container-header p {
  margin-right: 16px;
  font-size: 1rem;
  font-weight: bold;
}
</style>
