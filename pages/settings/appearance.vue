<script setup lang="ts">
import AppearanceTabs from "@/components/AppearanceTabs.vue";
import HeadingSmall from "@/components/HeadingSmall.vue";
import SettingsLayout from "~/layouts/settings.vue";
import { Monitor, Moon, Sun, type LucideIcon } from "lucide-vue-next";
import type { Appearance, Layout } from "~/types";
useAppTitle("Appearance Setting");

const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = [
  {
    title: "Appearance settings",
    href: "settings-appearance",
  },
];
const { layout, setLayout } = useLayout();

definePageMeta({
  title: "Appearance settings",
  middleware: ["auth"],
});

const { appearance, updateAppearance } = useAppearance();
interface Tab<T> {
  value: T;
  icon: LucideIcon;
  label: string;
}
const themeTabs: Tab<Appearance>[] = [
  { value: "light", icon: Sun, label: "Light" },
  { value: "dark", icon: Moon, label: "Dark" },
  { value: "system", icon: Monitor, label: "System" },
];

const layoutTabs: Tab<Layout>[] = [
  { value: "sidebar", icon: Monitor, label: "Sidebar" },
  { value: "topbar", icon: Monitor, label: "Topbar" },
];
</script>

<template>
  <SettingsLayout>
    <div class="space-y-6">
      <HeadingSmall
        title="Appearance settings"
        description="Update your account's appearance settings"
      />
      <div>
        <h2 class="text-lg font-semibold leading-none tracking-tight">Theme</h2>
        <p class="text-sm text-muted-foreground">
          Select the theme for the dashboard.
        </p>
        <AppearanceTabs
          :update-value="updateAppearance"
          :tabs="themeTabs"
          :appearance="appearance"
        />
      </div>

      <div>
        <h2 class="text-lg font-semibold leading-none tracking-tight">
          Layout
        </h2>
        <p class="text-sm text-muted-foreground">
          Select the layout for the dashboard.
        </p>
        <AppearanceTabs
          :update-value="setLayout"
          :tabs="layoutTabs"
          :appearance="layout"
        />
      </div>
    </div>
  </SettingsLayout>
</template>
