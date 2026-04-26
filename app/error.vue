<template>
  <div class="flex min-h-screen items-center justify-center px-4">
    <div class="max-w-md text-center">
      <h1 class="font-display text-8xl font-semibold text-gold-gradient">
        404
      </h1>
      <h2 class="mt-4 font-display text-2xl font-semibold text-foreground">
        Lost in the void
      </h2>
      <p class="mt-2 text-sm text-muted-foreground">
        The page you're looking for drifted off the navigation map.
      </p>
      <div class="mt-8">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 rounded-full bg-linear-to-br from-gold to-gold-soft px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
        >
          ← Return home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
