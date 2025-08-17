<script setup lang="ts">
import { Icon } from "@iconify/vue";
const { currentTheme, updateAppearance } = useAppearance();
</script>

<template>
  <Button
    variant="ghost"
    size="icon"
    @click="updateAppearance(currentTheme === 'light' ? 'dark' : 'light')"
  >
    <Icon :icon="currentTheme === 'light' ? 'lucide:sun' : 'lucide:moon'" />
  </Button>
</template>
