<script setup lang="ts">
const config = useAppConfig();
</script>

<template>
  <header class="flex justify-between p-4">
    <h2>{{ config.appName }}</h2>

    <nav class="flex gap-4">
      <NuxtLink to="/" class="hover:text-sky-500">Home</NuxtLink>
      <NuxtLink to="/about" class="hover:text-sky-500">About</NuxtLink>
    </nav>
  </header>
</template>
