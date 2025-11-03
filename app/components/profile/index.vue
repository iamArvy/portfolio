<script setup lang="ts">
import { name, image } from "@/constants";
import type { Profile } from "~/interfaces";
defineProps<{
  profile?: Profile | null;
}>();
</script>
<template>
  <SectionLayout>
    <div v-if="profile">
      <div class="flex flex-row space-x-3 lg:space-x-7">
        <NuxtImg
          :src="image"
          :alt="name"
          class="rounded-sm"
          placeholder
          quality="100"
          sizes="100 md:150 lg:250px"
          fit="contain"
        />
        <div class="flex flex-col space-y-2 col-span-2">
          <div>
            <h1
              class="text-xl sm:text-2xl md:text-4xl font-bold text-sidebar-primary"
            >
              {{ name }}
            </h1>
            <h3 class="text-sm md:text-lg font-bold">
              {{ profile.roleName }}
            </h3>
          </div>
          <p class="hidden lg:flex text-sm lg:text-base">
            {{ profile.bio }}
          </p>
          <ProfileResume v-if="profile.resume" :file="profile.resume" />
        </div>
      </div>
      <p class="lg:hidden mt-3 text-sm md:text-base">
        {{ profile.bio }}
      </p>
    </div>
  </SectionLayout>
</template>
