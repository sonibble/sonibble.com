<template>
  <button
    class="flex justify-center items-center text-2xl h-12 w-12 rounded-full"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ButtonBaseProps } from '~/types/component'

interface IconButtonProps extends /* @vue-ignore */ ButtonBaseProps {}
const { type = 'button' } = defineProps<IconButtonProps>()
</script>
