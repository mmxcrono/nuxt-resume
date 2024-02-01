<script setup lang="ts">
const config = useAppConfig();
</script>

<template>
  <header class="flex justify-between p-4 text-sm sm:text-lg">
    <h2>{{ config.myName }}</h2>

    <nav class="flex gap-4">
      <NuxtLink to="/" class="hover:text-sky-500">About Me</NuxtLink>
      <NuxtLink to="/experience" class="hover:text-sky-500"
        >Experience</NuxtLink
      >
    </nav>
  </header>
</template>
