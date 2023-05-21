<template>
  <div
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="flex items-center gap-10 mr-16"
  >
    <template v-for="item in slice.items">
      <NuxtLink
        :to="item.link?.toString()"
        class="flex items-center justify-center font-medium transition-all duration-300 hover:-translate-y-1"
      >
        <i class="text-xl" :class="item.icon_code"></i>
        {{ item.label }}
      </NuxtLink>
    </template>
  </div>
</template>

<script setup lang="ts">
import { Content } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HeaderMenuSlice>([
    'slice',
    'index',
    'slices',
    'context'
  ])
)
</script>
