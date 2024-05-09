export type Skill = {
  link: string;
  name: string;
};

export default defineEventHandler((): Skill[] => {
  return [
    {
      link: "https://phpunit.de/",
      name: "PHP",
    },
    {
      link: "https://typescriptlang.org/",
      name: "TypeScript",
    },
    {
      link: "https://nodejs.org/en",
      name: "Node",
    },
    {
      link: "https://expressjs.com/",
      name: "Express",
    },
    {
      link: "https://vuejs.org/",
      name: "Vue",
    },
    {
      link: "https://vitejs.dev/",
      name: "Vite",
    },
    {
      link: "https://vitest.dev/",
      name: "Vitest",
    },
    {
      link: "https://docker.com/",
      name: "Docker",
    },
    {
      link: "https://terraform.io/",
      name: "Terraform with AWS",
    },
    {
      link: "https://nuxt.com/",
      name: "Nuxt",
    },
    {
      link: "https://chat.openai.com",
      name: "ChatGPT",
    },
    {
      link: "https://laravel.com/",
      name: "Laravel",
    },
    {
      link: "https://k9scli.io/",
      name: "k9s",
    },
  ];
});
