<script setup lang="ts"></script>
<template>
  <div class="flex h-screen w-full justify-between">
    <SideMenu />
    <main class="my-28 flex justify-center">
      <div class="block">
        <slot />
      </div>
    </main>
    <ChatGpt />
  </div>
</template>