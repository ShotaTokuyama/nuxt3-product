<script setup lang="ts"></script>
<template>
  <div class="flex flex-col h-screen">
    <header class="navbar bg-base-400 sticky top-0 mb-10">
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">Home</NuxtLink>
      <NuxtLink to="/count" class="btn btn-ghost normal-case text-xl">Conut</NuxtLink>
    </header>
    <main class="w-full h-screen flex justify-center">
      <div class="block">
        <slot />
      </div>
    </main>
    <footer class="navbar bg-base-400 sticky bottom-0">
      <a href="https://github.com/ShotaTokuyama" class="btn btn-ghost normal-case text-xl">GitHub</a>
    </footer>
  </div>
</template>