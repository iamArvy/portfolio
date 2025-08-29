<script setup lang="ts">
import type { ProjectsCollectionItem } from "@nuxt/content";

defineProps<{
  project: ProjectsCollectionItem;
}>();
</script>
<template>
  <div
    class="group relative flex flex-col space-y-1 rounded-sm transition-all ease-in-out duration-300 overflow-hidden"
  >
    <NuxtImg :src="project.image" placeholder="/images/projects/sample.png" :alt="project.title" class="w-full aspect-video object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105" />
    <div class="p-1 flex-1 space-y-1">
      <h1 class="text-primary text-xl font-bold line-clamp-2 capitalize">
        {{ project.title }}
      </h1>
      <p class="text-sm line-clamp-4 flex-1">{{ project.description }}</p>
    </div>
    <div class="flex items-center justify-end space-x-2 px-2">
        <NuxtLink
          v-if="project.live"
          :aria-label="project.title + ' project link'"
          :href="project.live"
          target="_blank"
        >
          <Button clas="cursor-pointer"><Icon name="lucide:eye" />View</Button>
        </NuxtLink>
        
          <Button class="cursor-pointer" as-child>
            <NuxtLink
              v-if="project.repository"
              :class="!project.live ? 'ml-2' : ''"
              :aria-label="project.title + ' project link'"
              :href="project.repository"
              target="_blank"
            >
            <Icon name="mingcute:code-fill" size="20px" />
            Code
            </NuxtLink>
          </Button>
        
      </div>
  </div>
</template>
