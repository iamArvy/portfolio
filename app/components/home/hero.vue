<script setup lang="ts">
import heroBg from "@/assets/images/hero-bg.jpg";
import portrait from "@/assets/images/myimg.jpeg";
import { profile } from "~/constants";
</script>
<template>
  <section class="relative -mt-24 flex min-h-screen items-center pt-24">
    <!-- background -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <img :src="heroBg" class="h-full w-full object-cover opacity-60" />
      <div
        class="absolute inset-0 bg-linear-to-b from-background/40 via-background/60 to-background"
      />
      <div class="absolute inset-0 grid-bg opacity-40" />
    </div>

    <!-- floating orbs -->
    <div
      class="pointer-events-none absolute left-[10%] top-[30%] h-72 w-72 rounded-full bg-gold/10 blur-3xl animate-float"
    />
    <div
      class="pointer-events-none absolute right-[15%] bottom-[20%] h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-float"
      style="animation-delay: 2s"
    />

    <div
      v-motion="{
        initial: { opacity: 0, y: 12 },
        visibleOnce: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }"
      class="container-px mx-auto max-w-7xl mt-16 lg:mt-0"
    >
      <div
        class="grid items-center gap-y-24 lg:grid-cols-[1.4fr_1fr] lg:gap-16"
      >
        <div class="max-w-2xl">
          <h1
            v-motion="{
              initial: { opacity: 0, y: 20 },
              visibleOnce: { opacity: 1, y: 0, transition: { delay: 100 } },
            }"
            class="mt-7 font-display text-5xl font-semibold leading-[1.05] md:text-7xl lg:text-[5.5rem]"
          >
            <span class="text-gradient">{{ profile.name.split(" ")[0] }}</span>
            <br />
            <span class="text-gold-gradient">
              {{ profile.name.split(" ").slice(1).join(" ") }}
            </span>
          </h1>

          <div
            v-motion="{
              initial: { opacity: 0, y: 15 },
              visibleOnce: { opacity: 1, y: 0, transition: { delay: 150 } },
            }"
            class="mt-6 flex items-center gap-3 text-lg font-medium text-foreground/80"
          >
            <span class="h-px w-10 bg-gold" />
            {{ profile.role }}
          </div>

          <p
            v-motion="{
              initial: { opacity: 0, y: 15 },
              visibleOnce: { opacity: 1, y: 0, transition: { delay: 200 } },
            }"
            class="mt-7 max-w-2xl text-base text-muted-foreground md:text-lg"
          >
            {{ profile.bio }}
          </p>

          <!-- buttons -->
          <div
            v-motion="{
              initial: { opacity: 0, y: 15 },
              visibleOnce: { opacity: 1, y: 0, transition: { delay: 250 } },
            }"
            class="mt-10 flex flex-wrap gap-3"
          >
            <a
              :href="profile.resume"
              target="_blank"
              class="inline-flex items-center gap-2 rounded-full bg-linear-to-br from-gold to-gold-soft px-7 py-3.5 text-sm font-semibold text-primary-foreground"
            >
              View Resume
            </a>

            <NuxtLink
              to="/projects"
              class="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold"
            >
              Explore work
            </NuxtLink>
          </div>
        </div>
        <div v-motion-slide-visible-once-bottom :delay="200">
          <div class="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div
              aria-hidden
              v-motion="{
                initial: { rotate: 0 },
                enter: {
                  rotate: 360,
                  transition: {
                    duration: 30000,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                },
              }"
              class="absolute inset-0 -m-6 rounded-full border border-dashed border-gold/30"
            />

            <div
              aria-hidden
              v-motion="{
                initial: { rotate: 0 },
                enter: {
                  rotate: -360,
                  transition: {
                    duration: 50000,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                },
              }"
              class="absolute inset-0 -m-12 rounded-full border border-gold/10"
            >
              <span
                class="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-glow"
              />
              <span
                class="absolute right-0 top-1/2 h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/60"
              />
            </div>

            <!-- glow halo -->
            <div
              class="absolute inset-0 -z-10 rounded-full bg-linear-to-br from-gold/30 via-gold/10 to-transparent blur-3xl"
            />

            <!-- floating portrait -->
            <div
              v-motion="{
                initial: { y: 0 },
                enter: {
                  y: [0, -14, 0],
                  transition: {
                    duration: 6000,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                },
              }"
              class="relative aspect-square overflow-hidden rounded-full glass-strong shadow-elevated ring-1 ring-gold/20"
            >
              <NuxtImg
                :src="portrait"
                :alt="`${profile.name} — ${profile.role}`"
                width="1024"
                height="1024"
                class="h-full w-full object-cover"
                placeholder
              />
              <div
                class="pointer-events-none absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
