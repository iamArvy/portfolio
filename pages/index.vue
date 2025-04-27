<script setup lang="ts">
import type { LayoutKey } from "#build/types/layouts";
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
// const stack = await queryCollection("stacks");
const { data: stacks } = await useAsyncData("stacks", () => {
  return queryCollection("stacks").order("name", "ASC").all();
});
</script>
<template>
  <NuxtLayout :name="layoutName">
    <div
      class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto"
    >
      <div class="flex flex-col lg:grid grid-cols-2">
        <div class="flex items-center gap-4">
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
          <div class="flex flex-col">
            <h1 class="text-lg lgtext-3xl font-bold">{{ profile?.name }}</h1>
            <h3 class="text-sm text-neutral">
              Web Developer, Cloud Solutions Architect and DevOps Engineer
            </h3>
            <!-- <div class="flex gap-2 mt-2">
              <Button>Web Resume</Button>
              <Button>Cloud Resume</Button>
              <Button>DevOps Resume</Button>
            </div> -->
          </div>
        </div>
        <p class="text-sm lg:text-base p-2 italic">{{ profile?.bio }}</p>
        <div class="col-span-2 my-3 lg:m-8">
          <h2 class="text-center text-xl font-bold">Stacks</h2>
          <div class="flex flex-wrap gap-4 justify-center my-4">
            <StackComponent
              v-for="item in stacks"
              :key="item.name"
              :skill="item"
            />
          </div>
        </div>
      </div>
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
    </div>
  </NuxtLayout>
</template>
