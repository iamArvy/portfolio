<script setup lang="ts">
import { ProfileSection, ProjectSection, StackSection } from "#components";
useAppTitle();
const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = ["profile"];
definePageMeta({
  title: "Profile",
  meta: [
    {
      name: "description",
      content: "Dashboard page description",
    },
  ],
});

const sections = [
  {
    id: "profile",
    component: ProfileSection,
  },
  {
    id: "stacks",
    title: "Tech Stack",
    description: "Tools, languages, and frameworks I use.",
    component: StackSection,
  },
  {
    id: "projects",
    title: "Featured Projects",
    description: "A showcase of my most impactful and polished work.",
    component: ProjectSection,
  },
];

</script>
<template>
  <div
    class="flex h-full flex-1 flex-col gap-4 rounded-xl px-4 overflow-x-auto"
  >
    <SectionMain
      v-for="item in sections"
      :id="item.id"
      :key="item.title"
      :title="item.title"
      :description="item.description"
      :component="item.component"
    />
  </div>
</template>
