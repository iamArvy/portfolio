<script setup lang="ts">
const { data: featuredProjects } = await useAsyncData("featured-projects", () =>
  queryCollection("projects").order("rating", "DESC").limit(3).all(),
);
</script>
<template>
  <section class="container-px mx-auto max-w-7xl py-32">
    <SectionHeader
      eyebrow="Selected work"
      title="Projects shipped with intention"
    />

    <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        v-for="(p, i) in featuredProjects"
        :key="p.path"
        :project="p"
        :index="i"
      />
    </div>
  </section>
</template>
