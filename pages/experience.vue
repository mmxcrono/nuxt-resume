<script setup lang="ts">
const config = useAppConfig();
const page = "Experience";
const title = `${config.myName} - ${page}`;
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
</script>

<template>
  <main class="min-h-[300px] p-4">
    <PageTitle :page="page"></PageTitle>

    <section class="mt-4 rounded-md bg-gray-300/10 p-4">
      <div class="flex justify-between text-lg sm:text-2xl">
        <h2>Slickdeals</h2>
        <span>2021 - 2023</span>
      </div>

      <div class="mb-8 flex justify-between sm:text-lg">
        <span>Sr. Engineer, Full Stack</span>
        <span>Remote</span>
      </div>
      <ul class="mt-4 list-inside list-disc pl-8 -indent-8">
        <li>
          Refactored, expanded, and modularized the
          <NuxtLink
            to="https://slickdeals.net/extension/"
            target="_blank"
            class="font-bold text-sky-200"
          >
            Slickdeals browser extension
          </NuxtLink>
          involving
          <strong>Vite, Vue, Storybook, Typescript, and SASS</strong>
        </li>
        <li>
          Collaborated with the product team on
          <strong>50+ Figma</strong> designs and
          <strong>30+ A/B Tests</strong>
        </li>
        <li>
          Developed <strong>REST API</strong> controllers, services,
          repositories, and data models in
          <strong>PHP</strong>
        </li>
        <li>
          Helped improve enterprise-level microservices and monolithic
          <strong>Git</strong> repos
        </li>
        <li>
          Integrated code with
          <strong>Google Tag Manager, Google Analytics, and Sentry</strong>
        </li>
        <li>
          Established and maintained <strong>100+ unit tests</strong> and
          <strong>functional tests</strong>
        </li>
        <li>
          Contributed to <strong>Agile Scrum</strong> and
          <strong>Kanban</strong> teams by assisting in weekly sprint planning
          and refinement, quarterly planning with <strong>OKRs</strong> and
          <strong>KPIs</strong>
        </li>
        <li>
          Defined and completed implementation and test plans for
          <strong>200+</strong> tickets in
          <strong>JIRA</strong>
        </li>
        <li>
          Performend <strong>code reviews</strong> and mentored junior
          developers
        </li>
      </ul>
      <h3 class="my-4 text-center underline">Focused Skills</h3>
      <ul class="flex flex-wrap justify-center">
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">Vue</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">SCSS</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">TypeScript</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">REST API</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">PHP</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">PHPUnit</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">Symfony</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">MySQL</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">Docker</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">Vitest</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">Git</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">Google Tag Manager</li>
      </ul>
    </section>

    <section class="mt-4 rounded-md bg-gray-300/10 p-4">
      <div class="flex justify-between text-lg sm:text-2xl">
        <h2>Smart Software Solutions</h2>
        <span>2016 - 2021</span>
      </div>

      <div class="mb-8 flex justify-between sm:text-lg">
        <span>Lead Full Stack Engineer</span>
        <span>Hybrid</span>
      </div>
      <ul class="mt-4 list-inside list-disc pl-8 -indent-8">
        <li>
          Developed <strong>responsive</strong> web and hybrid
          <strong>mobile</strong> applications following
          <strong>Material Design</strong> with <strong>Ionic</strong>,
          <strong>Angular</strong>,
          <strong>React</strong>
        </li>
        <li>
          Developed <strong>REST API</strong> controllers, repositories,
          services, and data models in <strong>Typescript</strong> with
          <strong>Node.js</strong>, <strong>Express</strong>,
          <strong>Sequelize</strong> and <strong>MySQL</strong>
        </li>
      </ul>
      <h3 class="my-4 text-center underline">Focused Skills</h3>
      <ul class="flex flex-wrap justify-center">
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">Angular 2+</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">AngularJS</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">React</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">SCSS</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">Material Design</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">Drupal</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">Wordpress</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">Node.js + Express</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">PHP</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">REST API</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">MySQL</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">Ionic</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">Express</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">Java</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">Linux</li>
      </ul>
    </section>

    <section class="mt-4 rounded-md bg-gray-300/10 p-4">
      <div class="flex justify-between text-lg sm:text-2xl">
        <h2>Smart Software Solutions</h2>
        <span>2014 - 2016</span>
      </div>

      <div class="mb-8 flex justify-between sm:text-lg">
        <span>Full Stack Engineer</span>
        <span>On-Site</span>
      </div>
      <ul class="mt-4 list-inside list-disc pl-8 -indent-8">
        <li>
          Developed <strong>responsive</strong> web and hybrid
          <strong>mobile</strong> applications following
          <strong>Material Design</strong> with <strong>Ionic</strong>,
          <strong>Angular</strong>, <strong>React</strong>,
          <strong>React Native</strong>
        </li>
        <li>
          Created and proposed project <strong>estimates</strong> to clients
          over web and email
        </li>
        <li>
          <strong>Trained</strong> new hires and delegated tasks to developers
          across multiple projects
        </li>
        <li>
          Developed <strong>REST API</strong> controllers, repositories,
          services, and data models in <strong>Typescript</strong> with
          <strong>Node.js</strong>, <strong>Express</strong>,
          <strong>Sequelize</strong> and <strong>MySQL</strong>
        </li>
        <li>
          Designed <strong>database schemas</strong> and performed
          <strong>SQL query optimization</strong>
        </li>
      </ul>
      <h3 class="my-4 text-center underline">Focused Skills</h3>
      <ul class="flex flex-wrap justify-center">
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">Angular 9</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">React Native</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">Redux</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">SCSS</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">Firebase</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">AWS</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">DNS</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">PHP</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">REST API</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">MySQL</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">Ionic</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">Node.js + Express</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">Java</li>
        <li class="m-2 rounded-xl bg-teal-400/30 p-2">Linux</li>
      </ul>
    </section>
  </main>
</template>
