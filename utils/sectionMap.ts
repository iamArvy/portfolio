import type { Component } from 'vue'

export const sectionMap: Record<string, Component> = {
  ProfileSection: defineAsyncComponent(() => import('~/components/profile/Section.vue')),
  ProjectSection: defineAsyncComponent(() => import('~/components/project/Section.vue')),
  StackSection: defineAsyncComponent(() => import('~/components/stack/Section.vue')),
}
