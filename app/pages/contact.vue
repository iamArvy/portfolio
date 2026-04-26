<script setup lang="ts">
import { contact, profile } from "~/constants";

useSeoMeta({
  description: "Get in touch — email, phone, GitHub, LinkedIn, Twitter.",
  ogDescription: "Contact — Oluwaseyi Oke",
});
</script>

<template>
  <div class="container-px mx-auto max-w-7xl py-16 md:py-24">
    <!-- HEADER -->
    <SectionHeader
      eyebrow="Get in touch"
      title="Let's build something worth shipping"
      description="The fastest path to me is email — but I'm equally reachable via the channels below. I read everything."
      align="center"
    />

    <!-- CHANNELS -->
    <div class="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="(c, i) in contact"
        :key="c.label"
        :href="c.url"
        :target="c.url.startsWith('http') ? '_blank' : undefined"
        rel="noreferrer"
        v-motion="{
          initial: { opacity: 0, y: 24 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 600,
              delay: i * 70,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        }"
        class="group relative block overflow-hidden rounded-3xl glass p-7 transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-elevated"
      >
        <div class="flex items-start justify-between">
          <!-- ICON -->
          <div
            class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold transition-all group-hover:bg-gold group-hover:text-primary-foreground"
          >
            <Icon :name="c.icon" />
          </div>

          <!-- ARROW -->
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="text-muted-foreground transition-all group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            <path
              d="M7 17L17 7M17 7H8M17 7v9"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div
          class="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
        >
          {{ c.label }}
        </div>

        <div
          class="mt-1 font-display text-xl font-semibold text-foreground group-hover:text-gold"
        >
          {{ c.value }}
        </div>

        <p class="mt-3 text-sm text-muted-foreground">
          {{ c.desc }}
        </p>

        <div
          class="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gold/0 blur-3xl transition-all duration-500 group-hover:bg-gold/20"
        />
      </NuxtLink>
    </div>

    <!-- CTA SECTION -->
    <div
      v-motion="{
        initial: { opacity: 0, y: 30 },
        visibleOnce: {
          opacity: 1,
          y: 0,
          transition: { duration: 700 },
        },
      }"
      class="mt-20 overflow-hidden rounded-3xl glass-strong p-12 text-center md:p-16"
    >
      <div class="text-xs font-medium uppercase tracking-[0.25em] text-gold">
        Currently
      </div>

      <h3
        class="mt-4 font-display text-3xl font-semibold text-gradient md:text-4xl"
      >
        Open to select engineering work
      </h3>

      <p class="mx-auto mt-5 max-w-xl text-muted-foreground">
        I take on a small number of engagements each quarter — usually involving
        backend systems, API design, or full-stack product work where craft
        matters.
      </p>

      <NuxtLink
        :href="`mailto:${profile.email}`"
        class="mt-8 inline-flex items-center gap-2 rounded-full bg-linear-to-br from-gold to-gold-soft px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
      >
        Start a conversation
      </NuxtLink>
    </div>
  </div>
</template>
