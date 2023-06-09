<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

const {
  public: { host },
} = useRuntimeConfig()

useSeoMeta({
  titleTemplate: '%s | Sonibble',
  ogSiteName: 'Sonibble',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterCreator: '@nyomansunima',
})

useHead({
  bodyAttrs: {
    class: 'font-sans font-normal text-base leading-normal bg-white text-black',
  },
})

// register and enable animation
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  const lenis = new Lenis()
  lenis.on('scroll', ScrollTrigger.update)
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
})
</script>
