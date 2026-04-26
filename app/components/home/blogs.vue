<script setup lang="ts">
const { data: featuredPosts } = await useAsyncData("featured-posts", () =>
  queryCollection("blogs").order("date", "DESC").limit(4).all(),
);
</script>
<template>
  <section class="container-px mx-auto max-w-7xl py-32">
    <SectionHeader eyebrow="Writing" title="Notes from the workshop" />

    <div class="mt-14 grid gap-6 md:grid-cols-2">
      <BlogCard
        v-for="(p, i) in featuredPosts"
        :key="p.slug"
        :post="p"
        :index="i"
      />
    </div>
  </section>
</template>
