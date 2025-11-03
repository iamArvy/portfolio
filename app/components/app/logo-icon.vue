<script setup lang="ts">
import { name } from "~/constants";
</script>

<template>
  <span class="font-bold">
    {{ getInitials(name) }}
  </span>
</template>
