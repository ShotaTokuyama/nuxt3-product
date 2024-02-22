// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@formkit/nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
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
