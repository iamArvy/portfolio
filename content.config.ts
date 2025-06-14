import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: "data",
      source: "projects/*/index.json",
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        release: z.number().optional(),
        live: z.string().optional(),
        path: z.string(),
      }),
    }),

    projectPages: defineCollection({
      type: "page",
      source: "projects/**/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        project: z.string(),
        order: z.number(),
      }),
    }),

    stack: defineCollection({
      type: "data",
      source: "stack.json",
      schema: z.object({
        items: z.array(
          z.object({
            name: z.string(),
            icon: z.string(),
          })
        ),
      }),
    }),

    experience: defineCollection({
      type: "data",
      source: "experiences/**.json",
      schema: z.object({
        role: z.string(),
        location: z.string(),
        description: z.array(z.string()),
        date: z.string(),
      }),
    }),

    certification: defineCollection({
      type: "data",
      source: "certifications/**.json",
      schema: z.object({
        name: z.string(),
        date: z.string(),
        file: z.string(),
        location: z.string(),
        location_url: z.string(),
        description: z.string(),
      }),
    }),

    profile: defineCollection({
      type: "data",
      source: "profile.json",
      schema: z.object({
        name: z.string(),
        image: z.string(),
        bio: z.string(),
        job: z.string(),
        socials: z.array(
          z.object({
            url: z.string(),
            platform: z.string(),
            icon: z.string(),
          })
        ),
        contacts: z.array(
          z.object({
            url: z.string(),
            icon: z.string(),
            text: z.string(),
          })
        ),
      }),
    }),
  },
});
