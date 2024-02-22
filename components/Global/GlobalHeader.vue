<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiPalette, mdiTranslateVariant } from "@mdi/js";
</script>

<template>
  <div class="navbar bg-base-300 text-white px-8 fixed z-50 py-6">
    <h1 class="text-3xl flex-1">Nuxt Applications</h1>
    <ul>
      <li class="flex items-center text-xl gap-x-4 mr-16">
        <svg-icon type="mdi" :path="mdiTranslateVariant" />
        <p>Locales</p>
        <SystemLocales />
      </li>
      <li class="flex items-center text-xl gap-x-4 mr-16">
        <svg-icon type="mdi" :path="mdiPalette" />
        <p>Theme</p>
        <SystemTheme />
      </li>
      <li>
        <div class="avatar">
          <div class="w-14 rounded-full">
            <img src="/images/mypix.jpg" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
