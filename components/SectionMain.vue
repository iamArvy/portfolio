<template>
  <div
    class="relative overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
  >
    <div class="p-4">
      <h2 class="text-center text-xl font-bold"><slot name="title" /></h2>
      <slot />
    </div>
  </div>
</template>
