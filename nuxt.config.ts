// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  vite: {
    vue: {
      customElement: true,
    },
    vueJsx: {
      mergeProps: true,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/robots", "nuxt-simple-sitemap"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  site: {
    url: "https://mmxcrono.github.io/",
  },
  ssr: true,
  experimental: {
    payloadExtraction: true,
  },
});
