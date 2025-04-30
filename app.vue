<script setup lang="ts">
import { useHead } from "#imports";
import type { LayoutKey } from "#build/types/layouts";

useHead({
  script: [
    {
      innerHTML: getThemeInitScript(),
      tagPosition: "head",
    },
  ],
});
const { layout } = useAppConfig();
</script>
<template>
  <NuxtLayout :name="layout as LayoutKey">
    <NuxtPage />
  </NuxtLayout>
</template>
