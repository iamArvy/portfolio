<script setup lang="ts">
// import { Icon } from "@iconify/vue";
import type { ProjectsCollectionItem } from "@nuxt/content";
// import type { Project } from "~/types";
defineProps<{
  project: ProjectsCollectionItem;
}>();
// const img = useImage();
</script>
<template>
  <NuxtLink
    :aria-label="project.title + ' project link'"
    :to="project.path"
    class="group relative flex cursor-pointer flex-col gap-1 rounded-lg border border-white/10 bg-zinc-900/80 p-1 shadow-2xl shadow-zinc-950/50 backdrop-blur-sm"
  >
    <div>
      <h1>{{ project.title }}</h1>
    </div>
    <!-- <div class="flex gap-1 px-1 py-[2px]">
      <div
        class="size-2 rounded-full bg-red-500/90 transition-all duration-300 group-hover:bg-red-500/90 sm:bg-white/10"
      />
      <div
        class="size-2 rounded-full bg-yellow-500/90 transition-all duration-300 group-hover:bg-yellow-500/90 sm:bg-white/10"
      />
      <div
        class="size-2 rounded-full bg-green-500/90 transition-all duration-300 group-hover:bg-green-500/90 sm:bg-white/10"
      />
    </div>
    <div class="flex h-56 justify-center overflow-hidden rounded-lg">
      <NuxtImg
        :placeholder="img(`/projects/sample.png`)"
        width="1536"
        :alt="project.name"
        class="h-full rounded-lg object-cover transition-all duration-300 hover:scale-105"
        :src="project.image"
        :aria-label="project.name + ' project image'"
      />
    </div>
    <div class="absolute bottom-0 flex w-full justify-center">
      <div
        class="rounded-t-lg border-x border-t border-white/10 border-b-transparent px-4 py-[5px] shadow-md backdrop-blur-md sm:w-2/3"
      >
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-2">
              <span
                class="whitespace-nowrap text-sm font-semibold text-white/90 capitalize"
              >
                {{ project.name }}
              </span>
            </div>
          </div>
          <div
            class="flex items-center justify-center rounded-full border border-transparent p-1 shadow-md backdrop-blur-md transition-all duration-500 group-hover:-rotate-45 group-hover:border-white/10"
          >
            <Icon icon="heroicons:arrow-right" class="size-3 text-white" />
          </div>
        </div>
      </div>
    </div> -->
  </NuxtLink>
</template>
