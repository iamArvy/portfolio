<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;
const subpage = route.params.subpage as string[];
const subPages = Array.isArray(subpage) ? subpage.join("/") : "";
const fullPath = `/projects/${slug}/${subPages}`;
const { data: page } = await useAsyncData(`project-${slug}-${fullPath}`, () => {
  return queryCollection("projectPages").path(fullPath).first();
});
const { data: pages } = await useAsyncData(`project-${slug}-pages`, () => {
  return queryCollection("projectPages")
    .where("project", "=", slug)
    .order("order", "ASC")
    .all();
});

const contentRef = ref<HTMLElement | null>(null);
const { currentSection } = useSectionObserver(contentRef);
const navigation = useProjectNavigation();
watchEffect(() => {
  if (pages.value) {
    navigation.setPages(pages.value);
  }
});
const prevPage = navigation.prevPage;
const nextPage = navigation.nextPage;
useAppTitle(page.value?.title as string);
const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = ["projects", slug, ...subpage];
</script>

<template>
  <div
    class="flex flex-col lg:grid grid-cols-4 gap-4 w-full h-full scroll-smooth"
  >
    <div
      class="col-span-3 max-h-full lg:overflow-x-auto top-0 left-0 flex flex-col"
    >
      <div class="flex-1 h-full flex flex-col gap-4 p-2 w-full">
        <div>
          <div ref="contentRef" class="col-span-2 p-4">
            <ContentRenderer
              v-if="page"
              class="max-w-full prose-w-full prose prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-headings:text-primary dark:prose-headings:text-white dark:prose-invert prose-a:text-blue-500 prose-a:underline prose-a:decoration-primary-foreground"
              :value="page"
            />
            <div class="flex justify-between items-center gap-4">
              <div class="flex-1">
                <PaginationButton
                  v-if="prevPage"
                  :href="prevPage.path"
                  :title="prevPage.title"
                  :description="prevPage.description ?? ''"
                  direction="prev"
                />
              </div>

              <div class="flex-1 text-center" />

              <div class="flex-1 text-right">
                <PaginationButton
                  v-if="nextPage"
                  :href="nextPage.path"
                  :title="nextPage.title"
                  :description="nextPage.description ?? ''"
                  direction="next"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-h-full overflow-x-auto lg:flex flex-col hidden">
      <div class="flex-1 h-full flex flex-col gap-4 p-2 w-full">
        <div class="flex flex-col gap-4">
          <p class="font-bold">On this page</p>
          <ul class="flex flex-col gap-2 p-2 overflow-x-auto flex-1">
            <li v-for="item in page?.body?.toc?.links" :key="item.id">
              <NuxtLink
                :to="`#${item.id}`"
                active-class="text-blue-500 font-bold"
                :class="[
                  'text-md hover:text-primary transition-all ease-in-out duration-200',
                  currentSection === item.id
                    ? 'text-blue-500 font-bold'
                    : 'text-gray-500',
                  item.depth === 2 ? 'italic' : '',
                ]"
              >
                {{ item.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
