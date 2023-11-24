<script setup lang="ts"></script>
<template>
  <div class="flex h-screen">
    <SideMenu class="w-1/4" />
    <main class="w-3/4 my-28 flex justify-center">
      <div class="block">
        <slot />
      </div>
    </main>
  </div>
</template>