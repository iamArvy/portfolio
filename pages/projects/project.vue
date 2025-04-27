<script setup lang="ts">
import type { LayoutKey } from "#build/types/layouts";
import PlaceholderPattern from "~/components/PlaceholderPattern.vue";

const title = "Project";
useAppTitle(title);

const { layout } = useLayout();
const layoutName = computed<false | LayoutKey>(() => {
  return layout.value ? (`dashboard-${layout.value}` as LayoutKey) : false;
});

const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = [
  { title: title, href: "/stacks" },
  { title: title, href: "/stacks" },
];
definePageMeta({
  title: title,
  meta: [
    {
      name: "description",
      content: "Dashboard page description",
    },
  ],
});
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
