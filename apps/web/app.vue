<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  bodyAttrs: {
    class:
      'font-sans font-normal text-base leading-normal text-black bg-white min-h-screen'
  }
})
</script>
