<!-- Pages -->
<!-- inclucluding home, about, and others -->
<template>
  <Head>
    <Title>{{ document?.data.title }} | Sonibble</Title>
    <Meta name="description" :content="document?.data.desc"></Meta>
  </Head>

  <div class="flex flex-col">
    <SliceZone :slices="document?.data.slices" :components="components" />
  </div>
</template>

<script setup lang="ts">
import { components } from '~/components/slices'

definePageMeta({
  layout: 'main'
})
const route = useRoute()
const slug = route.params.slug == '' ? 'home' : route.params.slug[0]
const { client } = usePrismic()
const { data: document } = await useAsyncData(slug, () =>
  client.getByUID('page', slug)
)
</script>

<style scoped></style>
