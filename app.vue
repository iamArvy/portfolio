<script setup lang="ts">
import { useHead } from "#imports";
import { getLayoutInitScript } from "@/utils/theme-snippet";
import type { LayoutKey } from "#build/types/layouts";

useHead({
  script: [
    // {
    //   innerHTML: getThemeInitScript(),
    //   tagPosition: "head",
    // },
    {
      innerHTML: getLayoutInitScript(),
      tagPosition: "head",
    },
  ],
});

const { layout, initializeLayout } = useLayout();

onMounted(() => {
  initializeLayout();
});

const layoutName = computed<false | LayoutKey>(() => {
  return layout.value ? (`dashboard-${layout.value}` as LayoutKey) : false;
});
</script>
<template>
  <SonnerComponent />
  <NuxtLayout :name="layoutName">
    <NuxtPage />
  </NuxtLayout>
</template>
