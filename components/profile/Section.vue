<script setup lang="ts">
const { profile } = useContent();
const { appName, image } = useAppConfig()
</script>
<template>
  <div v-if="profile" class="flex flex-row space-x-7">
      <NuxtImg
        :src="image"
        :alt="appName"
        width="150"
        height="150"
        class="rounded-sm"
        placeholder
        quality="100"
        fit="cover"
      />
      <div class="flex flex-col sm:space-y-2 col-span-2">
        <h1 class="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sidebar-primary">
          {{ appName }}
        </h1>
        <h3 class="text-sm sm:text-base md:text-lg lg:text-xl">
          {{ profile.roleName }}
        </h3>
        <ResumeButton v-if="profile.resume" :file="profile.resume" />
      </div>
    </div>
</template>
