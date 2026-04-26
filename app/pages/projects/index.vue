<script setup lang="ts">
import { ref, computed } from "vue";

const { data: projects } = await useAsyncData("projects", () =>
  queryCollection("projects").order("rating", "DESC").all(),
);

const allTypes = computed(() => {
  if (!projects.value) return [];

  return [...new Set(projects.value.flatMap((project) => project.type))].sort();
});

const allStacks = computed(() => {
  if (!projects.value) return [];

  return [
    ...new Set(projects.value.flatMap((project) => project.stack || [])),
  ].sort();
});

/* state */
const query = ref("");
const activeType = ref<string | "All">("All");
const activeStack = ref<string | "All">("All");

/* filters */
const filtered = computed(() => {
  if (!projects.value) return [];
  return projects.value.filter((p) => {
    if (activeType.value !== "All" && p.type !== activeType.value) return false;
    if (activeStack.value !== "All" && !p.stack.includes(activeStack.value))
      return false;

    if (query.value) {
      const haystack =
        `${p.title} ${p.description} ${p.stack.join(" ")}`.toLowerCase();

      if (!haystack.includes(query.value.toLowerCase())) return false;
    }

    return true;
  });
});

/* handlers */
function setActiveType(v: string | "All") {
  activeType.value = v;
}

function setActiveStack(v: string) {
  activeStack.value = v;
}

const description =
  "A complete archive of projects spanning frontend, backend, fullstack, SaaS and APIs.";
useSeoMeta({
  description,
  ogDescription: description,
  twitterDescription: description,
});
</script>

<template>
  <div v-if="projects" class="container-px mx-auto max-w-7xl py-16 md:py-24">
    <SectionHeader
      title="Every project, in one place"
      description="Filter by type, stack, or search by name to find what you're after."
    />

    <!-- Filters -->
    <div class="mt-12 space-y-5">
      <div class="relative">
        <Icon
          name="lucide:search"
          class="w-18 h-18 absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground"
        />

        <input
          v-model="query"
          placeholder="Search projects, stacks, descriptions..."
          class="w-full rounded-full glass-strong py-4 pl-14 pr-5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:shadow-glow"
        />
      </div>

      <div class="space-y-3">
        <FilterRow
          label="Type"
          :options="['All', ...allTypes]"
          :active="activeType"
          @change="setActiveType"
        />

        <FilterRow
          label="Stack"
          :options="['All', ...allStacks]"
          :active="activeStack"
          @change="setActiveStack"
        />
      </div>
    </div>

    <!-- Results -->
    <div class="mt-12">
      <div class="mb-6 text-sm text-muted-foreground">
        Showing
        <span class="text-foreground font-medium">{{ filtered.length }}</span>
        of {{ projects.length }} projects
      </div>

      <div
        v-if="filtered.length === 0"
        class="rounded-3xl glass p-16 text-center"
      >
        <div class="font-display text-xl text-foreground">
          No projects match those filters
        </div>
        <p class="mt-2 text-sm text-muted-foreground">
          Try clearing some filters or searching for a different term.
        </p>
      </div>

      <div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="(p, i) in filtered"
          :key="p.slug"
          :project="p"
          :index="i"
        />
      </div>
    </div>
  </div>
</template>
