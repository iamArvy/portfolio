<script setup lang="ts">
const { params, path } = useRoute();
const slug = params.slug as string;
const { data: blog } = await useAsyncData(`blogs-${slug}`, () => {
  return queryCollection("blogs").path(path).limit(1).first();
});
if (!blog.value) {
  throw createError({ statusCode: 404, statusMessage: "Blog not found" });
}
const breadcrumbs = useBreadcrumbs();
onMounted(() => {
  breadcrumbs.value = [
    {
      title: `Blog`,
      href: "/blog",
    },
    {
      title: blog.value?.title ?? "",
    },
  ];
});
useAppTitle(blog.value?.title ?? "Blog");
</script>
<template>
  <PageRenderer v-if="blog" :page="blog" />
</template>
