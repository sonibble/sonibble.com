<template>
  <form @submit.prevent="onSubmit" :class="$props.class" :id="id">
    <slot />
  </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'

interface FormInputProps {
  validation?: any
  class?: string
  id?: string
}
const { validation, id } = defineProps<FormInputProps>()

interface FormInputEmits {
  (e: 'save', formData: any): void
}
const emit = defineEmits<FormInputEmits>()

const { handleSubmit } = useForm({ validationSchema: validation })
const onSubmit = handleSubmit((formData) => {
  emit('save', formData)
})
</script>
