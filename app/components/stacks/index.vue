<script setup lang="ts">
import type { Stack } from "~/interfaces";

defineProps<{
  stacks?: Stack[];
}>();
</script>
<template>
  <SectionLayout>
    <template #title>Tech Stack</template>
    <template #description>Tools, languages, and frameworks I use.</template>
    <div class="flex flex-wrap gap-4 justify-center my-4">
      <div
        v-for="item in stacks"
        :key="item.name"
        class="flex flex-col items-center gap-2 font-bold rounded-full px-3 py-2 group cursor-pointer"
      >
        <Icon
          :name="item.icon"
          class="text-xl group-hover:text-inherit transition-all ease-in-out duration-200 text-primary"
          inline
        />
        <span
          class="text-sm text-center group-hover:text-sidebar-primary transition-all .3s ease-in-out duration-200"
          >{{ item.name }}</span
        >
      </div>
    </div>
  </SectionLayout>
</template>
