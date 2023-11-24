<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiHome, mdiApplicationArray } from '@mdi/js'
</script>

<template>
  <nav class="menu bg-base-200 w-80 text-white">
    <h1 class="text-4xl p-4 mb-8">Nuxt Applications</h1>
    <ul>
      <li class="mb-2">
        <div class="flex items-center gap-x-4 text-2xl">
          <svg-icon type="mdi" :path="mdiHome" />
          <NuxtLink to="/">Home</NuxtLink>
        </div>
      </li>
      <li class="mb-2">
        <details open>
          <summary>
            <div class="flex items-center gap-x-4 text-2xl">
              <svg-icon type="mdi" :path="mdiApplicationArray" />
              <div>AppList</div>
            </div>
          </summary>
          <ul class="before:w-1 text-xl">
            <li>
              <NuxtLink to="/count">Counter</NuxtLink>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </nav>

  <!-- <div class="flex flex-col bg-clip-border  h-screen w-full max-w-[32rem] p-4">
    <h1 class="text-4xl p-4">Nuxt Applications</h1>
    <nav class="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal ">
      <div role="button" tabindex="0"
        class="w-full p-3 rounded-lg text-center leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
        <div class="flex items-center gap-x-4 text-3xl">
          <svg-icon type="mdi" :path="mdiHome" />
          <NuxtLink to="/">Home</NuxtLink>
        </div>
      </div>
      <div role="button" tabindex="0" @click="pushAccordion"
        class="flex items-center w-full p-3 rounded-lg text-center leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
        <div class="flex items-center gap-x-4">
          <svg-icon type="mdi" :path="mdiApplicationArray" />
          <div class="text-3xl">AppList</div>
        </div>
        <ul v-show="toggleAccordion" class="mt-6">
          <li class="pl-14 text-2xl">
            <NuxtLink to="/count">Counter</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </div> -->
</template>