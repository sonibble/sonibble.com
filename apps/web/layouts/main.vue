<!-- Main layout -->
<!-- manage the main purpose layout for apps -->
<template>
  <!-- Header -->
  <MainHeader />

  <!-- childs -->
  <main class="flex flex-col min-h-screen">
    <slot>Children</slot>
  </main>

  <!-- Footer -->
  <MainFooter />
</template>
