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
        role: z.string(),
        image: z.string(),
        tags: z.array(z.string()),
        slug: z.string()
      }),
    }),

    stack: defineCollection({
      type: "data",
      source: "stacks/*.json",
      schema: z.object({
        name: z.string(),
        icon: z.string(),
        role: z.array(z.string()),
      }),
    }),

    roles: defineCollection({
      type: "data",
      source: "roles.json",
      schema: z.object({
        items: z.array(
          z.object({
            title: z.string(),
            value: z.string(),
          })
        ),
      }),
    }),

    blogs: defineCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        publishedAt: z.string(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
      }),
    }),
  },
});
