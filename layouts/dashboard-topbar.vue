<script setup lang="ts">
import AppContent from "@/components/AppContent.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppShell from "@/components/AppShell.vue";
import { mainNavItems, rightNavItems } from "~/data/nav";

const breadcrumbs = useBreadcrumbs();
</script>

<template>
  <AppShell class="flex-col">
    <AppHeader
      :breadcrumbs="breadcrumbs"
      :main-nav-items="mainNavItems"
      :right-nav-items="rightNavItems"
    />
    <AppContent>
      <slot />
    </AppContent>
  </AppShell>
</template>
