<script setup lang="ts">
import placeholder from "@/assets/images/placeholder.png";
import type { ProjectsCollectionItem } from "@nuxt/content";
import { ArrowRightIcon } from "lucide-vue-next";

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
      <div class="flex flex-wrap gap-1">
        <Badge v-for="tech in project.tags" :key="tech" :text="tech">
          {{ tech }}
        </Badge>
      </div>
    </div>
  </Card>
  <!-- <div @click="navigateTo(project.path)"
    class="group relative flex flex-col space-y-2 rounded-lg transition-all ease-in-out duration-300 overflow-hidden hover:bg-accent-foreground/5 select-none cursor-pointer ">
    <NuxtImg :src="project.image" :placeholder="placeholder" :alt="project.title"
      class="w-full aspect-video object-cover rounded-lg transform transition-transform duration-300" />
    <div class="p-2 flex-1 space-y-2">
      <h1 class="text-primary font-bold line-clamp-2 capitalize">
        {{ project.title }}
      </h1>
      <p class="text-sm line-clamp-4 flex-1">{{ project.description }}</p>
      <div class="flex flex-wrap">
        <Badge v-for="tech in project.tags" :key="tech" :text="tech" class="mr-2 mb-2">
          {{ tech }}
        </Badge>
      </div>
    </div>
  </div> -->
  <!-- Make the tags tech instead and show just the icon then add a contact section in the home page -->
</template>