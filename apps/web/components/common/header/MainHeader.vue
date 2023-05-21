<template>
  <header
    class="fixed z-20 flex top-0 inset-x-0 px-14 py-4 border-b border-b-gray-200 bg-white bg-opacity-50 backdrop-blur-xl"
  >
    <!-- branding -->
    <NuxtLink to="/" class="flex items-center gap-0">
      <PrismicImage :field="document.data.logo" class="flex w-12 h-12" />
      <h1 class="font-poppins font-medium text-xl">
        {{ document.data.logo_name }}
      </h1>
    </NuxtLink>

    <div class="flex flex-1"></div>

    <!-- slice data including menus, and button -->
    <SliceZone :components="components" :slices="document.data.slices" />
  </header>
</template>

<script setup>
import { components } from '~/components/slices'
const { client } = usePrismic()
const { data: document } = await useAsyncData('mainheader', () =>
  client.getSingle('mainheader')
)
</script>

<style lang="scss" scoped></style>
