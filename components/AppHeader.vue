<script setup lang="ts">
// import Breadcrumbs from "~/components/BreadcrumbsComponent.vue";
// import { Button } from "~/components/ui/button";
import {
  // NavigationMenu,
  // NavigationMenuItem,
  // NavigationMenuLink,
  // NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "~/components/ui/sheet";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "~/components/ui/tooltip";
import type { BreadcrumbItem } from "~/types";
import { Menu, Search } from "lucide-vue-next";
import { computed } from "vue";
import { Icon } from "@iconify/vue";
import { navs } from "~/data";

interface Props {
  breadcrumbs?: BreadcrumbItem[];
}

const props = withDefaults(defineProps<Props>(), {
  breadcrumbs: () => [],
});

const nav = useNav();
const { socials, contacts } = await useContent();
const activeItemStyles = computed(
  () => (url: string) =>
    nav.isCurrentRoute(url)
      ? "text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
      : ""
);
</script>

<template>
  <div>
    <div class="border-b border-sidebar-border/80">
      <div class="mx-auto flex h-16 items-center px-4 md:max-w-7xl">
        <!-- Mobile Menu -->
        <div class="lg:hidden">
          <Sheet>
            <SheetTrigger :as-child="true">
              <Button variant="ghost" size="icon" class="mr-2 h-9 w-9">
                <Menu class="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" class="w-[300px] p-3">
              <SheetTitle class="sr-only">Navigation Menu</SheetTitle>
              <SheetHeader
                class="flex flex-row items-center justify-start text-left"
              >
                <AppLogo />
              </SheetHeader>
              <div
                class="flex h-full flex-1 flex-col justify-between space-y-4"
              >
                <nav class="-mx-1 space-y-1">
                  <NuxtLink
                    v-for="item in navs"
                    :key="item.title"
                    :to="item.href"
                    active-class="text-neutral-900 bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-100"
                    class="flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent"
                  >
                    <Icon v-if="item.icon" :icon="item.icon" class="h-5 w-5" />
                    {{ item.title }}
                  </NuxtLink>
                </nav>
                <div class="flex flex-col gap-4">
                  <div class="flex flex-col space-y-4">
                    <NuxtLink
                      v-for="item in contacts"
                      :key="item.text"
                      :to="item.url"
                      target="_blank"
                      class="flex items-center space-x-2 text-sm font-medium"
                    >
                      <Icon
                        v-if="item.icon"
                        :icon="item.icon"
                        class="h-5 w-5"
                      />
                      <span>{{ item.text }}</span>
                    </NuxtLink>
                  </div>
                  <div class="flex flex-col space-y-4">
                    <NuxtLink
                      v-for="item in socials"
                      :key="item.platform"
                      :to="item.url"
                      target="_blank"
                      class="flex items-center space-x-2 text-sm font-medium"
                    >
                      <Icon
                        v-if="item.icon"
                        :icon="item.icon"
                        class="h-5 w-5"
                      />
                      <span>{{ item.platform }}</span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <NuxtLink to="/dashboard" class="flex items-center gap-x-2">
          <AppLogo />
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden h-full lg:flex lg:flex-1">
          <NavigationMenu class="ml-10 flex h-full items-stretch">
            <NavigationMenuList class="flex h-full items-stretch space-x-2">
              <NavigationMenuItem
                v-for="(item, index) in navs"
                :key="index"
                class="relative flex h-full items-center"
              >
                <NuxtLink :to="item.href">
                  <NavigationMenuLink
                    :class="[
                      navigationMenuTriggerStyle(),
                      activeItemStyles(item.href),
                      'h-9 cursor-pointer px-3',
                    ]"
                  >
                    <Icon
                      v-if="item.icon"
                      :icon="item.icon"
                      class="mr-2 h-4 w-4"
                    />
                    {{ item.title }}
                  </NavigationMenuLink>
                </NuxtLink>
                <div
                  v-if="nav.isCurrentRoute(item.href)"
                  class="absolute bottom-0 left-0 h-0.5 w-full translate-y-px bg-black dark:bg-white"
                >
                  <span />
                </div>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div class="ml-auto flex items-center space-x-2">
          <div class="relative flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              class="group h-9 w-9 cursor-pointer"
            >
              <Search class="size-5 opacity-80 group-hover:opacity-100" />
            </Button>
            <TooltipProvider :delay-duration="0">
              <Tooltip>
                <TooltipTrigger><AppearanceButton /></TooltipTrigger>
                <TooltipContent>Appearance Settings</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div class="hidden space-x-1 lg:flex">
              <template v-for="item in contacts" :key="item.text">
                <TooltipProvider :delay-duration="0">
                  <Tooltip>
                    <TooltipTrigger>
                      <Button
                        variant="ghost"
                        size="icon"
                        as-child
                        class="group h-9 w-9 cursor-pointer"
                      >
                        <NuxtLink :to="item.url" target="_blank">
                          <span class="sr-only">{{ item.text }}</span>
                          <Icon
                            v-if="item.icon"
                            :icon="item.icon"
                            class="size-5 opacity-80 group-hover:opacity-100"
                          />
                        </NuxtLink>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{{ item.text }}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </template>
            </div>

            <div class="hidden space-x-1 lg:flex">
              <template v-for="item in socials" :key="item.platform">
                <TooltipProvider :delay-duration="0">
                  <Tooltip>
                    <TooltipTrigger>
                      <Button
                        variant="ghost"
                        size="icon"
                        as-child
                        class="group h-9 w-9 cursor-pointer"
                      >
                        <NuxtLink :to="item.url" target="_blank">
                          <span class="sr-only">{{ item.platform }}</span>
                          <Icon
                            v-if="item.icon"
                            :icon="item.icon"
                            class="size-5 opacity-80 group-hover:opacity-100"
                          />
                        </NuxtLink>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{{ item.platform }}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </template>
            </div>
          </div>

          <!-- <DropdownMenu>
            <DropdownMenuTrigger :as-child="true">
              <Button
                variant="ghost"
                size="icon"
                class="relative size-10 w-auto rounded-full p-1 focus-within:ring-2 focus-within:ring-primary"
              >
                <Avatar class="size-8 overflow-hidden rounded-full">
                  <AvatarImage
                    v-if="user?.avatar"
                    :src="user?.avatar"
                    :alt="user?.name"
                  />
                  <AvatarFallback
                    class="rounded-lg bg-neutral-200 font-semibold text-black dark:bg-neutral-700 dark:text-white"
                  >
                    {{ getInitials(user?.name) }}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent v-if="user" class="w-56" align="end">
              <UserMenuContent :user="user" />
            </DropdownMenuContent>
          </DropdownMenu> -->
        </div>
      </div>
    </div>

    <div
      v-if="props.breadcrumbs.length > 1"
      class="flex w-full border-b border-sidebar-border/70"
    >
      <div
        class="mx-auto flex h-12 w-full items-center justify-start px-4 text-neutral-500 md:max-w-7xl"
      >
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
    </div>
  </div>
</template>
