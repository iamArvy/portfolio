import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/icon",
    "@nuxt/content",
    "shadcn-nuxt",
    "@nuxt/image",
    "@nuxtjs/seo",
    "@vueuse/motion/nuxt",
  ],
  css: ["~/assets/css/main.css", "~/assets/css/tailwind.css"],
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
  site: {
    url: process.env.NUXT_SITE_URL,
    name: "Oluwaseyi Oke — Web Developer & Backend Engineer",
    description:
      "Portfolio of Oluwaseyi Oke — building polished, fast, and resilient web platforms with a focus on backend engineering.",
    author: "Oluwaseyi Oke",
    defaultLocale: "en",
    ogTitle: "Oluwaseyi Oke — Web Developer & Backend Engineer",
    ogDescription: "Building polished, fast, and resilient web platforms.",
    ogImage: "/og-image.png",
    twitterCard: "summary_large_image",
    themeColor: "#0a1024",
    keywords:
      "Web Development, Software Engineer, Backend Engineer, Cloud Solutions Architect, Fullstack Developer, Portfolio",
  },
});
