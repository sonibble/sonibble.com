<!-- MainFooter -->
<!-- Main and general footer layout -->

<template>
  <footer class="flex flex-col border-t border-t-gray-100 pt-16 items-center">
    <div class="flex w-full px-16 justify-center">
      <SliceZone :slices="document?.data.slices" :components="components" />
    </div>

    <!-- credits -->
    <div
      class="flex w-full justify-between items-center py-10 border-t border-t-gray-100 px-14 mt-16"
    >
      <span class="flex items-center font-medium">
        Copyright &copy; {{ creditYear }} - Allright Reserved
      </span>

      <span class="flex font-medium gap-3">
        Created with
        <i class="fi fi-sr-heart text-red-500"></i>
      </span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { components } from '~/components/slices'
const { client } = usePrismic()
const creditYear = computed(() => {
  return new Date().getFullYear().toString()
})

const { data: document } = await useAsyncData('mainfooter', () =>
  client.getSingle('mainfooter')
)
</script>
