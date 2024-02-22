<script setup lang="ts">
import { updateUserNameKey } from "~/key";

const { userName } = useTweet();

const updateUserName = inject<(name: string) => void>(
  updateUserNameKey,
  () => {}
);

const emits = defineEmits(["submit"]);

const onSubmit = () => {
  emits("submit");
  updateUserName(userName.value);
};
</script>

<template>
  <div class="modal-mask">
    <div class="modal-container">
      <div class="modal-header">
        <slot name="header">Settings</slot>
      </div>
      <div class="modal-body">
        <slot name="body">
          <p>Update Your Name</p>
          <input
            v-model="userName"
            type="text"
            placeholder="Type here"
            class="input input-bordered input-primary w-full max-w-xs"
          />
        </slot>
      </div>
      <div class="modal-footer">
        <slot name="footer">
          <ActionButton name="OK" @click="onSubmit" />
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(38, 38, 38, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  width: 300px;
  height: 400px;
  background-color: #fff;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  padding: 20px;
}
.modal-container span {
  font-size: 0.5em;
}
</style>
