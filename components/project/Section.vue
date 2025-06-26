<script setup lang="ts">
const { data: projects } = useAsyncData("projects", async () => {
  return queryCollection("projects").order("title", "ASC").all();
});
</script>
<template>
  <div class="grid auto-rows-min gap-4 md:grid-cols-2">
    <ProjectCard
      v-for="project in projects"
      :key="project.title"
      :project="project"
      class="relative overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-2"
    />
  </div>
</template>
