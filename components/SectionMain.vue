<script setup lang="ts">
import type { Component } from "vue";

defineProps<{
  title?: string;
  description?: string;
  component?: Component;
}>();
</script>
<template>
  <!-- <section
    class="relative overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
  >
    <div class="p-4">
      <h2 class="text-center text-xl font-bold">
        <template v-if="title">{{ title }}</template>
        <slot v-else name="title" />
      </h2>
      <p>
        <template v-if="description">{{ description }}</template>
        <slot v-else name="description" />
      </p>
      <div>
        <component :is="component" v-if="component" />
        <slot v-else />
      </div>
    </div>
  </section> -->
  <section class="my-1">
    <div class="p-4 space-y-6">
      <div>
        <h2 class="text-center text-xl font-bold text-sidebar-primary">
          <template v-if="title">{{ title }}</template>
          <slot v-else name="title" />
        </h2>
        <p class="text-center">
          <template v-if="description">{{ description }}</template>
          <slot v-else name="description" />
        </p>
      </div>
      <div>
        <component :is="component" v-if="component" />
        <slot v-else />
      </div>
    </div>
  </section>
</template>
