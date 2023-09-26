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

    <main class="min-h-[300px] p-4">
      <h1>{{ title }}</h1>
      <section>
        <p>About Hoang Nguyen</p>
      </section>
    </main>
  </div>
</template>
