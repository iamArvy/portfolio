<script setup lang="ts">
import { sectionMap } from '@/utils/sectionMap'
useAppTitle();
const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = ["profile"];
const { sections } = useContent()
definePageMeta({
  title: "Profile",
  meta: [
    {
      name: "description",
      content: "Dashboard page description",
    },
  ],
});

// useSeoMeta({
//   title: 'My Portfolio - Projects',
//   ogTitle: 'My Portfolio - Projects',
//   description: 'Showcase of my projects, skills, and experiences.',
//   ogDescription: 'Showcase of my projects, skills, and experiences.',
//   ogImage: '/og-image.png',
//   twitterCard: 'summary_large_image',
// })

</script>
<template>
  <div
    class="flex h-full flex-1 flex-col gap-4 rounded-xl lg:px-4 overflow-x-auto"
  >
    <SectionMain
      v-for="item in sections"
      :id="item.id"
      :key="item.order"
      :title="item.title"
      :description="item.description"
      :component="sectionMap[item.component]"
    />
  </div>
</template>
