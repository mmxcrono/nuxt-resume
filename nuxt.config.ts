// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: "123",
    public: {
      appName: "My Resume",
    },
  },
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
    url: "http://localhost:3000",
  },
});
