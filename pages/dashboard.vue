<script setup lang="ts">
import type { LayoutKey } from "#build/types/layouts";
import PlaceholderPattern from "../components/PlaceholderPattern.vue";
useAppTitle("Dashboard");
const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = [{ title: "Dashboard", href: "/dashboard" }];
definePageMeta({
  title: "Dashboard",
  meta: [
    {
      name: "description",
      content: "Dashboard page description",
    },
  ],
  // layout: `dashboard-sidebar`,
  middleware: ["auth"],
});

const { layout } = useLayout();
const layoutName = computed<false | LayoutKey>(() => {
  return layout.value ? (`dashboard-${layout.value}` as LayoutKey) : false;
});

// const { data: health } = useAPI('auth', '/health')
</script>

<template>
  <NuxtLayout :name="layoutName">
    <div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
      <div class="grid auto-rows-min gap-4 md:grid-cols-3">
        <div
          class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
        >
          <PlaceholderPattern />
        </div>
        <div
          class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
        >
          <PlaceholderPattern />
        </div>
        <div
          class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
        >
          <PlaceholderPattern />
        </div>
      </div>
      <div
        class="relative min-h-[100vh] flex-1 rounded-xl border border-sidebar-border/70 dark:border-sidebar-border md:min-h-min"
      >
        <PlaceholderPattern />
      </div>
    </div>
  </NuxtLayout>
</template>
