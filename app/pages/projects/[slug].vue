<script setup lang="ts">
const { params, path } = useRoute();
const slug = params.slug as string;
const { data: project } = await useAsyncData(`project-${slug}`, () => {
  return queryCollection("projects").path(path).first();
});
if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: "Project not found" });
}
const breadcrumbs = useBreadcrumbs();
onMounted(() => {
  breadcrumbs.value = [
    {
      title: `Projects`,
      href: "/projects",
    },
    {
      title: project.value?.title ?? "",
    },
  ];
});
</script>
<template>
  <PageRenderer v-if="project" :page="project" />
</template>
