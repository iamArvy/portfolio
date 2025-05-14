<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { Project } from "~/types";
const route = useRoute();
const slug = route.params.slug as string;
const html = ref<string>("");
const toc = ref<TOCItem[]>([]);
const currentSection = ref("");
const project = ref<Project | null>(null);
useAppTitle(project.value?.name as string);
const { getProject } = useContent();

// Breadcrumbs

// Meta
definePageMeta({
  title: "Project",
  meta: [
    {
      name: "description",
      content: "Dashboard page description",
    },
  ],
});

const { getMarkdown, getReadme } = useMarkdown();
const { githubUsername: username } = useAppConfig();
const loading = ref(false);
onMounted(async () => {
  loading.value = true;
  project.value = await getProject(slug as string);
  const { data: readme } = await getReadme(project.value?.repository as string);
  const markdown = await getMarkdown(atob(readme?.content as string));
  html.value = markdown.html;
  toc.value = markdown.toc;
  loading.value = false;
});
const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = [
  { title: "Projects", href: "projects" },
  { title: project?.value?.name as string, href: `/projects/${slug}` },
];
watch(html, async (newHtml) => {
  if (newHtml) {
    await nextTick();

    const headings = document.querySelectorAll(
      "article h1, article h2, article h3"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentSection.value = entry.target.id;
          }
        });
      },
      {
        rootMargin: "0px 0px -70% 0px",
        threshold: 0,
      }
    );

    headings.forEach((heading) => {
      observer.observe(heading);
    });

    onBeforeUnmount(() => {
      headings.forEach((heading) => {
        observer.unobserve(heading);
      });
    });
  }
});
</script>
<template>
  <div class="flex flex-col lg:grid grid-cols-4 gap-4 w-full h-full">
    <div
      class="col-span-3 max-h-full lg:overflow-x-auto top-0 left-0 flex flex-col"
    >
      <div class="flex-1 h-full flex flex-col gap-4 p-2 w-full">
        <div>
          <div v-if="project" class="flex flex-col gap-4">
            <h1 class="text-3xl font-bold capitalize">{{ project.name }}</h1>
            <p>{{ project.description }}</p>
            <div class="flex flex-wrap gap-1">
              <span
                v-for="item in project.tags"
                :key="item"
                class="py-1 px-2 rounded text-sm capitalize font-semibold dark:bg-secondary bg-primary text-primary-foreground dark:text-primary"
              >
                {{ item }}
              </span>
            </div>
            <div class="flex gap-2">
              <NuxtLink
                :to="project.live"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  :disabled="!project.live"
                  class="cursor-pointer"
                  size="sm"
                >
                  <Icon icon="carbon:link" />
                  View Live
                </Button>
              </NuxtLink>
              <NuxtLink
                :to="`https://github.com/${username}/${project?.repository}`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  :disabled="!project.repository"
                  class="cursor-pointer"
                  size="sm"
                >
                  <Icon icon="mdi:github" />
                  View Repository
                </Button>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div>
          <div
            v-if="html"
            class="col-span-2 border border-sidebar-border/70 dark:border-sidebar-border p-4 rounded"
          >
            <div class="flex items-center gap-2 mb-4">
              <Icon
                icon="mdi:book-open-blank-variant-outline"
                class="text-2xl text-primary"
              />
              <h2 class="text-sm font-bold capitalize">README</h2>
            </div>
            <article
              class="max-w-full prose-w-full prose prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-headings:text-primary dark:prose-headings:text-white dark:prose-invert prose-a:text-blue-500 prose-a:underline prose-a:decoration-primary-foreground"
              v-html="html"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="max-h-full overflow-x-auto lg:flex flex-col hidden">
      <div class="flex-1 h-full flex flex-col gap-4 p-2 w-full">
        <div class="flex flex-col gap-4">
          <p class="font-bold">Readme Content</p>
          <ul class="flex flex-col gap-2 p-2 overflow-x-auto flex-1">
            <li v-for="item in toc" :key="item.slug">
              <NuxtLink
                :to="`#${item.slug}`"
                active-class="text-blue-500 font-bold"
                :class="[
                  'text-md hover:text-primary transition-all ease-in-out duration-200',
                  currentSection === item.slug
                    ? 'text-blue-500 font-bold'
                    : 'text-gray-500',
                  item.level === 2 ? 'italic' : '',
                ]"
              >
                {{ item.content }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
