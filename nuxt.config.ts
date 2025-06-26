// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "shadcn-nuxt",
    "@vee-validate/nuxt",
    "@nuxt/content",
    "@nuxt/icon",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  shadcn: {
    /**pnpm dlx shadcn-vue@latest init

     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE,
      authProvider: process.env.AUTH_PROVIDER,
      githubToken: process.env.GITHUB_TOKEN,
    },
  },
  content: {
    build: {
      markdown: {
        toc: {
          depth: 2,
          searchDepth: 2,
        },
        highlight: {
          theme: "github-light",
        },
      },
    },
  },
});