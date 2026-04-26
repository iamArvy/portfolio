<script setup lang="ts">
import { profile, contact, navs } from "~/constants";
</script>

<template>
  <footer class="relative mt-32 border-t border-glass-border">
    <div class="container-px mx-auto max-w-7xl py-16">
      <div class="grid gap-12 md:grid-cols-3">
        <div>
          <div class="font-display text-2xl font-semibold text-foreground">
            {{ profile.name }}
          </div>
          <p class="mt-3 max-w-sm text-sm text-muted-foreground">
            Building polished, fast, and resilient web platforms with a focus on
            backend engineering.
          </p>
        </div>

        <div>
          <div
            class="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            Navigate
          </div>
          <div class="mt-4 flex flex-col gap-2 text-sm">
            <NuxtLink
              v-for="link in navs"
              :key="link.to"
              :to="link.to"
              class="text-foreground/80 hover:text-gold transition-colors"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>

        <div>
          <div
            class="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            Reach out
          </div>
          <div class="mt-4 flex flex-col gap-2 text-sm">
            <NuxtLink
              v-for="item in contact"
              :key="item.value"
              :href="item.url"
              :target="item.url.startsWith('http') ? '_blank' : undefined"
              rel="noreferrer"
              class="text-foreground/80 hover:text-gold transition-colors"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div
        class="mt-16 flex flex-col items-start justify-between gap-4 border-t border-glass-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center"
      >
        <span> © {{ new Date().getFullYear() }} {{ profile.name }}. </span>
        <span class="font-mono">v2.0</span>
      </div>
    </div>
  </footer>
</template>
