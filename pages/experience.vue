<script setup lang="ts">
const config = useAppConfig();
const page = "Experience";
const title = `${config.appName} - ${page}`;
const description = `${config.myName} has over 10 years of full-stack software development work experience`;
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

const { data } = useFetch<Array<Experience>>("/api/experience");
</script>

<template>
  <main class="min-h-[300px] p-4">
    <PageTitle :page="page" />

    <section
      v-for="(experience, expIndex) in data"
      :key="expIndex"
      class="mt-4 rounded-md bg-gray-300/10 p-4"
    >
      <div class="flex justify-between text-lg sm:text-2xl">
        <h2>{{ experience.company }}</h2>
        <span>{{ experience.dates }}</span>
      </div>

      <div class="mb-8 flex justify-between sm:text-lg">
        <span>{{ experience.title }}</span>
        <span>{{ experience.location }}</span>
      </div>
      <ul class="mt-4 list-inside list-disc pl-8 -indent-8">
        <li v-for="(item, index) in experience.items" :key="index">
          {{ item }}
        </li>
        <li v-for="(item, index) in experience.links" :key="index">
          <NuxtLink
            :to="item.link"
            target="_blank"
            class="font-bold text-sky-200"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
      <h3 class="my-4 text-center underline">Focused Skills</h3>
      <ul class="m-4 list-disc columns-2 pl-4 sm:columns-4">
        <li v-for="(skill, index) in experience.skills" :key="index" class="">
          {{ skill }}
        </li>
      </ul>
    </section>
  </main>
</template>
