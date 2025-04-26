<script setup lang="ts">
import Sonner from "~/components/SonnerComponent.vue";

// import { useHead } from '#head'
// import { appName } from '~/constants'

// useHead({
//   title: appName,
// })
// import { Toaster } from "@/components/ui/sonner";

import { useHead } from "#imports";
import { getThemeInitScript } from "@/utils/theme-snippet";
useHead({
  script: [
    {
      innerHTML: getThemeInitScript(),
      tagPosition: "head", // ensures it's run before hydration
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
