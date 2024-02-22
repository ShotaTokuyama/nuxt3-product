<script setup lang="ts"></script>
<template>
  <div class="h-screen w-full">
    <GlobalHeader />
    <div class="flex h-screen justify-between">
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
