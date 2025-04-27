<script setup lang="ts">
import Sonner from "~/components/SonnerComponent.vue";
import { useHead } from "#imports";
import { getThemeInitScript } from "@/utils/theme-snippet";
useHead({
  script: [
    {
      innerHTML: getThemeInitScript(),
      tagPosition: "head",
    },
  ],
});
</script>
<template>
  <Sonner />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
