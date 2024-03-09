<script setup lang="ts">
const { myName, currentPosition } = useAppConfig();
</script>

<template>
  <section class="mt-8 flex justify-center gap-8 p-4">
    <img
      src="/me_blur.png"
      alt="a picture of me"
      class="h-48 w-48 rounded-full border-2 border-white sm:h-64 sm:w-64 sm:border-4"
    />
    <div class="flex flex-col items-center justify-center">
      <h3 class="text-xl sm:text-3xl">{{ myName }}</h3>
      <h4 class="text-md sm:text-2xl">{{ currentPosition }}</h4>
    </div>
  </section>
</template>
