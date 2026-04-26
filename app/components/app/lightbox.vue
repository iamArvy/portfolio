<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

const props = defineProps<{
  images: string[];
  index: number;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "update:index", value: number): void;
}>();

const onClose = () => emit("close");

const onIndex = (i: number) => {
  emit("update:index", i);
};

// keyboard navigation
const onKey = (e: KeyboardEvent) => {
  if (e.key === "Escape") onClose();
  if (e.key === "ArrowRight") onIndex((props.index + 1) % props.images.length);
  if (e.key === "ArrowLeft")
    onIndex((props.index - 1 + props.images.length) % props.images.length);
};

onMounted(() => window.addEventListener("keydown", onKey));
onUnmounted(() => window.removeEventListener("keydown", onKey));
</script>

<template>
  <!-- Overlay (AnimatePresence equivalent) -->
  <div
    v-motion="{
      initial: { opacity: 0 },
      enter: {
        opacity: 1,
        transition: { duration: 300, ease: [0.16, 1, 0.3, 1] },
      },
      leave: {
        opacity: 0,
        transition: { duration: 300 },
      },
    }"
    class="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-2xl p-6"
    @click="onClose"
  >
    <!-- Close -->
    <button
      @click.stop="onClose"
      class="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full glass-strong text-foreground hover:text-gold"
      aria-label="Close"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M6 6l12 12M6 18L18 6" stroke-linecap="round" />
      </svg>
    </button>

    <!-- Prev -->
    <button
      @click.stop="
        onIndex((props.index - 1 + props.images.length) % props.images.length)
      "
      class="absolute left-6 flex h-12 w-12 items-center justify-center rounded-full glass-strong text-foreground hover:text-gold"
      aria-label="Previous"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          d="M15 18l-6-6 6-6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <!-- Next -->
    <button
      @click.stop="onIndex((props.index + 1) % props.images.length)"
      class="absolute right-6 flex h-12 w-12 items-center justify-center rounded-full glass-strong text-foreground hover:text-gold"
      aria-label="Next"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>

    <!-- Image (key change = AnimatePresence replacement) -->
    <div class="relative">
      <img
        :key="props.index"
        v-motion="{
          initial: { opacity: 0, scale: 0.96 },
          enter: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 300,
              ease: [0.16, 1, 0.3, 1],
            },
          },
          leave: {
            opacity: 0,
            scale: 0.96,
            transition: { duration: 200 },
          },
        }"
        :src="props.images[props.index]"
        alt=""
        class="max-h-[85vh] max-w-[90vw] rounded-2xl border border-glass-border shadow-elevated"
        @click.stop
      />
    </div>

    <!-- Counter -->
    <div
      class="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full glass-strong px-4 py-1.5 text-xs text-muted-foreground"
    >
      {{ props.index + 1 }} / {{ props.images.length }}
    </div>
  </div>
</template>
