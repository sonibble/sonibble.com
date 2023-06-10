<template>
  <main class="flex flex-col py-60">
    <section
      class="flex flex-col laptop:flex-row gap-20 min-h-screen container mx-auto px-5"
    >
      <ContactInfo />

      <!-- all the contact form -->
      <div class="flex flex-col laptop:w-6/12">
        <h2
          class="text-6xl font-medium leading-tight"
          data-cursor-size="200"
          data-cursor-exclusion
        >
          Get in touch.
        </h2>

        <FormInput
          @save="sendMessage.mutate"
          :validation="formValidation"
          class="flex flex-col mt-16 gap-5"
        >
          <TextInput
            name="fullName"
            label="Full Name"
            placeholder="Your full name"
          />
          <TextInput
            name="email"
            label="Email address"
            placeholder="Your email address"
          />
          <TextAreaInput
            name="message"
            label="Messages"
            placeholder="Tell us about your problem"
          />

          <div class="flex justify-end mt-10">
            <OutlineButton type="submit">
              <i class="fi fi-rr-paper-plane"></i>
              Send Messages</OutlineButton
            >
          </div>
        </FormInput>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { object, string } from 'yup'

definePageMeta({
  layout: 'main',
})

useSeoMeta({
  title: 'Contact',
  description: 'Stay connect with our creator',
  ogTitle: 'Contact | Sonibble',
  ogDescription: 'Stay connect with our creator',
})
const formValidation = object({
  fullName: string().required('Please fill the full name'),
  email: string()
    .required('Please add your email')
    .email('Opps, your email looks weird'),
  message: string().required('Please add your own message'),
})
const sendMessage = useMutation((formData) => {
  console.log(formData)
})
</script>
