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
      appName: "The Spell",
    },
    gitToken: process.env.GIT_TOKEN,
    private: {
      // apiKey: process.env.API_KEY,
      // apiSecret: process.env.API_SECRET,
      // authProvider: process.env.AUTH_PROVIDER,
      gitToken: process.env.GIT_TOKEN,
    },
    // GitHub API configuration
    // These values should be set in your environment variables
    // github: {
    //   token: process.env.GITHUB_TOKEN,
    //   repo: process.env.GITHUB_REPO,
    //   owner: process.env.GITHUB_OWNER,
    // },
  },
});
