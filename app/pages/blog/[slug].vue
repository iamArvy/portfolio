<script setup lang="ts">
const route = useRoute();

const { data: post } = await useAsyncData(`blogs-${route.params.slug}`, () => {
  return queryCollection("blogs").where("slug", "=", route.params.slug).first();
});

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Post not found",
  });
}

// const formatDate = (d: string) =>
//   new Date(d).toLocaleDateString("en-US", {
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//   });

const { cover, description } = post.value;

useSeoMeta({
  description,
  ogDescription: description,
  ogImage: cover,
  twitterDescription: description,
  twitterImage: cover,
});
</script>

<template>
  <article v-if="post" class="py-16">
    <!-- HEADER -->
    <header class="container-px mx-auto mt-10 max-w-3xl">
      <div
        class="flex flex-wrap items-center gap-2 text-xs text-muted-foreground"
      >
        <span>{{ post.date }}</span>
        <span class="h-1 w-1 rounded-full bg-muted-foreground/50" />
        <span>{{ post.readingTime }}</span>
      </div>

      <h1
        class="mt-4 font-display text-4xl font-semibold text-gradient md:text-5xl leading-tight"
      >
        {{ post.title }}
      </h1>

      <p class="mt-5 text-lg text-muted-foreground">
        {{ post.excerpt }}
      </p>

      <div class="mt-6 flex flex-wrap gap-2">
        <span
          v-for="t in post.tags"
          :key="t"
          class="rounded-full border border-glass-border bg-glass px-3 py-1 text-xs"
        >
          {{ t }}
        </span>
      </div>
    </header>

    <!-- COVER -->
    <div
      v-if="post.cover"
      v-motion="{
        initial: { opacity: 0, y: 20 },
        visibleOnce: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }"
      class="container-px mx-auto mt-12 max-w-5xl"
    >
      <div class="overflow-hidden rounded-3xl glass-strong">
        <NuxtImg
          :src="post.cover"
          :alt="post.title"
          class="w-full object-cover"
        />
      </div>
    </div>

    <!-- CONTENT -->
    <div class="container-px mx-auto mt-16 max-w-3xl prose-portfolio">
      <ContentRenderer :value="post" />
    </div>

    <!-- FOOTER CTA -->
    <div class="container-px mx-auto mt-24 max-w-3xl">
      <NuxtLink
        to="/blog"
        class="block rounded-3xl glass p-8 text-center hover:border-gold/40 hover:shadow-glow transition-all"
      >
        <div class="text-xs font-medium uppercase tracking-[0.25em] text-gold">
          Keep reading
        </div>

        <div class="mt-2 font-display text-2xl font-semibold">
          View all posts →
        </div>
      </NuxtLink>
    </div>
  </article>
</template>
