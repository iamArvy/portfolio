<script setup lang="ts">
defineProps<{
  item: {
    url: string;
    icon: string;
    label: string;
    value: string;
  };
}>();
</script>
<template>
  <Card
    class="gap-1 text-center hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-in px-3">
    <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center mx-auto">
      <Icon :name="item.icon" mode="svg" class="w-5 h-5 text-primary-foreground" />
    </div>
    <h3 class="font-semibold">{{ item.label }}</h3>
    <NuxtLink :href="item.url"
      class="text-sm text-muted-foreground hover:text-primary transition-colors w-1/1 text-ellipsis overflow-hidden">
      {{ item.value }}
    </NuxtLink>
  </Card>
</template>