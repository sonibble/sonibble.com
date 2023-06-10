<template>
  <div class="flex flex-col">
    <label
      class="flex mb-3 text-sm font-medium text-gray-700 ml-3"
      :for="`${name}-input`"
      v-show="label"
      >{{ label }}</label
    >
    <div
      class="flex items-center h-12 rounded-2xl px-3 ring-1 ring-gray-100 focus-within:ring-2 focus-within:ring-black transition-all duration-300"
    >
      <i :class="preIcon" v-show="preIcon"></i>
      <input
        :name="name"
        type="text"
        :id="`${name}-input`"
        v-model="value"
        :placeholder="placeholder"
        class="flex h-full flex-1 bg-transparent outline-transparent border-transparent ring-transparent focus:ring-transparent focus:border-transparent focus:outline-transparent text-base placeholder:text-gray-500"
      />
      <i :class="sufIcon" v-show="sufIcon"></i>
    </div>
    <span
      v-show="errorMessage"
      class="flex mt-4 ml-3 w-10/12 text-red-600 text-sm"
      >{{ errorMessage }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'

interface TextInputProps {
  label?: string
  preIcon?: string
  sufIcon?: string
  placeholder?: string
  name: string
}
const { name } = defineProps<TextInputProps>()
const { value, errorMessage } = useField(() => name)
</script>
