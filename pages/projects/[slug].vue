<script setup lang="ts">
import { Icon } from "@iconify/vue";
const route = useRoute();
const slug = route.params.slug as string;
const { data: project } = await useAsyncData("project", () => {
  return queryCollection("project").where("slug", "=", slug).first();
});

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

const { getMarkdown } = useMarkdown();
// const markdown = ref<string>("");
const html = ref<string>("");
const toc = ref<TOCItem[]>([]);
const currentSection = ref("");
onMounted(async () => {
  const markdown = await getMarkdown(project.value?.content as string);
  html.value = markdown.html;
  toc.value = markdown.toc;
  // const headings = document.querySelectorAll(
  //   "article h1, article h2, article h3"
  // ); // adjust levels

  // const observer = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         currentSection.value = entry.target.id;
  //       }
  //     });
  //   },
  //   {
  //     rootMargin: "0px 0px -70% 0px", // trigger earlier
  //     threshold: 0,
  //   }
  // );

  // headings.forEach((heading) => {
  //   observer.observe(heading);
  // });

  // onBeforeUnmount(() => {
  //   headings.forEach((heading) => {
  //     observer.unobserve(heading);
  //   });
  // });
});
watch(html, async (newHtml) => {
  if (newHtml) {
    await nextTick(); // wait for DOM update

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
        rootMargin: "0px 0px -70% 0px", // trigger earlier
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
    // attach observer after content is in DOM
    // same logic here
  }
});
</script>
<template>
  <div
    class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 lg:relative overflow-y-auto"
  >
    <div class="flex flex-col lg:grid grid-cols-4 gap-4 w-full h-full">
      <div
        class="col-span-3 max-h-full lg:overflow-x-auto lg:relative top-0 left-0 flex flex-col"
      >
        <div class="lg:absolute flex-1 h-full flex flex-col gap-4 p-2 w-full">
          <div class="flex flex-col gap-4">
            <h1 class="text-3xl font-bold">{{ project?.name }}</h1>
            <div class="flex gap-2">
              <NuxtLink
                :to="project?.live"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  :disabled="!project?.live"
                  class="cursor-pointer"
                  size="sm"
                >
                  <Icon icon="carbon:link" />
                  View Live
                </Button>
              </NuxtLink>
              <NuxtLink
                :to="project?.repository"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  :disabled="!project?.repository"
                  class="cursor-pointer"
                  size="sm"
                >
                  <Icon icon="mdi:github" />
                  View Repository
                </Button>
              </NuxtLink>
            </div>
          </div>
          <hr />
          <div v-if="html" class="col-span-2">
            <article
              class="w-full prose-w-full prose prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-headings:text-primary dark:prose-headings:text-white dark:prose-invert prose-a:text-blue-500 prose-a:underline prose-a:decoration-primary-foreground"
              v-html="html"
            />
          </div>
        </div>
      </div>
      <div class="max-h-full overflow-x-auto relative lg:flex flex-col hidden">
        <div class="absolute flex-1 h-full flex flex-col gap-4 p-2 w-full">
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
    <!-- <div
      class="flex flex-col flex-1 gap-4 col-span-3 p-2 absolute overflow-y-auto bg-blue-500 w-3/4"
    >
      <div class="flex flex-col gap-4">
        <h1 class="text-3xl font-bold">{{ project?.name }}</h1>
        <div class="flex gap-2">
          <NuxtLink
            :to="project?.live"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button :disabled="!project?.live" size="sm">
              <Icon icon="carbon:link" />
              View Live
            </Button>
          </NuxtLink>
          <NuxtLink
            :to="project?.repository"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button :disabled="!project?.repository" size="sm">
              <Icon icon="mdi:github" />
              View Repository
            </Button>
          </NuxtLink>
        </div>
      </div>
      <hr />
      <div v-if="html" class="col-span-2">
        <article
          class="w-full prose-w-full prose prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-headings:text-primary dark:prose-headings:text-white dark:prose-invert prose-a:text-blue-500 prose-a:underline prose-a:decoration-primary-foreground"
          v-html="html"
        />
      </div>
    </div>
    <div class="hidden lg:block col-span-1 w-1/4 absolute right-0 top-0 h-full">
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
            ]"
          >
            {{ item.content }}
          </NuxtLink>
        </li>
      </ul>
    </div> -->
  </div>
</template>
