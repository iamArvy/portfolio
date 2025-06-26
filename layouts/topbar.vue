<script setup lang="ts">
import AppContent from "~/components/app/Content.vue";
import AppHeader from "~/components/app/Header.vue";
import AppShell from "~/components/app/Shell.vue";
const breadcrumbs = useBreadcrumbs();
</script>

<template>
  <AppShell class="flex-col">
    <AppHeader :breadcrumbs="breadcrumbs" />
    <AppContent>
      <slot />
    </AppContent>
  </AppShell>
</template>
