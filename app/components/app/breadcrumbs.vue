<script setup lang="ts">
import type { Breadcrumb } from "~/interfaces";

defineProps<{
  breadcrumbs: Breadcrumb[];
}>();
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <template v-for="(item, index) in breadcrumbs" :key="index">
        <BreadcrumbItem>
          <template v-if="index === breadcrumbs.length - 1">
            <BreadcrumbPage>{{ item.title }}</BreadcrumbPage>
          </template>
          <template v-else>
            <BreadcrumbLink as-child>
              <NuxtLink :href="item.href ?? '#'">{{ item.title }}</NuxtLink>
            </BreadcrumbLink>
          </template>
        </BreadcrumbItem>
        <BreadcrumbSeparator v-if="index !== breadcrumbs.length - 1" />
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>
