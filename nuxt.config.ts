// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@formkit/nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  colorMode: {
    preference: "dark", // default theme
    dataValue: "theme", // activate data-theme in <html> tag
    classSuffix: "",
  },
  experimental: {
    viewTransition: true,
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
});
