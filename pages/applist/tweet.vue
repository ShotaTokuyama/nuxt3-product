<script setup lang="ts">
import { userNameKey, updateUserNameKey } from "~/key";

const {
  tweets,
  userName,
  isModalOpen,
  isShowDeleteModal,
  onSubmitForm,
  onClickSetting,
  onSubmitSettings,
  updateUserName,
  onClickTweet,
  onDelete,
} = useTweet();

provide(userNameKey, readonly(userName));
provide(updateUserNameKey, updateUserName);
</script>

<template>
  <div class="container">
    <div class="container-header">
      <p>{{ userName }}</p>
      <ActionButton name="投稿者名設定" @click="onClickSetting" />
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
