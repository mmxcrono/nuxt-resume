<script setup lang="ts">
const { data } = await useFetch("/api/recent-skills");
const { appName, myName, aboutInfo } = useAppConfig();
const page = "About";
const title = `${appName} - ${page}`;
const description = `${myName}'s resume, skills, and education`;

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
        <li v-for="(item, index) in aboutInfo.items" :key="index">
          {{ item }}
        </li>
        <li v-if="aboutInfo.degree">
          {{ aboutInfo.degree.name }} from
          <NuxtLink
            :to="aboutInfo.degree.college.link"
            target="_blank"
            class="font-bold text-sky-200"
            >{{ aboutInfo.degree.college.name }}</NuxtLink
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
