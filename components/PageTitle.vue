<script setup lang="ts">
import { defineProps } from "vue";

interface MyComponentProps {
  page: string;
}

const props = defineProps<MyComponentProps>();
</script>

<template>
  <h1 class="my-8 text-2xl sm:text-4xl">{{ props.page }}</h1>
</template>
