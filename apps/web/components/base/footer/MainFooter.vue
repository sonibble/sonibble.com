<template>
  <footer class="flex flex-col">
    <!-- menus -->
    <div class="grid grid-cols-5 border border-gray-100 border-dashed relative">
      <div
        class="h-14 w-14 rounded-2xl border border-dashed absolute -top-7 bg-white left-1/2 -ml-7"
      >
        <NuxtImg src="/images/logo.png" />
      </div>
      <div
        v-for="menu in menus"
        :key="menu.headline"
        class="border-l border-dashed border-gray-100 py-10 px-5 pt-16"
      >
        <h4
          class="text-lg font-medium transition-all duration-300 hover:bg-gray-50 px-3 py-2 rounded-xl hover:text-brand"
        >
          {{ menu.headline }}
        </h4>
        <ul class="flex flex-col mt-6 gap-2">
          <li
            v-for="item in menu.items"
            :key="item.label"
            class="flex transition-all duration-300 hover:bg-gray-100 px-4 py-2 rounded-xl"
          >
            <NuxtLink
              :to="item.link"
              :external="item.link.includes('http')"
              class="h-full w-full"
              >{{ item.label }}</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>

    <!-- credits -->
    <div
      class="flex items-center justify-between border-t border-t-gray-100 py-6 px-14 mt-16"
    >
      <span class="font-medium">&copy; {{ currentYear }} Sonibble</span>

      <div class="flex items-center gap-16">
        <ul class="flex items-center gap-5">
          <li
            v-for="menu in creditMenus"
            :key="menu.label"
            class="flex gap-3 font-medium transition-all duration-300 hover:-translate-y-1"
          >
            <NuxtLink :to="menu.link" :external="menu.link.includes('http')">{{
              menu.label
            }}</NuxtLink>
          </li>
        </ul>

        <span class="flex items-center font-medium gap-3"
          >Built with <i class="fi fi-sr-heart"></i
        ></span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { creditMenus, menus } from '~/data/footer.json'

const currentYear = computed(() => new Date().getFullYear())
</script>
