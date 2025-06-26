<script setup lang="ts">
import type { HTMLAttributes } from "vue";

defineOptions({
  inheritAttrs: false,
});

interface Props {
  className?: HTMLAttributes["class"];
}

defineProps<Props>();
const { profile } = useContent();
</script>

<template>
  <span class="font-bold">
    {{ getInitials(profile?.name) }}
  </span>
</template>
