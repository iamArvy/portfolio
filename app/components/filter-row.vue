<template>
  <div class="flex flex-wrap items-center gap-2">
    <span
      class="mr-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
    >
      {{ label }}
    </span>

    <button
      v-for="opt in options"
      :key="opt"
      @click="$emit('change', opt)"
      class="rounded-full px-3.5 py-1.5 text-xs font-medium transition-all"
      :class="
        active === opt
          ? 'bg-gold text-primary-foreground shadow-glow'
          : 'glass text-foreground/80 hover:border-gold/30 hover:text-foreground'
      "
    >
      {{ opt }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  options: string[];
  active: string;
}>();

defineEmits<{
  (e: "change", value: string): void;
}>();
</script>
