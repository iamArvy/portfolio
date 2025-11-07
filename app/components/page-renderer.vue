<script setup lang="ts">
import type { PageCollectionItemBase } from '@nuxt/content';
const props = defineProps<{ page: PageCollectionItemBase }>();
const { isCurrentRoute } = useNav(props.page.body?.toc?.links ?? []);
</script>
<template>
  <section>
    <div class="lg:grid grid-cols-4 gap-3 p-3">
      <div class="lg:col-span-3">
        <ContentRenderer
          class="container mx-auto py-5 prose-sm md:prose-md lg:prose-lg xl:prose-xl prose-h1:font-bold prose-h2:font-bold prose-li:list-disc prose-ol:list-decimal prose-h1:text-xl prose-h2:text-lg prose-h3:text-base prose-headings:text-primary dark:prose-headings:text-white dark:prose-invert prose-a:text-blue-500 prose-a:underline prose-a:decoration-primary-foreground"
          :value="page" />
      </div>
      <div class="hidden lg:block relative">
        <div class="sticky top-20">
          <div class="space-y-1">
            <h3 class="font-bold">On this page</h3>
            <ul class="p-2 space-y-0.5">
              <li v-for="item in page?.body?.toc?.links" :key="item.id">
                <NuxtLink :to="`#${item.id}`" class="text-sm hover:font-bold transition-all ease-in-out duration-200"
                  :class="[
                    isCurrentRoute(item.id) ? ' font-bold' : '',
                    item.depth === 3 ? 'ml-2' : '',
                  ]">
                  {{ item.text }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
