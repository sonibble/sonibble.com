<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="flex flex-col py-80"
    :style="{ backgroundColor: slice.primary.background_color?.toString() }"
  >
    <div
      v-if="slice.variation == 'sideSideLayout'"
      class="container mx-auto flex gap-16"
    >
      <h2 class="flex text-7xl font-medium w-5/12 font-poppins leading-tight">
        {{ slice.primary.heading }}
      </h2>
      <PrismicRichText
        :field="slice.primary.content"
        class="flex w-7/12 simple-content"
      />
    </div>

    <div v-else class="container mx-auto flex flex-col gap-10">
      <h2 class="flex text-7xl font-medium w-7/12 font-poppins leading-tight">
        {{ slice.primary.heading }}
      </h2>
      <PrismicRichText
        :field="slice.primary.content"
        class="flex w-8/12 simple-content"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Content } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.SimpleContentSlice>([
    'slice',
    'index',
    'slices',
    'context'
  ])
)
</script>

<style scoped>
.simple-content :deep(p) {
  @apply text-2xl leading-normal;
}
</style>
