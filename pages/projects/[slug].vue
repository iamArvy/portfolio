<script setup lang="ts">
// import { Icon } from "@iconify/vue";
const route = useRoute();
const slug = route.params.slug as string;

const { data: page } = await useAsyncData(`page-${slug}`, () => {
  return queryCollection("projects").path(`/projects/${slug}`).first();
});

const currentSection = ref("");
useAppTitle(page.value?.title as string);
// need to set up breadcrumbs to automatically join from the previous link
// const { getProject } = useContent();

const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = page.value?.breadcrumbs;
// watch(html, async (newHtml) => {
//   if (newHtml) {
//     await nextTick();

//     const headings = document.querySelectorAll(
//       "article h1, article h2, article h3"
//     );

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             currentSection.value = entry.target.id;
//           }
//         });
//       },
//       {
//         rootMargin: "0px 0px -70% 0px",
//         threshold: 0,
//       }
//     );

//     headings.forEach((heading) => {
//       observer.observe(heading);
//     });

//     onBeforeUnmount(() => {
//       headings.forEach((heading) => {
//         observer.unobserve(heading);
//       });
//     });
//   }
// });
</script>
<template>
  <div class="flex flex-col lg:grid grid-cols-4 gap-4 w-full h-full">
    <div
      class="col-span-3 max-h-full lg:overflow-x-auto top-0 left-0 flex flex-col"
    >
      <div class="flex-1 h-full flex flex-col gap-4 p-2 w-full">
        <div>
          <div class="col-span-2 p-4">
            <div class="prose">
              <ContentRenderer
                v-if="page"
                class="max-w-full prose-w-full prose prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-headings:text-primary dark:prose-headings:text-white dark:prose-invert prose-a:text-blue-500 prose-a:underline prose-a:decoration-primary-foreground"
                :value="page"
              />
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
