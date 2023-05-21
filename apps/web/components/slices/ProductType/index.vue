<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="flex flex-col py-80 bg-slate-100"
  >
    <div class="flex flex-col container mx-auto">
      <h2 class="text-7xl font-medium leading-tight w-6/12">
        {{ slice.primary.heading }}
      </h2>

      <div class="flex mt-10 w-7/12">
        <PrismicRichText :field="slice.primary.content" class="text-2xl" />
      </div>

      <div class="grid grid-cols-4 gap-5 mt-16">
        <template v-for="item in slice.items">
          <div class="flex flex-col p-5 rounded-3xl bg-white">
            <div class="flex items-center gap-3">
              <i
                :class="item.icon"
                class="h-12 w-12 rounded-xl border border-gray-100 text-2xl"
              ></i>

              <h5 class="font-medium text-xl">{{ item.name }}</h5>
            </div>
            <PrismicRichText
              :field="item.desc"
              class="text-gray-700 mt-4 text-lg leading-normal"
            />
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
  getSliceComponentProps<Content.ProductTypeSlice>([
    'slice',
    'index',
    'slices',
    'context'
  ])
)
</script>
