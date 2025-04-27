<script setup lang="ts">
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import type { NavItem } from "@/types";
import { Icon } from "@iconify/vue";
interface Props {
  items: NavItem[];
  class?: string;
}

defineProps<Props>();
</script>

<template>
  <SidebarGroup
    :class="`group-data-[collapsible=icon]:p-0 ${$props.class || ''}`"
  >
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem v-for="item in items" :key="item.title">
          <SidebarMenuButton
            class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100"
            as-child
          >
            <a :href="item.href" target="_blank" rel="noopener noreferrer">
              <Icon
                v-if="item.icon"
                :icon="item.icon"
                inline
                class="w-[20px]"
              />
              <span>{{ item.title }}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
</template>
