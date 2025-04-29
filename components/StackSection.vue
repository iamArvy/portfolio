<script setup lang="ts">
import { Icon } from "@iconify/vue";

const { data: stacks } = await useAsyncData("stack", () => {
  return queryCollection("stack").order("name", "ASC").all();
});
</script>
<template>
  <div class="flex flex-wrap gap-4 justify-center my-4">
    <NuxtLink
      v-for="item in stacks"
      :key="item.name"
      :to="item.url"
      target="_blank"
      class="flex flex-col items-center gap-2 font-bold rounded-full px-3 py-2 group"
    >
      <Icon
        :icon="item.icon"
        class="text-xl group-hover:text-inherit transition-all ease-in-out duration-200 text-primary"
        inline
      />
      <span class="text-sm text-center group-hover:text-primary">{{
        item.name
      }}</span>
    </NuxtLink>
  </div>
</template>
