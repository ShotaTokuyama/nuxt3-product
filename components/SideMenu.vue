<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiHome, mdiApplicationArray, mdiGithub, mdiAlphaQCircle, mdiCardAccountMail, mdiPalette } from '@mdi/js'
</script>

<template>
  <nav class="menu bg-base-200 w-80 text-white relative">
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
              <NuxtLink to="/applist/counter">Counter</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/applist/todo">Todo</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/applist/weather">Weather</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/applist/gpt3">GPT-3</NuxtLink>
            </li>
          </ul>
        </details>
      </li>
      <li class="mb-2">
        <div class="flex items-center gap-x-4 text-2xl">
          <svg-icon type="mdi" :path="mdiGithub" />
          <a href="https://github.com/ShotaTokuyama/nuxt3-product" target="_blank">GitHub</a>
        </div>
      </li>
      <li class="mb-2">
        <div class="flex items-center gap-x-4 text-2xl">
          <svg-icon type="mdi" :path="mdiAlphaQCircle" />
          <a href="https://qiita.com/ShotaTokuyama" target="_blank">Qiita</a>
        </div>
      </li>
      <li class="mb-2">
        <div class="flex items-center gap-x-4 text-2xl">
          <svg-icon type="mdi" :path="mdiCardAccountMail" />
          <NuxtLink to="/contact">Contact</NuxtLink>
        </div>
      </li>
      <li class="mb-2">
        <div class="flex items-center gap-x-4 text-2xl flex-wrap">
          <svg-icon type="mdi" :path="mdiPalette" />
          <p>Theme</p>
          <Theme />
        </div>
      </li>
    </ul>
    <div
      class="avatar absolute bottom-8 left-8 flex justify-between items-center gap-x-6 hover:cursor-pointer hover:text-green-400">
      <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="/images/mypix.jpg" />
      </div>
      <p class="text-xl">Tokuyama Shota</p>
    </div>
  </nav>
</template>