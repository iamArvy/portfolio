<script setup lang="ts">
const { data: projects } = useAsyncData("projects", async () => {
  return queryCollection("projects").order("title", "ASC").all();
});
</script>
<template>
  <div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
    <div class="grid auto-rows-min gap-4 md:grid-cols-3">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description ?? ''"
        :href="project.url"
        class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-2"
      />
    </div>
    <NuxtLink href="" class="self-center">
      <Button>View Github <Icon name="logos:github-icon" /></Button>
    </NuxtLink>
  </div>
</template>
