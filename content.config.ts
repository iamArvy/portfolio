import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: "data",
      source: "projects/*.json",
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        rating: z.number(),
        repository: z.string(),
        live: z.string().optional(),
        role: z.string(),
        image: z.string(),
        tags: z.array(z.string()),
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

    profile: defineCollection({
      type: "data",
      source: "profiles/*.json",
      schema: z.object({
        bio: z.string(),
        role: z.string(),
        roleName: z.string(),
        resume: z.string(),
      }),
    }),

    blogs: defineCollection({
      type: "page",
      source: "blogs/*.md",
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
