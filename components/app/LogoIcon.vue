<script setup lang="ts">
import type { HTMLAttributes } from "vue";

defineOptions({
  inheritAttrs: false,
});

interface Props {
  className?: HTMLAttributes["class"];
}

defineProps<Props>();
const { appName } = useAppConfig();

</script>

<template>
  <span class="font-bold">
    {{ getInitials(appName) }}
  </span>
</template>
