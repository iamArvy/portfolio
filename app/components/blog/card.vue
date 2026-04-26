<script setup lang="ts">
import placeholder from "@/assets/images/placeholder.png";

interface BlogPost {
  slug: string;
  cover?: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags?: string[];
}

const props = defineProps<{
  post: BlogPost;
  index?: number;
}>();

const delay = (props.index ?? 0) * 60;
</script>

<template>
  <div
    v-motion="{
      initial: { opacity: 0, y: 24 },
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
      :to="`/blog/${props.post.slug}`"
      class="group relative flex h-full flex-col overflow-hidden rounded-3xl glass transition-all duration-500 hover:border-gold/30 hover:-translate-y-1"
    >
      <div class="aspect-[16/9] overflow-hidden">
        <NuxtImg
          :src="post.cover ?? ''"
          :alt="props.post.title"
          :placeholder="placeholder"
          loading="lazy"
          width="1280"
          height="720"
          class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <!-- Content -->
      <div class="flex flex-1 flex-col p-6">
        <div
          class="flex flex-wrap items-center gap-2 text-xs text-muted-foreground"
        >
          <span>{{ post.date }}</span>
          <span class="h-1 w-1 rounded-full bg-muted-foreground/50" />
          <span>{{ props.post.readingTime }}</span>
        </div>

        <h3
          class="mt-3 font-display text-xl font-semibold text-foreground transition-colors group-hover:text-gold"
        >
          {{ props.post.title }}
        </h3>

        <p class="mt-2 text-sm text-muted-foreground line-clamp-2">
          {{ props.post.excerpt }}
        </p>

        <!-- Tags -->
        <div class="mt-auto pt-5 flex flex-wrap gap-1.5">
          <span
            v-for="t in props.post.tags"
            :key="t"
            class="rounded-full border border-glass-border px-2.5 py-1 text-xs text-foreground/80"
          >
            {{ t }}
          </span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
