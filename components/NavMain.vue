<script setup lang="ts">
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import type { NavItem } from "@/types";
import { Icon } from "@iconify/vue";

defineProps<{
  items: NavItem[];
}>();

const nav = useNav();
</script>

<template>
  <SidebarGroup class="px-2 py-0">
    <SidebarGroupLabel>Platform</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem v-for="item in items" :key="item.title">
        <SidebarMenuButton
          as-child
          :is-active="nav.isCurrentRoute(item.href)"
          :tooltip="item.title"
        >
          <NuxtLink :href="item.href">
            <Icon v-if="item.icon" :icon="item.icon" width="50" />
            <span>{{ item.title }}</span>
          </NuxtLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
</template>
