<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiHome,
  mdiApplicationArray,
  mdiGithub,
  mdiAlphaQCircle,
  mdiCardAccountMail,
  mdiPalette,
} from "@mdi/js";
</script>

<template>
  <nav class="menu w-96 bg-base-200 text-white relative pt-32">
    <ul>
      <li class="mb-2">
        <details>
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
              <NuxtLink to="/applist/jsonp">Json Placeholder</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/applist/weather">Weather</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/applist/tweet">Tweet</NuxtLink>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </nav>
</template>
