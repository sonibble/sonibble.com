<template>
  <button
    class="flex justify-center items-center font-medium bg-red-100 rounded-2xl px-6 h-11 gap-3 transition-all duration-300 hover:scale-95"
  >
    <i :class="slice.primary.icon_code" class="text-red-500"></i>
    <span>{{ slice.primary.label }}</span>
  </button>
</template>

<script setup lang="ts">
import { Content } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ButtonSlice>([
    'slice',
    'index',
    'slices',
    'context'
  ])
)
</script>
