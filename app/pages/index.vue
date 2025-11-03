<script setup lang="ts">
import { name } from "~/constants";

const breadcrumbs = useBreadcrumbs();
onMounted(() => {
  breadcrumbs.value = [
    {
      title: `${name}  Portfolio`,
    },
  ];
});
</script>
<template>
  <div
    class="flex h-full flex-1 flex-col gap-4 rounded-xl lg:px-4 overflow-x-auto"
  >
    <Profile id="profile" />
    <Stacks id="stacks" />
    <Projects id="projects" />
  </div>
</template>
