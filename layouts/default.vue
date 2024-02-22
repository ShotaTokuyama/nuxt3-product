<script setup lang="ts"></script>
<template>
  <div class="h-screen w-full">
    <GlobalHeader />
    <div class="flex gap-x-24 h-screen justify-between">
      <GlobalLeftMenu />
      <main class="pt-40 flex justify-center">
        <div class="block">
          <slot />
        </div>
      </main>
      <GlobalRightMenu />
    </div>
  </div>
</template>
