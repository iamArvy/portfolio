<script setup lang="ts">
import placeholder from "@/assets/images/placeholder.png";
import type { ProjectsCollectionItem } from "@nuxt/content";

defineProps<{ project: ProjectsCollectionItem }>();
</script>
<template>
  <Card @click="navigateTo(project.path)"
    class="group py-0 overflow-hidden transition-all duration-300 group animate-fade-in cursor-pointer gap-0">
    <NuxtImg :src="project.image" :placeholder="placeholder" :alt="project.title"
      class="w-full group-hover:scale-110 aspect-video object-cover rounded-lg transform transition-transform duration-300" />
    <div class="p-4 flex-1 space-y-2">
      <h1 class="text-primary font-bold line-clamp-2 capitalize">
        {{ project.title }}
      </h1>
      <p class="text-sm line-clamp-4 flex-1">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2">
        <Icon v-for="item in project.technologies" :name="item.icon" mode="svg" class="w-4 h-4" />
      </div>
    </div>
  </Card>
</template>