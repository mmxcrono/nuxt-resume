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
  <div>
    <header class="text-md flex justify-between p-4 sm:text-lg">
      <h2>{{ config.appName }}</h2>

      <nav class="flex gap-4">
        <NuxtLink to="/" :class="aboutClass">About</NuxtLink>
        <NuxtLink to="/experience" :class="experienceClass"
          >Experience</NuxtLink
        >
      </nav>
    </header>

    <section class="mt-8 flex justify-center gap-8 p-4">
      <img
        src="/me_blur.png"
        alt="a picture of me"
        class="h-48 w-48 rounded-full border-2 border-white sm:h-80 sm:w-80 sm:border-4"
      />
      <div class="flex flex-col items-center justify-center">
        <h3 class="text-xl sm:text-3xl">{{ config.myName }}</h3>
        <h4 class="text-md sm:text-2xl">{{ config.currentPosition }}</h4>
      </div>
    </section>
  </div>
</template>
