<script setup lang="ts">
import type { UseSeoMetaInput } from "@unhead/vue";
import { meta } from "./constants/seo";

useHead({
  script: [
    {
      innerHTML: getThemeInitScript(),
      tagPosition: "head",
    },
  ],
});
useSeoMeta(meta as UseSeoMetaInput);
</script>
<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
