<template>
  <footer class="flex flex-col p-4 text-zinc-400">
    <div class="flex flex-col sm:grid-cols-2 sm:flex-row sm:justify-evenly">
      <ul
        role="navigation"
        class="flex flex-col gap-2 pt-2 text-center sm:text-right"
      >
        <li><NuxtLink to="/" class="hover:text-sky-500">Home</NuxtLink></li>
        <li>
          <NuxtLink to="/about" class="hover:text-sky-500">About</NuxtLink>
        </li>
      </ul>
      <ul
        role="navigation"
        class="flex flex-col gap-2 pt-2 text-center sm:text-left"
      >
        <li>
          <NuxtLink
            to="https://www.linkedin.com/in/hoangn/"
            target="_blank"
            class="hover:text-sky-500"
            >LinkedIn</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="https://github.com/mmxcrono"
            target="_blank"
            class="hover:text-sky-500"
            >GitHub</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="resume.pdf" target="_blank" class="hover:text-sky-500"
            >Resume PDF</NuxtLink
          >
        </li>
      </ul>
    </div>
    <p class="pt-4 text-center text-sm">2023 © Hoang Nguyen</p>
  </footer>
</template>
