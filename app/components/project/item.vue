<script setup lang="ts">
import placeholder from "@/assets/images/placeholder.png";
import type { ProjectsCollectionItem } from "@nuxt/content";
import { ArrowRightIcon } from "lucide-vue-next";

defineProps<{ project: ProjectsCollectionItem }>();
</script>
<template>
  <div @click="navigateTo(project.path)"
    class="group relative flex flex-col space-y-2 rounded-lg transition-all ease-in-out duration-300 overflow-hidden hover:bg-accent-foreground/5 select-none cursor-pointer ">
    <NuxtImg :src="project.image" :placeholder="placeholder" :alt="project.title"
      class="w-full aspect-video object-cover rounded-lg transform transition-transform duration-300" />
    <div class="p-2 flex-1 space-y-2">
      <h1 class="text-primary font-bold line-clamp-2 capitalize">
        {{ project.title }}
      </h1>
      <p class="text-xs line-clamp-4 flex-1">{{ project.description }}</p>
      <!-- <NuxtLink :to="project.path" class="group text-sm">
        Read More
        <ArrowRightIcon class="inline-block w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
      </NuxtLink> -->
    </div>
  </div>
</template>