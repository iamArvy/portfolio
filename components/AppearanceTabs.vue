<script setup lang="ts" generic="T extends Appearance | Layout">
// import { useLayout } from "@/composables/useLayout";
// import { useBreadcrumbs } from "@/composables/useBreadcrumbs";
// import { useAppearance } from "@/composables/useAppearance";
import type { LucideIcon } from "lucide-vue-next";
import type { Appearance, Layout } from "@/types";

interface Props {
  class?: string;
  updateValue: (value: T) => void;
  tabs?: {
    value: T;
    icon: LucideIcon;
    label: string;
  }[];
  appearance: T;
}

const { class: containerClass = "" } = defineProps<Props>();
</script>

<template>
  <div
    :class="[
      'inline-flex gap-1 rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800',
      containerClass,
    ]"
  >
    <button
      v-for="{ value, icon, label } in tabs"
      :key="value"
      :class="[
        'flex items-center rounded-md px-3.5 py-1.5 transition-colors',
        appearance === value
          ? 'bg-white shadow-xs dark:bg-neutral-700 dark:text-neutral-100'
          : 'text-neutral-500 hover:bg-neutral-200/60 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-700/60',
      ]"
      @click="updateValue(value)"
    >
      <component :is="icon" class="-ml-1 h-4 w-4" />
      <span class="ml-1.5 text-sm">{{ label }}</span>
    </button>
  </div>
</template>
