<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiHome,
  mdiGithub,
  mdiAlphaQCircle,
  mdiCardAccountMail,
} from "@mdi/js";
</script>

<template>
  <nav class="menu w-96 bg-base-200 text-white relative pt-32">
    <ul class="p-4">
      <li class="mb-2">
        <div class="flex items-center gap-x-4 text-2xl">
          <svg-icon type="mdi" :path="mdiHome" />
          <NuxtLink to="/">Home</NuxtLink>
        </div>
      </li>
      <li class="mb-2">
        <div class="flex items-center gap-x-4 text-2xl">
          <svg-icon type="mdi" :path="mdiGithub" />
          <a
            href="https://github.com/ShotaTokuyama/nuxt3-product"
            target="_blank"
            >GitHub</a
          >
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
    </ul>
  </nav>
</template>
