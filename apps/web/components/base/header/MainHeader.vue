<template>
  <header
    class="flex items-center justify-center fixed inset-x-0 top-0 px-10 py-4 z-30"
  >
    <!-- branding -->
    <NuxtLink class="flex items-center h-12 w-12 logo" to="/">
      <NuxtImg src="/images/logo.png" class="flex h-full w-full" />
    </NuxtLink>

    <!-- navigation -->
    <div
      class="hidden tablet:flex border rounded-full px-10 py-4 absolute bg-black top-5 text-white navigation"
    >
      <ul class="flex items-center gap-8 !m-0">
        <li
          v-for="menu in menus"
          :key="menu.path"
          class="flex items-center font-medium transition-all duration-300 hover:-translate-y-1"
        >
          <NuxtLink :to="menu.path">{{ menu.label }}</NuxtLink>
        </li>
      </ul>
    </div>

    <!-- actions -->
    <div class="flex flex-1"></div>
    <IconButton class="border border-gray-100 donate-button"
      ><i class="fi fi-sr-circle-heart"></i
    ></IconButton>
  </header>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { menus } from '~/data/nav.json'

onMounted(() => {
  gsap.from(['.logo', '.navigation', '.donate-button'], {
    y: -200,
    duration: 1.2,
    ease: 'back',
    stagger: 0.2,
  })
})
</script>
