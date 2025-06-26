<script setup lang="ts">
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import { Icon } from "@iconify/vue";
import { navs } from "~/data";

const { isCurrentRoute } = useNav(navs);
const { socials, contacts } = useContent();
</script>

<template>
  <SidebarGroup class="px-2 py-0 mb-2">
    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem v-for="item in navs" :key="item.title">
        <SidebarMenuButton
          as-child
          :is-active="isCurrentRoute(item.href)"
          :tooltip="item.title"
        >
          <NuxtLink :href="'#' + item.href">
            <Icon v-if="item.icon" :icon="item.icon" width="50" />
            <span>{{ item.title }}</span>
          </NuxtLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
  <SidebarGroup class="px-2 py-0 mb-2">
    <SidebarGroupLabel>Contact</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem v-for="item in contacts" :key="item.text">
        <SidebarMenuButton as-child :tooltip="item.text">
          <NuxtLink :href="item.url" target="_blank">
            <Icon v-if="item.icon" :icon="item.icon" width="50" />
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
            <Icon v-if="item.icon" :icon="item.icon" width="50" />
            <span>{{ item.platform }}</span>
          </NuxtLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
</template>
