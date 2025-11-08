<script setup lang="ts">
import { profile } from '~/constants';

</script>

<template>
  <section class="p-2">
    <div class="flex flex-row space-x-3 lg:space-x-7">
      <NuxtImg :src="profile.image" :alt="profile.name" class="rounded-sm" placeholder quality="100"
        sizes="100 md:150 lg:250px" fit="contain" />
      <div class="flex flex-col space-y-2 col-span-2">
        <div>
          <h1 class="text-xl sm:text-2xl md:text-4xl font-bold text-sidebar-primary">
            {{ profile.name }}
          </h1>
          <h3 class="text-sm md:text-lg font-bold">
            {{ profile.job_description }}
          </h3>
        </div>
        <p class="hidden lg:flex text-sm lg:text-base">
          {{ profile.bio }}
        </p>
        <ResumeButton v-if="profile.resume" :file="profile.resume" />
      </div>
    </div>
    <p class="lg:hidden mt-3 text-sm md:text-base">
      {{ profile.bio }}
    </p>
  </section>
</template>