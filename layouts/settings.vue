<script setup lang="ts">
import { NuxtLayout } from "#components";
import Heading from "@/components/Heading.vue";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { settingsNavItems } from "~/data/nav";

const nav = useNav();
const { layoutName } = useLayout();
</script>

<template>
  <NuxtLayout :name="layoutName">
    <div class="px-4 py-6">
      <Heading
        title="Settings"
        description="Manage your profile and account settings"
      />

      <div
        class="flex flex-col space-y-8 md:space-y-0 lg:flex-row lg:space-x-12 lg:space-y-0"
      >
        <aside class="w-full max-w-xl lg:w-48">
          <nav class="flex flex-col space-x-0 space-y-1">
            <Button
              v-for="item in settingsNavItems"
              :key="item.href"
              variant="ghost"
              :class="[
                'w-full justify-start',
                { 'bg-muted': nav.isCurrentRoute(item.href) },
              ]"
              as-child
            >
              <NuxtLink :to="{ name: item.href }">
                {{ item.title }}
              </NuxtLink>
            </Button>
          </nav>
        </aside>

        <Separator class="my-6 md:hidden" />

        <div class="flex-1 md:max-w-2xl">
          <section class="max-w-xl space-y-12">
            <slot />
          </section>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
