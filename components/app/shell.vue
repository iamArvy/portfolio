<script setup lang="ts">
const isOpen = useState("sidebarOpen", () => true);
</script>

<template>
  <SidebarProvider :default-open="isOpen">
    <slot />
  </SidebarProvider>
</template>
