<script setup lang="ts">
import type { ProjectsCollectionItem } from "@nuxt/content";

defineProps<{
  project: ProjectsCollectionItem;
}>();
</script>
<template>
  <div
    class="group relative flex cursor-pointer flex-col space-y-1 rounded-sm p-3 hover:shadow-sm shadow-primary backdrop-blur-sm transition-all ease-in-out duration-300 border-1"
  >
    <div class="flex-1 space-y-1">
      <h1 class="text-primary text-xl font-bold line-clamp-2 capitalize">
        {{ project.title }}
      </h1>
      <p class="text-sm line-clamp-4">{{ project.description }}</p>
      <div class="flex flex-wrap space-x-1 space-y-1">
        <ProjectTag v-for="tag in project.tags" :key="tag">
          {{ tag }}
        </ProjectTag>
      </div>
    </div>
    <NuxtLink
      :aria-label="project.title + ' project link'"
      :href="project.url"
      class="self-end"
      target="_blank"
    >
      <Button>View</Button>
    </NuxtLink>
  </div>
</template>
