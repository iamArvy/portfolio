<script setup lang="ts">
import { useHead } from "#imports";
import { getThemeInitScript } from "@/utils/theme-snippet";
import type { LayoutKey } from "#build/types/layouts";

useHead({
  script: [
    {
      innerHTML: getThemeInitScript(),
      tagPosition: "head",
    },
  ],
});
const { layout } = useLayout();
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
