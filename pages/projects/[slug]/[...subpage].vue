<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;
const subpage = route.params.subpage as string[];
const subPages = Array.isArray(subpage) ? subpage.join("/") : "";
const fullPath = `/projects/${slug}/${subPages}`;
const { data: page } = await useAsyncData(`project-${slug}-${fullPath}`, () => {
  return queryCollection("projectPages").path(fullPath).first();
});
useAppTitle(page.value?.title as string);
const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = ["projects", slug, ...subpage];
// Pass the toc to the stuff using states instead
</script>

<template>
  <ProjectPage :page="page" />
</template>
