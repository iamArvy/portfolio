<template>
  <NuxtLoadingIndicator />
  <Transition name="page" mode="out-in">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Transition>
</template>

<style>
.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.page-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.page-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
