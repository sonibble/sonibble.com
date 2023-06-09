<template>
  <main class="flex flex-col min-h-screen py-60 gap-80">
    <!-- intro -->
    <section class="flex justify-center container mx-auto px-20 pt-20 intro">
      <h2 class="text-6xl text-center w-8/12 leading-relaxed font-medium">
        We are
        <span class="px-8 py-2 border-4 border-black rounded-full">open</span>
        source <span class="text-gray-400">community</span>
      </h2>
    </section>

    <!-- what we're do -->
    <section class="flex container mx-auto gap-20 px-20 do">
      <div class="flex w-5/12">
        <h2 class="text-6xl font-medium leading-tight">
          We create really
          <span class="text-gray-400">high quality</span> product
        </h2>
      </div>
      <div class="flex flex-col gap-10 w-6/12 text-2xl leading-relaxed">
        <p>
          Hi, we are the open source community building software and product to
          make something powerful and easy to use. All the software and product
          is design to be your perfect match and save your own money.
        </p>
        <p>
          What we build is starting from community idea and combine with free
          feature that allow you to moving faster and powering your own
          workflows.
        </p>
      </div>
    </section>

    <!-- products -->
    <section
      class="flex flex-col items-center container mx-auto px-20 py-32 bg-black text-gray-100 rounded-3xl"
    >
      <h2 class="text-6xl leading-relaxed font-medium text-center w-7/12">
        Let's
        <span class="border-4 border-white px-10 py-1 rounded-full"
          >explore</span
        >
        the products
      </h2>
      <div class="grid grid-cols-4 w-full gap-5 mt-32">
        <div
          class="flex flex-col items-center col-span-1 border-2 border-dashed border-gray-700 rounded-3xl gap-10 py-10 transition-all duration-300 hover:scale-95 cursor-pointer"
          v-for="(product, index) in productMaps"
          :key="index"
        >
          <i :class="product.icon" class="text-3xl"></i>
          <span class="text-xl font-medium">{{ product.label }}</span>
        </div>
      </div>
    </section>

    <!-- community -->
    <section class="flex flex-col container mx-auto px-20 community">
      <h2 class="text-6xl font-medium leading-tight w-10/12">
        Join <span class="text-gray-400">our community</span> and build
        something better
      </h2>
      <p class="text-2xl leading-relaxed w-8/12 mt-10">
        We build on top of open source project with open people. Start join the
        collaboration and change our world.
      </p>
      <div class="flex mt-28">
        <OutlineButton>
          <i class="fi fi-brands-github"></i>

          Join community
        </OutlineButton>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { productMaps } from '~/data/products.json'

definePageMeta({
  layout: 'main',
})
useSeoMeta({
  title: 'Free products from community',
  description: 'We are open source community that build awesome products',
})

onMounted(() => {
  gsap.from('section.intro', {
    scale: 11,
    opacity: 0,
    ease: 'expo',
    duration: 1.5,
    delay: 1.2,
  })

  gsap.from('section.do h2', {
    y: 200,
    opacity: 0,
    scrollTrigger: {
      trigger: 'section.do',
      start: 'top 80%',
    },
  })
  gsap.from('section.do p', {
    y: 200,
    opacity: 0,
    delay: 0.4,
    stagger: 0.2,
    scrollTrigger: {
      trigger: 'section.do',
      start: 'top 80%',
    },
  })
  gsap.from('section.community h2', {
    y: 200,
    opacity: 0,
    scrollTrigger: {
      trigger: 'section.community',
      start: 'top 80%',
    },
  })
  gsap.from('section.community p', {
    y: 200,
    opacity: 0,
    delay: 0.4,
    stagger: 0.2,
    scrollTrigger: {
      trigger: 'section.community',
      start: 'top 80%',
    },
  })
})
</script>
