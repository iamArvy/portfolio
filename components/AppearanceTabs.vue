<script setup lang="ts" generic="T extends Appearance | Layout">
// import { useLayout } from "@/composables/useLayout";
// import { useBreadcrumbs } from "@/composables/useBreadcrumbs";
// import { useAppearance } from "@/composables/useAppearance";
import type { Appearance, Layout } from "@/types";
import { Icon } from "@iconify/vue";
import { Button } from "~/components/ui/button";
interface Props {
  updateValue: (value: T) => void;
  tabs?: {
    value: T;
    icon: string;
    label: string;
  }[];
  appearance: T;
  title: string;
}

defineProps<Props>();
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <div class="inline-flex gap-2">
      <Button
        v-for="{ value, icon, label } in tabs"
        :key="value"
        class="border-primary dark:border-primary-dark"
        :class="value === appearance ? 'border' : ''"
        variant="ghost"
        @click="updateValue(value)"
      >
        <Icon :icon="icon" class="h-4 w-4" />
        {{ label }}
      </Button>
    </div>
  </div>
</template>
