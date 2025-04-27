<script setup lang="ts">
import AppContent from "@/components/AppContent.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppShell from "@/components/AppShell.vue";
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
