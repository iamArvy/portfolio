<script setup lang="ts">
// const { data: projects } = useAsyncData("projects", async () => {
//   return queryCollection("projects").order("title", "ASC").all();
// });
const { projects } = useContent()
</script>
<template>
  <div class="grid auto-rows-min gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
    <ProjectCard
      v-for="project in projects"
      :key="project.title"
      :project="project"
    />
  </div>
</template>
