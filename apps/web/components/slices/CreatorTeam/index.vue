<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="flex flex-col py-80"
  >
    <div class="flex flex-col container mx-auto items-center">
      <h2 class="text-7xl font-medium leading-tight w-6/12 text-center">
        {{ slice.primary.heading }}
      </h2>

      <div class="flex mt-10 w-7/12 text-center">
        <PrismicRichText :field="slice.primary.content" class="text-2xl" />
      </div>

      <div
        class="w-full grid grid-cols-4 gap-5 mt-16 justify-center items-center"
      >
        <template v-for="item in slice.items">
          <div class="flex flex-col p-5 rounded-3xl border border-gray-100">
            <PrismicImage
              :field="item.avatar"
              class="h-16 w-16 overflow-hidden rounded-full object-cover"
            />
            <h5 class="text-2xl font-medium mt-4">{{ item.name }}</h5>
            <PrismicRichText
              :field="item.about"
              class="text-gray-700 mt-4 text-lg leading-normal"
            />

            <div class="flex mt-6">
              <span
                class="mt-6 flex justify-center items-center bg-red-100 text-red-500 font-medium text-sm px-4 py-1 rounded-2xl"
                >{{ item.role }}</span
              >
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Content } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CreatorTeamSlice>([
    'slice',
    'index',
    'slices',
    'context'
  ])
)
</script>
