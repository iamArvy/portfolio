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
        tags: z.array(z.string())
      }),
    }),

    stack: defineCollection({
      type: "data",
      source: "stacks/*.json",
      schema: z.object({
        name: z.string(),
        icon: z.string(),
        role: z.array(
          z.string()
        )
      })
    }),

    socials: defineCollection({
      type: "data",
      source: "social.json",
      schema: z.object({
        items: z.array(
          z.object({
            url: z.string(),
            platform: z.string(),
            icon: z.string(),
          })
        ),
      }),
    }),

    contacts: defineCollection({
      type: "data",
      source: "contact.json",
      schema: z.object({
        items: z.array(
          z.object({
            url: z.string(),
            icon: z.string(),
            text: z.string(),
          })
        ),
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
  },
});
