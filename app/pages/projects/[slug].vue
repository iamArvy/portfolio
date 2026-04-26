<script setup lang="ts">
import placeholder from "@/assets/images/placeholder.png";

const route = useRoute();

const { data: project } = await useAsyncData(
  `project-${route.params.slug}`,
  () => {
    return queryCollection("projects")
      .where("slug", "=", route.params.slug)
      .first();
  },
);
if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: "Project not found" });
}

const { cover, description } = project.value;

useSeoMeta({
  description,
  ogDescription: description,
  ogImage: cover,
  twitterDescription: description,
  twitterImage: cover,
});

const lbIndex = ref<number | null>(null);
</script>

<template>
  <article v-if="project" class="py-16">
    <header class="container-px mx-auto mt-10 max-w-5xl">
      <div class="text-xs font-medium uppercase tracking-[0.25em] text-gold">
        {{ project.type }}
      </div>

      <h1
        class="mt-4 font-display text-4xl font-semibold text-gradient md:text-6xl"
      >
        {{ project.title }}
      </h1>

      <p class="mt-5 max-w-3xl text-lg text-muted-foreground">
        {{ project.description }}
      </p>

      <div class="mt-7 flex flex-wrap gap-2">
        <span
          v-for="s in project.stack"
          :key="s"
          class="rounded-full border border-glass-border bg-glass px-3 py-1.5 text-xs font-medium"
        >
          {{ s }}
        </span>
      </div>

      <div class="mt-8 flex flex-wrap gap-3">
        <NuxtLink
          v-if="project.links.live"
          :href="project.links.live"
          target="_blank"
          class="inline-flex items-center gap-2 rounded-full bg-linear-to-br from-gold to-gold-soft px-5 py-2.5 text-sm font-semibold text-primary-foreground"
        >
          Live demo
        </NuxtLink>

        <NuxtLink
          v-if="project.links.github"
          :href="project.links.github"
          target="_blank"
          class="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold"
        >
          GitHub
        </NuxtLink>
      </div>
    </header>

    <div
      v-if="project.cover"
      v-motion="{
        initial: { opacity: 0, y: 30 },
        visibleOnce: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 700,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }"
      class="container-px mx-auto mt-14 max-w-6xl"
    >
      <div class="overflow-hidden rounded-3xl glass-strong">
        <NuxtImg
          :src="project.cover"
          :alt="project.title"
          :placeholder="placeholder"
          class="w-full object-cover"
        />
      </div>
    </div>

    <!-- BODY -->
    <div
      class="container-px mx-auto mt-20 grid max-w-6xl gap-16 lg:grid-cols-[1fr_280px]"
    >
      <!-- CONTENT -->
      <div class="prose-portfolio">
        <ContentRenderer :value="project" />
        <!-- <h2>The problem</h2>
        <p>{{ project.problem }}</p> -->

        <!-- <div v-html="project.content"></div> -->

        <!-- <h2>Architecture notes</h2>
        <p>{{ project.architecture }}</p>

        <h2>Challenges</h2>
        <p>{{ project.challenges }}</p> -->
      </div>

      <!-- SIDEBAR -->
      <aside class="space-y-6 lg:sticky lg:top-28 lg:self-start">
        <div class="glass rounded-2xl p-6">
          <div class="text-xs uppercase tracking-[0.2em] text-gold">Stack</div>
          <ul class="mt-4 space-y-2 text-sm">
            <li
              v-for="s in project.stack"
              :key="s"
              class="flex items-center gap-2"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-gold" />
              {{ s }}
            </li>
          </ul>
        </div>

        <div class="glass rounded-2xl p-6">
          <div class="text-xs uppercase tracking-[0.2em] text-gold">Type</div>
          <div class="mt-3 text-sm">{{ project.type }}</div>
        </div>
      </aside>
    </div>

    <section
      v-if="project.gallery && project.gallery.length > 0"
      class="container-px mx-auto mt-24 max-w-6xl"
    >
      <div class="text-xs uppercase tracking-[0.25em] text-gold">Gallery</div>
      <h2
        class="mt-3 font-display text-3xl font-semibold text-gradient md:text-4xl"
      >
        A closer look
      </h2>

      <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <button
          v-for="(img, i) in project.gallery"
          :key="i"
          @click="lbIndex = i"
          v-motion="{
            initial: { opacity: 0, y: 20 },
            visibleOnce: {
              opacity: 1,
              y: 0,
              transition: { delay: i * 50 },
            },
          }"
          class="group relative overflow-hidden rounded-2xl glass"
          :class="{ 'md:col-span-2 md:row-span-2': i === 0 }"
        >
          <NuxtImg
            :src="img"
            class="aspect-4/3 w-full object-cover group-hover:scale-105 transition"
            :placeholder="placeholder"
          />
        </button>
      </div>

      <AppLightbox
        v-if="lbIndex !== null"
        :images="project.gallery"
        :index="lbIndex"
        @close="lbIndex = null"
        @index="lbIndex = $event"
      />
    </section>

    <div class="container-px mx-auto mt-24 max-w-5xl">
      <NuxtLink
        to="/projects"
        class="block rounded-3xl glass p-8 text-center hover:border-gold/40"
      >
        <div class="text-xs uppercase tracking-[0.25em] text-gold">
          Continue exploring
        </div>
        <div class="mt-2 font-display text-2xl font-semibold">
          View all projects →
        </div>
      </NuxtLink>
    </div>
  </article>
</template>
