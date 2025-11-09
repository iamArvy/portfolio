<script setup lang="ts">
import { FolderCode } from 'lucide-vue-next';

const breadcrumbs = useBreadcrumbs();
onMounted(() => {
  breadcrumbs.value = [
    {
      title: `Projects`
    },
  ];
});
const { data: projects, pending, error } = await useAsyncData(
  'projects',
  () => queryCollection("projects").order("rating", "DESC").all()
);
const filters = useProjectFilter()

const filteredProjects = computed(() => {
  if (!projects.value) return []

  let filtered = projects.value

  if (filters.value.stack.length > 0) {
    filtered = filtered.filter((project) =>
      filters.value.stack.some((slug) =>
        project.technologies.some((tech) => tech.slug === slug)
      )
    )
  }

  return filtered
})


</script>
<template>
  <GridRenderer v-if="filteredProjects && filteredProjects.length > 0">
    <ProjectItem v-for="project in filteredProjects" :key="project.title" :project="project" />
  </GridRenderer>
  <Empty v-else>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <FolderCode />
      </EmptyMedia>
      <EmptyTitle>No Projects Found</EmptyTitle>
      <EmptyDescription>
        No projects found for this role. Try again later.
      </EmptyDescription>
    </EmptyHeader>
  </Empty>
</template>
