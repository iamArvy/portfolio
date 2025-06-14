<script setup lang="ts">
import type { ProjectsCollectionItem } from "@nuxt/content";
defineProps<{
  project: ProjectsCollectionItem;
}>();
</script>
<template>
  <NuxtLink
    :aria-label="project.title + ' project link'"
    :to="'/projects/' + project.title.toLowerCase().replace(/\s+/g, '-')"
    class="group relative flex cursor-pointer flex-col space-y-2 rounded-sm p-3 hover:shadow-md shadow-primary backdrop-blur-sm transition-all ease-in-out duration-300 border-2"
  >
    <h1 class="text-primary text-xl font-bold line-clamp-2">
      {{ project.title }}
    </h1>
    <p class="text-sm line-clamp-4">{{ project.description }}</p>
    <div class="flex justify-end space-x-2">
      <Button size="sm" variant="secondary">View docs</Button>
      <Button size="sm" variant="secondary">View live</Button>
    </div>
  </NuxtLink>
</template>
