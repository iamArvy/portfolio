<script setup lang="ts">
import { contact } from "~/constants";

const getMotion = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  visibleOnce: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 500,
      delay: i * 60,
    },
  },
});
</script>

<template>
  <section class="container-px mx-auto max-w-7xl py-32">
    <SectionHeader
      eyebrow="Get in touch"
      title="Let's build something worth shipping"
      description="The best way to reach me is email — but I'm everywhere below."
    />

    <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="(c, i) in contact"
        :key="c.label"
        :href="c.url"
        :target="c.url.startsWith('http') ? '_blank' : undefined"
        rel="noreferrer"
        v-motion="getMotion(i)"
        class="group relative flex items-center gap-4 rounded-2xl glass p-5 transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow"
      >
        <div
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all group-hover:bg-gold group-hover:text-primary-foreground"
        >
          <Icon :name="c.icon" class="w-18 h-18" />
        </div>

        <div class="min-w-0 flex-1">
          <div
            class="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            {{ c.label }}
          </div>
          <div class="mt-1 truncate text-sm font-medium text-foreground">
            {{ c.value }}
          </div>
        </div>

        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class="text-muted-foreground transition-all group-hover:text-gold group-hover:translate-x-1"
        >
          <path
            d="M7 17L17 7M17 7H8M17 7v9"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </NuxtLink>
    </div>
  </section>
</template>
