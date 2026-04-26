<script setup lang="ts">
interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const props = withDefaults(defineProps<Props>(), {
  align: "left",
});
</script>

<template>
  <div
    class="max-w-3xl"
    :class="props.align === 'center' ? 'text-center mx-auto' : ''"
  >
    <!-- Eyebrow -->
    <div
      v-if="eyebrow"
      v-motion-slide-visible-once-bottom
      :delay="0"
      class="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-gold"
      :class="props.align === 'center' ? 'justify-center' : ''"
    >
      <span class="h-px w-8 bg-gold/60" />
      {{ eyebrow }}
    </div>

    <!-- Title -->
    <h2
      v-motion-slide-visible-once-bottom
      :delay="80"
      class="mt-4 font-display text-4xl font-semibold text-gradient md:text-5xl"
    >
      {{ title }}
    </h2>

    <!-- Description -->
    <p
      v-if="description"
      v-motion-slide-visible-once-bottom
      :delay="160"
      class="mt-5 text-base text-muted-foreground md:text-lg"
    >
      {{ description }}
    </p>
  </div>
</template>
