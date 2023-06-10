<template>
  <div class="flex flex-col laptop:w-4/12 gap-5 item-links">
    <!-- list all contact links -->
    <div
      class="flex flex-col cursor-pointer transition-all duration-500 border border-gray-100 rounded-3xl p-5 hover:bg-gray-100 hover:-translate-y-2"
      v-for="{ desc, icon, title, link } in links"
      :key="title"
      @click="navigateTo(link)"
    >
      <div class="flex items-center gap-5">
        <i class="text-xl" :class="icon"></i>
        <h3 class="text-lg font-medium">{{ title }}</h3>
      </div>
      <p class="mt-4 text-gray-600">
        {{ desc }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { links } from '~/data/contact.json'

onMounted(() => {
  gsap.from('.item-links', {
    y: 200,
    opacity: 0,
    ease: 'expo',
    duration: 1.2,
    onComplete: () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        ScrollTrigger.create({
          trigger: '.item-links',
          start: 'top 20%',
          end: '+=200',
          pin: '.item-links',
          pinType: 'transform',
        })
      }
    },
  })
})
</script>
