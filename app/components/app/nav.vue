<script setup lang="ts">
import { navs, socials, contact } from "~/constants";
const route = useRoute();
</script>

<template>
  <SidebarGroup class="px-2 py-0 mb-2">
    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem v-for="(item, index) in navs" :key="index">
        <SidebarMenuButton as-child :is-active="route.path === item.path" :tooltip="item.label">
          <NuxtLink :to="item.path">
            <Icon :name="item.icon" mode="svg" class="w-5 h-5 mr-1 inline-block" />
            <span>{{ item.label }}</span>
          </NuxtLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
  <SidebarGroup class="px-2 py-0 mb-2">
    <SidebarGroupLabel>Contact</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem v-for="item in contact" :key="item.label">
        <SidebarMenuButton as-child :tooltip="item.label">
          <NuxtLink :href="item.url" target="_blank">
            <Icon :name="item.icon" mode="svg" class="w-5 h-5 mr-1 inline-block" />
            <span>{{ item.value }}</span>
          </NuxtLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
  <SidebarGroup class="px-2 py-0 mb-2">
    <SidebarGroupLabel>Socials</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem v-for="item in socials" :key="item.label">
        <SidebarMenuButton as-child :tooltip="item.label">
          <NuxtLink :href="item.url" target="_blank">
            <Icon :name="item.icon" mode="svg" class="w-5 h-5 mr-1 inline-block" />
            <span>{{ item.label }}</span>
          </NuxtLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
</template>
