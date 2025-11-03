<script setup lang="ts">
const breadcrumbs = useBreadcrumbs();
</script>

<template>
  <AppShell variant="sidebar">
    <AppSidebar />
    <AppContent variant="sidebar">
      <AppSidebarHeader :breadcrumbs="breadcrumbs" />
      <div class="flex h-full flex-1 flex-col relative overflow-y-auto">
        <div class="absolute flex-1 h-full flex flex-col gap-4 p-2 w-full">
          <slot />
        </div>
      </div>
    </AppContent>
  </AppShell>
</template>
