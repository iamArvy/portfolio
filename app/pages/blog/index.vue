<script setup lang="ts">
import { FolderCode } from "lucide-vue-next";

const { data: blog } = await useAsyncData(`blog`, () => {
  return queryCollection("blogs").order("publishedAt", "DESC").all();
});
useAppTitle("Blog");
const breadcrumbs = useBreadcrumbs();
onMounted(() => {
  breadcrumbs.value = [
    {
      title: `Arvy's Blog`,
    },
  ];
});
</script>

<template>
  <main class="container mx-auto my-4 px-4 space-y-5">
    <section class="space-y-6">
      <div v-if="blog?.length" class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <BlogCard v-for="(post, index) in blog" :key="post.slug" :post="post" data-aos="fade-up"
          :style="{ animationDelay: `${index * 100}ms` }" />
      </div>
      <Empty v-else>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <FolderCode />
          </EmptyMedia>
          <EmptyTitle>No Posts Found</EmptyTitle>
          <EmptyDescription>
            No posts found for this category or search. Try again later.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </section>
  </main>
</template>
