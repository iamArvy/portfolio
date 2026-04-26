<script setup lang="ts">
import placeholder from "@/assets/images/placeholder.png";

interface Project {
  slug: string;
  cover?: string;
  title: string;
  description: string;
  type: string;
  stack: string[];
}

const props = defineProps<{
  project: Project;
  index?: number;
}>();

const delay = (props.index ?? 0) * 60; // convert 0.06s → ms
</script>

<template>
  <div
    v-motion="{
      initial: { opacity: 0, y: 30 },
      visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 600,
          delay,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    }"
  >
    <NuxtLink
      :to="`/projects/${project.slug}`"
      class="group relative block overflow-hidden rounded-3xl glass transition-all duration-500 hover:border-gold/30 hover:-translate-y-1 hover:shadow-elevated"
    >
      <!-- Image -->
      <div class="aspect-16/10 overflow-hidden">
        <NuxtImg
          :src="project.cover"
          :alt="project.title"
          :placeholder="placeholder"
          loading="lazy"
          width="1280"
          height="800"
          class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          class="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent"
        />
      </div>

      <div class="relative -mt-20 p-7">
        <div
          class="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gold"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-gold animate-glow" />
          {{ project.type }}
        </div>

        <h3
          class="mt-3 font-display text-2xl font-semibold text-foreground transition-colors group-hover:text-gold"
        >
          {{ project.title }}
        </h3>

        <p class="mt-2 text-sm text-muted-foreground line-clamp-2">
          {{ project.description }}
        </p>

        <!-- Stack -->
        <div class="mt-5 flex flex-wrap gap-1.5">
          <span
            v-for="s in project.stack.slice(0, 4)"
            :key="s"
            class="rounded-full border border-glass-border bg-glass px-2.5 py-1 text-xs text-foreground/80"
          >
            {{ s }}
          </span>
        </div>

        <!-- CTA -->
        <div
          class="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/90 transition-all group-hover:text-gold group-hover:gap-3"
        >
          View case study
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M5 12h14M13 5l7 7-7 7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
