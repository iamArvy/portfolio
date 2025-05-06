<script setup lang="ts">
import { Icon } from "@iconify/vue";

const { stacks } = useContent();
</script>
<template>
  <div class="flex flex-wrap gap-4 justify-center my-4">
    <div
      v-for="item in stacks?.items"
      :key="item.name"
      class="flex flex-col items-center gap-2 font-bold rounded-full px-3 py-2 group cursor-pointer"
    >
      <Icon
        :icon="item.icon"
        class="text-xl group-hover:text-inherit transition-all ease-in-out duration-200 text-primary"
        inline
      />
      <span
        class="text-sm text-center group-hover:text-sidebar-primary transition-all .3s ease-in-out duration-200"
        >{{ item.name }}</span
      >
    </div>
  </div>
</template>
