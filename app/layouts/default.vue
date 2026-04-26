<script setup lang="ts">
// import { onMounted, nextTick } from 'vue';
// import { useRoute } from 'vue-router';

// const route = useRoute();

// onMounted(async () => {
//   await nextTick();
//   if (route.hash) {
//     const el = document.querySelector(route.hash);
//     if (el) el.scrollIntoView({ behavior: 'smooth' });
//   }
// });
const isOpen = useState("sidebarOpen", () => true);
</script>

<template>
  <LayoutHeader />
  <slot />
  <LayoutFooter />
</template>
