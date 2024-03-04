<script setup lang="ts">
const { data } = await useFetch("/api/recent-skills");
const config = useAppConfig();
const page = "About";
const title = `${config.appName} - ${page}`;
const description = `Born in USA, ${config.myName} is a full-stack software engineer with 10 years of experience`;

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});

useServerSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  // ogImage: "https://example.com/image.png",
  // twitterCard: "summary_large_image",
});
</script>

<template>
  <main class="min-h-[300px] p-4">
    <PageTitle :page="page" />

    <section class="rounded-md bg-gray-300 bg-opacity-10 p-4">
      <ul class="list-inside list-disc pl-8 -indent-8">
        <li>US Citizen</li>
        <li>Full Stack Engineer for over 10 years</li>
        <li>
          Received B.S. in Computer Science in 2012 from
          <NuxtLink
            to="https://www.cpp.edu"
            target="_blank"
            class="font-bold text-sky-200"
            >Cal Poly Pomona</NuxtLink
          >
        </li>
      </ul>
    </section>

    <h2 class="my-4 text-lg sm:text-2xl">Most Recent Skills</h2>

    <section class="rounded-md bg-gray-300 bg-opacity-10 p-4 sm:columns-3">
      <ul class="list-inside list-disc pl-2">
        <li v-for="item in data" :key="item.name">
          <NuxtLink
            :to="item.link"
            target="_blank"
            class="font-bold text-sky-200"
            >{{ item.name }}</NuxtLink
          >
        </li>
      </ul>
    </section>
  </main>
</template>
