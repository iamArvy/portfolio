<script setup lang="ts">
import { navs, socials, contact } from "~/constants";
// const { isCurrentRoute } = useNav(navs);
const { path, name } = useRoute();
const isBlogActive = computed(() => path.startsWith("/blog"));
</script>

<template>
  <SidebarGroup class="px-2 py-0 mb-2">
    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem v-for="item in navs" :key="item.order">
        <SidebarMenuButton as-child :is-active="path === item.path" :tooltip="item.label">
          <NuxtLink :to="item.path">
            <component :is="item.icon" class="w-5 h-5 mr-1 inline-block" />
            <span>{{ item.label }}</span>
          </NuxtLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
  <SidebarGroup class="px-2 py-0 mb-2">
    <SidebarGroupLabel>Contact</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem v-for="item in contact" :key="item.text">
        <SidebarMenuButton as-child :tooltip="item.text">
          <NuxtLink :href="item.url" target="_blank">
            <component :is="item.icon" class="w-5 h-5 mr-1 inline-block" />
            <span>{{ item.text }}</span>
          </NuxtLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
</template>
