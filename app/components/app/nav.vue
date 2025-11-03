<script setup lang="ts">
import { navs, socials, contact } from "~/constants";
const { isCurrentRoute } = useNav(navs);
const { path, name } = useRoute();
const isBlogActive = computed(() => path.startsWith("/blog"));
</script>

<template>
  <SidebarGroup class="px-2 py-0 mb-2">
    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem v-for="item in navs" :key="item.order">
        <SidebarMenuButton
          as-child
          :is-active="isCurrentRoute(item.id) && name === 'index'"
          :tooltip="item.label"
        >
          <NuxtLink :to="'/#' + item.id">
            <Icon v-if="item.icon" :name="item.icon" width="50" />
            <span>{{ item.label }}</span>
          </NuxtLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton as-child :is-active="isBlogActive" tooltip="blog">
          <NuxtLink to="/blog">
            <Icon name="lucide:book" width="50" />
            <span>Blog</span>
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
            <Icon v-if="item.icon" :name="item.icon" width="50" />
            <span>{{ item.text }}</span>
          </NuxtLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
  <SidebarGroup class="px-2 py-0">
    <SidebarGroupLabel>Socials</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem v-for="item in socials" :key="item.platform">
        <SidebarMenuButton as-child :tooltip="item.platform">
          <NuxtLink :href="item.url" target="_blank">
            <Icon v-if="item.icon" :name="item.icon" width="50" />
            <span>{{ item.platform }}</span>
          </NuxtLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
</template>
