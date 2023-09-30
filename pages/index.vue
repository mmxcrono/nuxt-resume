<script setup lang="ts">
const page = "About Me";
const title = `Hoang Nguyen - ${page}`;
const description = `${title}, a Full-Stack Developer with 9 years experience`;

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
    <h1 class="my-8 text-xl sm:text-4xl">{{ page }}</h1>

    <section class="rounded-md bg-gray-300 bg-opacity-10 p-4">
      <ul class="list-inside list-disc pl-8 -indent-8">
        <li>US Citizen</li>
        <li>Full Stack Engineer for over 9 years</li>
        <li>
          Received B.S. in Computer Science in 2012 from
          <NuxtLink
            to="https://www.cpp.edu"
            target="_blank"
            class="font-bold text-sky-200"
            >Cal Poly Pomona</NuxtLink
          >
        </li>
        <li>
          Starting a new opportunity soon at
          <NuxtLink
            to="https://traderinteractive.com"
            target="_blank"
            class="font-bold text-sky-200"
            >Trader Interactive</NuxtLink
          >!
        </li>
      </ul>
    </section>

    <h2 class="my-4 text-lg sm:text-2xl">Top Skills</h2>

    <section class="rounded-md bg-gray-300 bg-opacity-10 p-4">
      <ul class="list-inside list-disc pl-2">
        <li>
          <NuxtLink
            to="https://www.typescriptlang.org/"
            target="_blank"
            class="font-bold text-sky-200"
            >TypeScript</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="https://www.php.net/"
            target="_blank"
            class="font-bold text-sky-200"
            >PHP</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="https://vuejs.org/"
            target="_blank"
            class="font-bold text-sky-200"
            >Vue</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="https://react.dev/"
            target="_blank"
            class="font-bold text-sky-200"
            >React</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="https://nodejs.org/en"
            target="_blank"
            class="font-bold text-sky-200"
            >Node</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="https://expressjs.com/"
            target="_blank"
            class="font-bold text-sky-200"
            >Express</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="https://vitejs.dev/"
            target="_blank"
            class="font-bold text-sky-200"
            >Vite</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="https://vitest.dev/"
            target="_blank"
            class="font-bold text-sky-200"
            >Vitest</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="https://phpunit.de/"
            target="_blank"
            class="font-bold text-sky-200"
            >PHPUnit</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="https://www.docker.com/"
            target="_blank"
            class="font-bold text-sky-200"
            >Docker</NuxtLink
          >
        </li>
      </ul>
    </section>

    <h2 class="my-4 text-lg sm:text-2xl">Learning</h2>

    <section class="rounded-md bg-gray-300 bg-opacity-10 p-4">
      <ul class="list-inside list-disc pl-2">
        <li>
          <NuxtLink
            to="https://nuxt.com/"
            target="_blank"
            class="font-bold text-sky-200"
            >Nuxt</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="https://chat.openai.com/"
            target="_blank"
            class="font-bold text-sky-200"
            >ChatGPT</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="https://kubernetes.io/"
            target="_blank"
            class="font-bold text-sky-200"
            >Kubernetes</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="https://laravel.com/"
            target="_blank"
            class="font-bold text-sky-200"
            >Laravel 10</NuxtLink
          >
        </li>
      </ul>
    </section>
  </main>
</template>
