<script setup lang="ts">
const title = "Projects";
useAppTitle(title);

const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = [{ title: title, href: "/projects" }];
definePageMeta({
  title: title,
  meta: [
    {
      name: "description",
      content: "Dashboard page description",
    },
  ],
});

const { data: projects } = await useAsyncData("project", () => {
  return queryCollection("project").order("name", "ASC").all();
});
</script>
<template>
  <div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
    <div class="grid auto-rows-min gap-4 md:grid-cols-3">
      <div
        v-for="project in projects"
        :key="project.name"
        class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-2"
      >
        <h1 class="font-bold text-md">{{ project.name }}</h1>
        <p>{{ project.description }}</p>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>
