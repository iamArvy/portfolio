<script setup lang="ts">
import AppLogoIcon from "@/components/AppLogoIcon.vue";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const { props } = useAuthBaseProps();
</script>

<template>
  <div
    class="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10"
  >
    <div class="flex w-full max-w-md flex-col gap-6">
      <NuxtLink
        :to="{ name: 'index' }"
        class="flex items-center gap-2 self-center font-medium"
      >
        <div class="flex h-9 w-9 items-center justify-center">
          <AppLogoIcon class="size-9 fill-current text-black dark:text-white" />
        </div>
      </NuxtLink>

      <div class="flex flex-col gap-6">
        <Card class="rounded-xl">
          <CardHeader class="px-10 pb-0 pt-8 text-center">
            <CardTitle class="text-xl">{{ props?.title }}</CardTitle>
            <CardDescription>
              {{ props?.description }}
            </CardDescription>
          </CardHeader>
          <CardContent class="px-10 py-8">
            <slot />
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>
