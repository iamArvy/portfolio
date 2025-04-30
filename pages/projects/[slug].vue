<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;
const { data: project } = await useAsyncData("project", () => {
  return queryCollection("project").where("slug", "=", slug).first();
});

useAppTitle(project?.value?.name);
const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = [
  { title: "Projects", href: "projects" },
  { title: project?.value?.name as string, href: `/projects/${slug}` },
];
definePageMeta({
  title: "Profile",
  meta: [
    {
      name: "description",
      content: "Dashboard page description",
    },
  ],
});
</script>
<template>
  <div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
    <div>
      <h1 class="text-3xl font-bold">{{ project?.name }}</h1>
      <!-- <p class="text-sm lg:text-base p-2">{{ project?.value?.description }}</p> -->
    </div>
  </div>
</template>
