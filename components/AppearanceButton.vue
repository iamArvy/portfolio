<script setup lang="ts">
import AppearanceTabs from "@/components/AppearanceTabs.vue";
import type { Appearance, Layout } from "~/types";
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { Icon } from "@iconify/vue";
// const { layout, setLayout } = useLayout();
const { appearance, updateAppearance } = useAppearance();
interface Tab<T> {
  value: T;
  icon: string;
  label: string;
}
const themeTabs: Tab<Appearance>[] = [
  { value: "light", icon: "lucide:sun", label: "Light" },
  { value: "dark", icon: "lucide:moon", label: "Dark" },
  { value: "system", icon: "lucide:monitor", label: "System" },
];
// const layoutTabs: Tab<Layout>[] = [
//   { value: "sidebar", icon: "lucide:sidebar", label: "Sidebar" },
//   { value: "topbar", icon: "icon-park-outline:top-bar", label: "Topbar" },
// ];
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger :as-child="true">
      <Button variant="ghost" size="icon">
        <Icon icon="lucide:paintbrush" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="px-1 py-2 min-w-sm" align="end">
      <DropdownMenuLabel class="flex-col">
        <h1 class="text-lg">Theming Configuration</h1>
      </DropdownMenuLabel>

      <div class="flex-col gap-2 px-2">
        <AppearanceTabs
          title="Theme"
          :update-value="updateAppearance"
          :tabs="themeTabs"
          :appearance="appearance"
        />

        <!-- <AppearanceTabs
          title="Layout"
          :update-value="setLayout"
          :tabs="layoutTabs"
          :appearance="layout"
        /> -->
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
