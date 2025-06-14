<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

// interface BreadcrumbItem {
//   title: string;
//   href?: string;
// }

const props = defineProps<{
  breadcrumbs: string[];
}>();

const computedBreadcrumbs = computed(() => {
  if (
    !props.breadcrumbs ||
    props.breadcrumbs.length === 0 ||
    !props.breadcrumbs.every((item) => typeof item === "string")
  )
    return null;
  const parts: string[] = [];
  return props.breadcrumbs.map((item) => {
    // Use slugified versions if needed, or lowercase
    const slug = item.toLowerCase().replace(/\s+/g, "-");
    parts.push(slug);
    return {
      slug,
      href: parts.join("/"),
    };
  });
});
</script>

<template>
  <Breadcrumb v-if="computedBreadcrumbs">
    <BreadcrumbList>
      <template v-for="(item, index) in computedBreadcrumbs" :key="index">
        <BreadcrumbItem class="capitalize">
          <template v-if="index === computedBreadcrumbs.length - 1">
            <BreadcrumbPage class="font-bold">{{ item.slug }}</BreadcrumbPage>
          </template>
          <template v-else>
            <BreadcrumbLink as-child>
              <NuxtLink :href="'/' + item.href">{{ item.slug }}</NuxtLink>
            </BreadcrumbLink>
          </template>
        </BreadcrumbItem>
        <BreadcrumbSeparator v-if="index !== breadcrumbs.length - 1" />
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>
