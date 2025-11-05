<script setup lang="ts">
import placeholder from "@/assets/images/placeholder.png";
import type { ProjectsCollectionItem } from "@nuxt/content";
import { ArrowRightIcon } from "lucide-vue-next";
// import type { Project } from "~/interfaces";

defineProps<{ project: ProjectsCollectionItem }>();
</script>
<template>
  <div
    class="group relative flex flex-col space-y-4 rounded-sm transition-all ease-in-out duration-300 overflow-hidden">
    <NuxtImg :src="project.image" :placeholder="placeholder" :alt="project.title"
      class="w-full aspect-video object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-102" />
    <div class="p-1 flex-1 space-y-3">
      <h1 class="text-primary text-xl font-bold line-clamp-2 capitalize">
        {{ project.title }}
      </h1>
      <div class="flex-wrap space-x-1">
        <Badge v-for="tag in project.tags" :key="tag"> {{ tag }} </Badge>
      </div>
      <p class="text-sm line-clamp-4 flex-1">{{ project.description }}</p>
      <NuxtLink :to="project.path" class="group">
        Read More
        <ArrowRightIcon class="inline-block w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
      </NuxtLink>
    </div>
  </div>
</template>