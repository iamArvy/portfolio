import type { Component } from 'vue'

export const sectionMap: Record<string, Component> = {
  ProfileSection: defineAsyncComponent(() => import('~/components/profile/index.vue')),
  ProjectSection: defineAsyncComponent(() => import('~/components/project/index.vue')),
  StackSection: defineAsyncComponent(() => import('~/components/stack/index.vue')),
}
