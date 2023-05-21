<template>
  <div class="flex flex-col w-1/4">
    <h4 class="flex text-2xl font-medium">{{ slice.primary.heading }}</h4>

    <ul
      :data-slice-type="slice.slice_type"
      :data-slice-variation="slice.variation"
      class="flex flex-col list-none mt-12 gap-5"
    >
      <template v-for="item in slice.items">
        <NuxtLink
          :to="item.path?.toString()"
          class="flex items-center font-medium transition-all duration-300 hover:-translate-y-1"
        >
          {{ item.label }}
        </NuxtLink>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Content } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.FooterMenuSlice>([
    'slice',
    'index',
    'slices',
    'context'
  ])
)
</script>
