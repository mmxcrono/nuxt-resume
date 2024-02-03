<script setup lang="ts">
const config = useAppConfig();
const route = useRoute();
const aboutClass = computed(() => ({
  "hover:text-sky-500": true,
  "border-b-2 border-sky-500": route.path === "/",
}));
const experienceClass = computed(() => ({
  "hover:text-sky-500": true,
  "border-b-2 border-sky-500": route.path === "/experience",
}));
</script>

<template>
  <header class="text-md flex justify-between p-4 sm:text-lg">
    <h2>{{ config.appName }}</h2>

    <nav class="flex gap-4">
      <NuxtLink to="/" :class="aboutClass">About</NuxtLink>
      <NuxtLink to="/experience" :class="experienceClass">Experience</NuxtLink>
    </nav>
  </header>
</template>
