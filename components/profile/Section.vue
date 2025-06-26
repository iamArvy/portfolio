<script setup lang="ts">
const { profile } = useContent();
</script>
<template>
  <div class="flex flex-col lg:grid grid-cols-2">
    <div class="flex items-center gap-4">
      <NuxtImg
        :src="profile?.image"
        :alt="profile?.name"
        width="100"
        height="100"
        class="rounded-sm"
        placeholder
        quality="100"
        fit="cover"
      />
      <div class="flex flex-col space-y-2">
        <h1 class="text-lg lg:text-3xl font-bold text-sidebar-primary">
          {{ profile?.name }}
        </h1>
        <h3 class="text-sm">
          {{ profile?.job as string }}
        </h3>
        <ResumeButton v-if="profile?.resume" :file="profile?.resume" />
      </div>
    </div>
    <p class="text-sm lg:text-base p-2">{{ profile?.bio }}</p>
  </div>
</template>
