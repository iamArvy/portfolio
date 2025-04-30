<script setup lang="ts">
import { useHead } from "#imports";
// import { getLayoutInitScript } from "@/utils/theme-snippet";
import type { LayoutKey } from "#build/types/layouts";

useHead({
  script: [
    {
      innerHTML: getThemeInitScript(),
      tagPosition: "head",
    },
  ],
});

// const { layout, initializeLayout } = useLayout();

// onMounted(() => {
//   initializeLayout();
// });

// const layoutName = computed<false | LayoutKey>(() => {
//   return layout.value ? (`dashboard-${layout.value}` as LayoutKey) : false;
// });

const { layout } = useAppConfig();
</script>
<template>
  <SonnerComponent />
  <NuxtLayout :name="layout as LayoutKey">
    <NuxtPage />
  </NuxtLayout>
</template>
