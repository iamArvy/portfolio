<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useRoute } from "#imports";
import { navs } from "~/constants";

const route = useRoute();

const scrolled = ref(false);
const open = ref(false);

// scroll state
const onScroll = () => {
  scrolled.value = window.scrollY > 12;
};

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});

// close menu on route change
watch(
  () => route.path,
  () => {
    open.value = false;
  },
);
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-500"
    :class="scrolled ? 'py-3' : 'py-5'"
  >
    <div class="container-px mx-auto max-w-7xl">
      <div
        class="flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500"
        :class="scrolled ? 'glass-strong shadow-card' : 'bg-transparent'"
      >
        <!-- LOGO -->
        <NuxtLink to="/" class="group flex items-center gap-2">
          <span
            class="relative flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-gold to-gold-soft font-display font-bold text-primary-foreground"
          >
            O
            <span
              class="absolute inset-0 rounded-full bg-gold/40 blur-md opacity-0 transition-opacity group-hover:opacity-100"
            />
          </span>

          <span class="font-display text-sm font-semibold text-foreground">
            Oluwaseyi
          </span>
        </NuxtLink>

        <nav class="hidden items-center gap-1 md:flex">
          <NuxtLink
            v-for="l in navs"
            :key="l.to"
            :to="l.to"
            class="rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            :class="route.path === l.to ? 'text-foreground bg-glass' : ''"
          >
            {{ l.label }}
          </NuxtLink>
        </nav>

        <!-- RESUME -->
        <a
          href="#"
          target="_blank"
          class="hidden md:inline-flex items-center gap-2 rounded-full bg-linear-to-br from-gold to-gold-soft px-4 py-1.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
        >
          Resume
        </a>

        <!-- MOBILE BUTTON -->
        <button
          @click="open = !open"
          class="md:hidden flex h-9 w-9 items-center justify-center rounded-full glass"
          aria-label="Menu"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path v-if="open" d="M6 6l12 12M6 18L18 6" stroke-linecap="round" />
            <path v-else d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
          </svg>
        </button>
      </div>

      <!-- MOBILE MENU -->
      <div
        v-if="open"
        class="md:hidden mt-2 glass-strong rounded-3xl p-4 animate-scale-in"
      >
        <nav class="flex flex-col gap-1">
          <NuxtLink
            v-for="l in navs"
            :key="l.to"
            :to="l.to"
            class="rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-glass hover:text-foreground"
            :class="route.path === l.to ? 'text-foreground bg-glass' : ''"
          >
            {{ l.label }}
          </NuxtLink>

          <a
            href="#"
            target="_blank"
            class="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-br from-gold to-gold-soft px-4 py-3 text-sm font-semibold text-primary-foreground"
          >
            View Resume
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>
