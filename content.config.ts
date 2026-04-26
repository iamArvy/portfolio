import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: "page",
      source: "projects/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        rating: z.number(),
        type: z.string(),
        cover: z.string().optional(),
        stack: z.array(z.string()),
        slug: z.string(),
        gallery: z.array(z.string()).optional(),
        links: z.object({
          live: z.string().optional(),
          github: z.string().optional(),
        }),
      }),
    }),

    blogs: defineCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        date: z.string(),
        tags: z.array(z.string()),
        cover: z.string().optional(),
        excerpt: z.string(),
        readingTime: z.string(),
      }),
    }),
  },
});
