<template>
  <NuxtLink
    :to="skill.url"
    target="_blank"
    class="flex flex-col items-center gap-2 font-bold rounded-full px-3 py-2 group"
  >
    <Icon
      :icon="skill.icon"
      class="text-5xl group-hover:text-inherit transition-all ease-in-out duration-200 text-primary"
      inline
    />
    <span class="text-sm text-center group-hover:text-primary">{{
      skill.name
    }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Stack } from "@/types";
import { Icon } from "@iconify/vue";
defineProps<{
  skill: Stack;
}>();
</script>
