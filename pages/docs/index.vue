<script setup lang="ts">
const title = "Projects";
useAppTitle(title);
const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = ["docs"];
const { data: docs } = useAsyncData("docs", async () => {
  return queryCollection("docs")
    .where("order", "=", 1)
    .order("title", "ASC")
    .all();
});

const { setPages } = useProjectNavigation();

onMounted(() => {
  setPages();
});
</script>
<template>
  <div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
    <div class="grid auto-rows-min gap-4 md:grid-cols-3">
      <ProjectCard
        v-for="doc in docs"
        :key="doc.title"
        :title="doc.project"
        :description="doc.description ?? ''"
        :href="doc.path"
        class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-2"
      />
    </div>
  </div>
</template>
