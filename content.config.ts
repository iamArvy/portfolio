import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: "data",
      source: "projects/**.json",
      schema: z.object({
        name: z.string(),
        image: z.string(),
        repository: z.string(),
        live: z.string(),
      }),
    }),
    stacks: defineCollection({
      type: "data",
      source: "stacks/**.json",
      schema: z.object({
        name: z.string(),
        image: z.string(),
        repository: z.string(),
        live: z.string(),
      }),
    }),
    jobs: defineCollection({
      type: "data",
      source: "jobs/**.json",
      schema: z.object({
        name: z.string(),
        image: z.string(),
        repository: z.string(),
        live: z.string(),
      }),
    }),
    profile: defineCollection({
      type: "data",
      source: "profile.json",
      schema: z.object({
        name: z.string(),
        image: z.string(),
        bio: z.string(),
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
