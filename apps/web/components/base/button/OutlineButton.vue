<template>
  <button
    class="flex px-8 h-16 rounded-full border border-gray-100 text-xl gap-3 justify-center items-center"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ButtonBaseProps } from '~/types/component'

interface OutlineButtonProps extends /* @vue-ignore */ ButtonBaseProps {}
const { type = 'button' } = defineProps<OutlineButtonProps>()
</script>
