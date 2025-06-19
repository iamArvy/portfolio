<script setup lang="ts">
defineProps<{
  href: string;
  title: string;
  description: string;
}>();
</script>
<template>
  <div
    class="group relative flex cursor-pointer flex-col space-y-2 rounded-sm p-3 hover:shadow-sm shadow-primary backdrop-blur-sm transition-all ease-in-out duration-300 border-1"
  >
    <div class="flex-1">
      <h1 class="text-primary text-xl font-bold line-clamp-2 capitalize">
        {{ title }}
      </h1>
      <p class="text-sm line-clamp-4">{{ description }}</p>
    </div>
    <NuxtLink
      :aria-label="title + ' project link'"
      :href
      class="self-end"
      :target="href.startsWith('http') ? '_blank' : '_self'"
    >
      <Button>View</Button>
    </NuxtLink>
  </div>
</template>
