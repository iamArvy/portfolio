import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    project: defineCollection({
      type: "data",
      source: "projects/**.json",
      schema: z.object({
        name: z.string(),
        image: z.string(),
        description: z.string(),
        release: z.string(),
        slug: z.string(),
        tags: z.array(z.string()),
        job: z.string(),
        repository: z.string(),
        live: z.string(),
        content: z.string(),
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
