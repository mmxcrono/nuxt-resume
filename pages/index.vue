<script setup lang="ts">
definePageMeta({
  title: "Some Page",
});

const title = "My Resume - Home";
</script>

<template>
  <div class="flex flex-col">
    <Head>
      <title>{{ title }}</title>
      <Meta name="description" :content="title" />
    </Head>
    <main class="min-h-[300px] p-4 dark:bg-gray-900">
      <h1>{{ title }}</h1>
      <section>
        <p>This is my resume</p>
      </section>
    </main>
  </div>
</template>
