<script setup lang="ts">
import AppContent from "@/components/AppContent.vue";
import AppShell from "@/components/AppShell.vue";
import AppSidebar from "@/components/AppSidebar.vue";
import AppSidebarHeader from "@/components/AppSidebarHeader.vue";
import { mainNavItems, rightNavItems } from "~/data/nav";

const breadcrumbs = useBreadcrumbs();
</script>

<template>
  <AppShell variant="sidebar">
    <AppSidebar
      :main-nav-items="mainNavItems"
      :right-nav-items="rightNavItems"
    />
    <AppContent variant="sidebar">
      <AppSidebarHeader :breadcrumbs="breadcrumbs" />
      <slot />
    </AppContent>
  </AppShell>
</template>
