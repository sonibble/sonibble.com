<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="flex justify-center items-center pt-36 relative mb-28"
  >
    <PrismicImage
      :field="slice.primary.background_image"
      class="absolute inset-0 w-3/5 h-screen object-cover -left-1/4"
    />

    <div class="flex justify-center container mx-auto px-28 py-32 relative">
      <div class="flex justify-center items-center w-7/12">
        <h2
          class="justify-center text-7xl font-medium font-poppins leading-tight text-center"
        >
          {{ slice.primary.heading }}
          <span class="text-slate-500">{{ slice.primary.heading_accent }}</span>
        </h2>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Content } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HeroSlice>([
    'slice',
    'index',
    'slices',
    'context'
  ])
)
</script>
