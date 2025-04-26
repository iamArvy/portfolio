<script setup lang="ts">
import AppLogoIcon from "@/components/AppLogoIcon.vue";
const name = "Weaver's Dashboard"; // Replace with your app name
const quote = {
  message:
    "People usually speak about it as though luck is something that just happens to you. It's not. Luck is fifty percent circumstance and fifty percent your own ability to grasp it. Luck is something you have to make happen yourself.", // Replace with your quote message
  author: "Sunny", // Replace with your quote author
};

const { props } = useAuthBaseProps();
</script>

<template>
  <div
    class="relative grid h-dvh flex-col items-center justify-center px-8 sm:px-0 lg:max-w-none lg:grid-cols-2 lg:px-0"
  >
    <div
      class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"
    >
      <div class="absolute inset-0 bg-zinc-900" />
      <NuxtLink
        :to="{ name: 'index' }"
        class="relative z-20 flex items-center text-lg font-medium"
      >
        <AppLogoIcon class="mr-2 size-8 fill-current text-white" />
        {{ name }}
      </NuxtLink>
      <div v-if="quote" class="relative z-20 mt-auto">
        <blockquote class="space-y-2">
          <p class="text-lg">&ldquo;{{ quote.message }}&rdquo;</p>
          <footer class="text-sm text-neutral-300">{{ quote.author }}</footer>
        </blockquote>
      </div>
    </div>
    <div class="lg:p-8">
      <div
        class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
      >
        <div class="flex flex-col space-y-2 text-center">
          <h1 v-if="props?.title" class="text-xl font-medium tracking-tight">
            {{ props.title }}
          </h1>
          <p v-if="props?.description" class="text-sm text-muted-foreground">
            {{ props.description }}
          </p>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>
