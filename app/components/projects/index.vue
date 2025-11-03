<script setup lang="ts">
import placeholder from "@/assets/images/placeholder.png";
const { projects } = useContent()
</script>
<template>
  <SectionLayout>
    <template #title>Featured Projects</template>
    <template #description>A showcase of my most impactful and polished work.</template>
    <div class="grid auto-rows-min gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="project in projects" :key="project.title"
        class="group relative flex flex-col space-y-4 rounded-sm transition-all ease-in-out duration-300 overflow-hidden">
        <NuxtImg :src="project.image" :placeholder="placeholder" :alt="project.title"
          class="w-full aspect-video object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105" />
        <div class="p-1 flex-1 space-y-3">
          <h1 class="text-primary text-xl font-bold line-clamp-2 capitalize">
            {{ project.title }}
          </h1>
          <div class="flex-wrap space-x-1">
            <Badge v-for="tag in project.tags" :key="tag"> {{ tag }} </Badge>
          </div>
          <p class="text-sm line-clamp-4 flex-1">{{ project.description }}</p>
          <div class="flex items-center space-x-2">
            <Button v-if="project.live" class="cursor-pointer" as-child>
              <NuxtLink :aria-label="project.title + ' project link'" :href="project.live" target="_blank">
                <Icon name="lucide:eye" />View
              </NuxtLink>
            </Button>

            <Button as-child>
              <NuxtLink v-if="project.repository" :aria-label="project.title + ' project link'"
                :href="project.repository" target="_blank">
                <Icon name="mingcute:code-fill" size="20px" />
                Code
              </NuxtLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>
