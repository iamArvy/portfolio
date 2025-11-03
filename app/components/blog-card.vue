<script setup lang="ts">
import { Calendar } from 'lucide-vue-next';
import type { Post } from '~/interfaces';
import placeholder from '~/assets/images/placeholder.png';
defineProps<Post>()
</script>
<template>
  <Card class="py-0 overflow-hidden transition-all duration-300 group animate-fade-in cursor-pointer"
    @click="navigateTo(`/blog/${slug}`)">
    <div class="relative overflow-hidden aspect-video">
      <img :src="image ?? placeholder" :alt="title" loading="lazy"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
    </div>
    <div class="p-3 text-sm">
      <h3 class="mb-3 line-clamp-3">
        {{ title }}
      </h3>
      <div class="flex items-center justify-between text-sm text-muted-foreground mb-4">
        <div class="flex items-center text-xs">
          <Calendar class="w-4 h-4 mr-1" />
          {{ publishedAt }}
        </div>
      </div>
    </div>
  </Card>
</template>