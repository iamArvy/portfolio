<script setup lang="ts">
import { Icon } from "@iconify/vue";
const route = useRoute();
const slug = route.params.slug as string;
const { getProject } = useContent();
const project = getProject(slug);
useAppTitle(project?.value?.name);
const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = [
  { title: "Projects", href: "projects" },
  { title: project?.value?.name as string, href: `/projects/${slug}` },
];
definePageMeta({
  title: "Project",
  meta: [
    {
      name: "description",
      content: "Dashboard page description",
    },
  ],
});

const { getRepository } = useOctokit();
const { getMarkdown } = useMarkdown();
const html = ref<string>("");
const toc = ref<TOCItem[]>([]);
const currentSection = ref("");
const repository = await getRepository(slug as string);
onMounted(async () => {
  const repository = await getRepository(slug as string);
  const markdown = await getMarkdown(repository?.readme?.text);
  html.value = markdown.html;
  toc.value = markdown.toc;
});

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
        <div class="flex flex-col gap-4">
          <h1 class="text-3xl font-bold capitalize">{{ repository?.name }}</h1>
          <p v-if="repository?.description">{{ repository?.description }}</p>
          <div class="flex gap-2">
            <NuxtLink
              v-if="repository?.homepageUrl"
              :to="repository?.homepageUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                :disabled="!repository?.homepageUrl"
                class="cursor-pointer"
                size="sm"
              >
                <Icon icon="carbon:link" />
                View Live
              </Button>
            </NuxtLink>
            <NuxtLink
              v-if="repository?.url"
              :to="repository?.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                :disabled="!repository?.url"
                class="cursor-pointer"
                size="sm"
              >
                <Icon icon="mdi:github" />
                View Repository
              </Button>
            </NuxtLink>
          </div>
        </div>
        <div
          v-if="html"
          class="col-span-2 border border-sidebar-border/70 dark:border-sidebar-border p-2 rounded-xl"
        >
          <div>
            <h2 class="text-2xl font-bold capitalize">Readme</h2>
            <p class="text-gray-500">
              This is the readme file for the project.
            </p>
          </div>
          <article
            class="w-full prose-w-full prose prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-headings:text-primary dark:prose-headings:text-white dark:prose-invert prose-a:text-blue-500 prose-a:underline prose-a:decoration-primary-foreground"
            v-html="html"
          />
        </div>
      </div>
    </div>
    <div class="max-h-full overflow-x-auto lg:flex flex-col hidden">
      <div class="flex-1 h-full flex flex-col gap-4 p-2 w-full">
        <div class="flex flex-col gap-4">
          <p class="font-bold">On this page</p>
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
