<script setup lang="ts">
import {
  CertificationSection,
  ExperienceSection,
  StackSection,
} from "#components";

useAppTitle();
const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = [{ title: "Profile", href: "/" }];
definePageMeta({
  title: "Profile",
  meta: [
    {
      name: "description",
      content: "Dashboard page description",
    },
  ],
});

const { profile } = await useAppProfile();
const sections = [
  {
    title: "Certifications",
    component: CertificationSection,
  },
  {
    title: "Stacks",
    component: StackSection,
  },
  {
    title: "Experiences",
    component: ExperienceSection,
  },
];
</script>
<template>
  <div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
    <div class="flex flex-col lg:grid grid-cols-2">
      <div class="flex items-center gap-4">
        <NuxtImg
          :src="profile?.image"
          :alt="profile?.name"
          width="100"
          height="100"
          class="rounded-full overflow-hidden"
          placeholder
          quality="100"
          fit="cover"
        />
        <div class="flex flex-col">
          <h1 class="text-lg lg:text-3xl font-bold text-sidebar-primary">
            {{ profile?.name }}
          </h1>
          <h3 class="text-sm">
            Web Developer, Cloud Solutions Architect and DevOps Engineer
          </h3>
        </div>
      </div>
      <p class="text-sm lg:text-base p-2">{{ profile?.bio }}</p>
    </div>
    <div class="grid auto-rows-min gap-4 md:grid-cols-3">
      <SectionMain v-for="item in sections" :key="item.title">
        <template #title>{{ item.title }}</template>
        <component :is="item.component" />
      </SectionMain>
    </div>
  </div>
</template>
