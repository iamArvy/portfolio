<script setup lang="ts">
import { profile } from "~/constants";

</script>

<template>
  <div
    class="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
    <span class="font-bold">
      {{ getInitials(profile.name) }}
    </span>
  </div>
  <div class="ml-1 grid flex-1 text-left text-sm">
    <span class="mb-0.5 truncate font-semibold leading-none">Oluwaseyi Oke</span>
  </div>
</template>
