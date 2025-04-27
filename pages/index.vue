<script setup lang="ts">
import type { LayoutKey } from "#build/types/layouts";
import PlaceholderPattern from "../components/PlaceholderPattern.vue";

useAppTitle("Profile");
const { layout } = useLayout();
const layoutName = computed<false | LayoutKey>(() => {
  return layout.value ? (`dashboard-${layout.value}` as LayoutKey) : false;
});

const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = [{ title: "Profile", href: "/" }];
definePageMeta({
  title: "Profile",
  meta: [
    {
      name: "description",
      content: "Dashboard page description",
    },
  ],
});

const { profile } = await useAppProfile();
</script>
<template>
  <NuxtLayout :name="layoutName">
    <div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
      <!-- <div class="grid auto-rows-min gap-4 md:grid-cols-5">
        <div class="flex flex-col items-center justify-center col-span-2">
          <NuxtImg
            :src="profile?.image"
            :alt="profile?.name"
            width="100"
            height="100"
            class="rounded-full overflow-hidden"
            placeholder
            quality="100"
            fit="cover"
          />
          <div>
            <h1>{{ profile?.name }}</h1>
          </div>
        </div>
        <div
          class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border col-span-2"
        >
          <P>{{ profile?.bio }}</P>
        </div>
      </div> -->
      <div
        class="relative min-h-[100vh] flex-1 rounded-xl border border-sidebar-border/70 dark:border-sidebar-border md:min-h-min"
      >
        <PlaceholderPattern />
      </div>
    </div>
  </NuxtLayout>
</template>
