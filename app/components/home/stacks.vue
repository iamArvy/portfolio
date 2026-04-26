<script setup lang="ts">
import { stack } from "~/constants";
</script>
<template>
  <section class="container-px mx-auto max-w-7xl py-32">
    <SectionHeader
      eyebrow="Tech stack"
      title="The toolkit I reach for"
      description="A curated set of technologies I use to ship fast, maintainable systems."
    />

    <div class="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(cat, ci) in stack"
        :key="cat.category"
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: { delay: ci * 100 },
          },
        }"
        class="glass rounded-3xl p-7"
      >
        <div class="text-xs uppercase tracking-[0.25em] text-gold">
          {{ cat.category }}
        </div>

        <div class="mt-6 space-y-2">
          <div
            v-for="(item, i) in cat.items"
            :key="item.name"
            v-motion="{
              initial: { opacity: 0, x: -8 },
              visibleOnce: {
                opacity: 1,
                x: 0,
                transition: { delay: ci * 100 + i * 50 },
              },
            }"
            class="flex justify-between rounded-2xl bg-glass px-4 py-3"
          >
            <span>{{ item.name }}</span>
            <span class="text-xs text-muted-foreground">
              {{ item.tagline }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
