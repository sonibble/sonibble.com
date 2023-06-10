<template>
  <button
    class="flex px-8 h-16 rounded-full border border-gray-100 text-base font-medium gap-3 justify-center items-center transition-all duration-500 hover:bg-black hover:text-white"
    :type="type"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ButtonBaseProps } from '~/types/component'

interface OutlineButtonProps extends /* @vue-ignore */ ButtonBaseProps {}
const { type = 'button' } = defineProps<OutlineButtonProps>()
</script>
