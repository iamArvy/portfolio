<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { navs } from "~/constants";
const { socials, contacts } = useContent();
const { isCurrentRoute } = useNav();

</script>

<template>
  <SidebarGroup class="px-2 py-0 mb-2">
    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem v-for="item in navs" :key="item.order">
        <SidebarMenuButton as-child :is-active="isCurrentRoute(item.id)" :tooltip="item.label">
          <NuxtLink :href="'#' + item.id">
            <Icon v-if="item.icon" :icon="item.icon" width="50" />
            <span>{{ item.label }}</span>
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
