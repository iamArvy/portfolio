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
      title: `Blog`,
    },
  ];
});
</script>

<template>
  <main class="container mx-auto my-4 px-4 space-y-5">
    <section class="space-y-6">
      <GridRenderer v-if="blog?.length">
        <BlogItem v-for="(post, index) in blog" :key="post.title" :post="post" data-aos="fade-up"
          :style="{ animationDelay: `${index * 100}ms` }" />
      </GridRenderer>
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
