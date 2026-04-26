<script setup lang="ts">
import { ref, computed } from "vue";

const { data: posts } = await useAsyncData("posts", () =>
  queryCollection("blogs").order("date", "DESC").all(),
);

const allTags = computed(() => {
  if (!posts.value) return [];

  return [...new Set(posts.value.flatMap((post) => post.tags || []))].sort();
});

const query = ref("");
const activeTag = ref<string | "All">("All");

const tags = ["All", ...allTags.value];

const filtered = computed(() => {
  if (!posts.value) return [];

  return posts.value.filter((p) => {
    if (activeTag.value !== "All" && !p.tags.includes(activeTag.value)) {
      return false;
    }

    if (query.value) {
      const haystack =
        `${p.title} ${p.excerpt} ${p.tags.join(" ")}`.toLowerCase();

      if (!haystack.includes(query.value.toLowerCase())) return false;
    }

    return true;
  });
});

const description =
  "Essays on engineering, design, and the calm discipline of shipping.";
useSeoMeta({
  description,
  ogDescription: description,
  twitterDescription: description,
});
</script>

<template>
  <div class="container-px mx-auto max-w-7xl py-16 md:py-24" v-if="posts">
    <SectionHeader
      eyebrow="Writing"
      title="Notes from the workshop"
      description="Thoughts on shipping, systems, and the craft of building software people actually enjoy using."
    />

    <!-- Filters -->
    <div class="mt-12 space-y-5">
      <div class="relative">

        <svg
          class="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.35-4.35" stroke-linecap="round" />
        </svg>

        <input
          v-model="query"
          placeholder="Search posts..."
          class="w-full rounded-full glass-strong py-4 pl-14 pr-5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:shadow-glow"
        />
      </div>

      <!-- Tags -->
      <div class="flex flex-wrap items-center gap-2">
        <span
          class="mr-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
        >
          Tags
        </span>

        <button
          v-for="t in tags"
          :key="t"
          @click="activeTag = t"
          class="rounded-full px-3.5 py-1.5 text-xs font-medium transition-all"
          :class="
            activeTag === t
              ? 'bg-gold text-primary-foreground shadow-glow'
              : 'glass text-foreground/80 hover:border-gold/30 hover:text-foreground'
          "
        >
          {{ t }}
        </button>
      </div>
    </div>

    <!-- Results -->
    <div class="mt-12">
      <div class="mb-6 text-sm text-muted-foreground">
        Showing
        <span class="text-foreground font-medium">{{ filtered.length }}</span>
        of {{ posts.length }} posts
      </div>

      <div
        v-if="filtered.length === 0"
        class="rounded-3xl glass p-16 text-center"
      >
        <div class="font-display text-xl text-foreground">
          No posts match those filters
        </div>
      </div>

      <div v-else class="grid gap-6 md:grid-cols-2">
        <BlogCard
          v-for="(p, i) in filtered"
          :key="p.slug"
          :post="p"
          :index="i"
        />
      </div>
    </div>
  </div>
</template>
