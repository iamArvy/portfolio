<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;
const subpage = route.params.subpage as string[];
const subPages = Array.isArray(subpage) ? subpage.join("/") : "";
const fullPath = `/projects/${slug}/${subPages}`;
const { data: page } = await useAsyncData(`project-${slug}-${fullPath}`, () => {
  return queryCollection("projectPages").path(fullPath).first();
});
const { data: pages } = await useAsyncData(`project-${slug}-pages`, () => {
  return queryCollection("projectPages")
    .where("project", "=", slug)
    .order("order", "ASC")
    .all();
});

const navigation = useProjectNavigation();
navigation.value = pages.value ?? undefined;
const currentIndex = computed(() =>
  pages.value?.findIndex((p) => p.path === fullPath)
);

const prevPage = computed(() =>
  currentIndex.value !== undefined && currentIndex.value > 0
    ? pages.value?.[currentIndex.value - 1]
    : null
);

const nextPage = computed(() =>
  currentIndex.value !== undefined &&
  currentIndex.value < (pages.value?.length ?? 0) - 1
    ? pages.value?.[currentIndex.value + 1]
    : null
);
useAppTitle(page.value?.title as string);
const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = ["projects", slug, ...subpage];

onMounted(() => {
  console.log(pages.value);
  console.log(currentIndex);
  console.log(prevPage);
  console.log(nextPage);
});
// Pass the toc to the stuff using states instead
</script>

<template>
  <ProjectPage :page="page" />
</template>
