import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxt/content", "shadcn-nuxt", "@nuxt/image"],
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3,
        },
        highlight: {
          theme: {
            default: "github-light",
            dark: "github-dark",
            sepia: "monokai",
          },
          langs: ["js", "ts", "html", "bash", "json"],
        },
      },
    },
  },
});
