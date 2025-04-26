<script setup lang="ts">
useAppTitle();
</script>
<template>
  <div
    class="mx-auto w-full h-screen items-center flex flex-col place-content-center gap-4"
  >
    <h1 class="text-6xl font-bold">Weaver's Dashboard</h1>
    <div class="flex gap-2">
      <NuxtLink
        to="/auth/login"
        class="py-2 px-4 bg-white text-black rounded-xl"
        >Login</NuxtLink
      >
      <NuxtLink
        to="/auth/register"
        class="py-2 px-4 bg-white text-black rounded-xl"
        >Register</NuxtLink
      >
    </div>
  </div>
</template>
