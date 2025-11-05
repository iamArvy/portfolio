<script setup lang="ts">
import { socials } from "~/constants";
import Breadcrumbs from "./breadcrumbs.vue";
const breadcrumbs = useBreadcrumbs();
const { name } = useRoute()
</script>

<template>
  <header
    class="flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border/70 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
    <div class="flex items-center gap-2 w-full">
      <SidebarTrigger class="-ml-1" />
      <template v-if="breadcrumbs && breadcrumbs.length > 0">
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
      </template>
      <div class="ml-auto flex items-center gap-0.5">
        <RoleSwitcher v-if="name === 'projects'" />
        <Button as-child v-for="item in socials" variant="ghost" size="icon">
          <NuxtLink :href="item.url">
            <Icon :name="item.icon" />
          </NuxtLink>
        </Button>
        <AppearanceButton />
      </div>
    </div>
  </header>
</template>
