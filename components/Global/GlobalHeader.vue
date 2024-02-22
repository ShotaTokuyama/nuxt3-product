<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiPalette } from "@mdi/js";
</script>

<template>
  <div class="navbar bg-base-300 text-white px-8 fixed z-50 py-6">
    <h1 class="text-3xl flex-1">Nuxt Applications</h1>
    <ul>
      <li class="flex items-center text-2xl">
        <svg-icon type="mdi" :path="mdiPalette" />
        <p class="px-4">Theme</p>
        <SystemTheme />
      </li>
      <li class="dropdown dropdown-end ml-32">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-20 rounded-full">
            <img src="/images/mypix.jpg" />
          </div>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>
