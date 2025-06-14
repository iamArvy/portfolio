<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps<{
  href: string;
  title: string;
  direction: "prev" | "next";
}>();
</script>
<template>
  <NuxtLink :href>
    <Button variant="secondary" class="cursor-pointer group" size="lg">
      <Icon
        v-if="direction === 'prev'"
        icon="mingcute:arrow-left-fill"
        class="group-hover:rotate-10 transition-transform duration-300"
      />
      {{ title }}
      <Icon
        v-if="direction === 'next'"
        icon="mingcute:arrow-right-fill"
        class="group-hover:-rotate-10 transition-transform duration-300"
      />
    </Button>
  </NuxtLink>
</template>
