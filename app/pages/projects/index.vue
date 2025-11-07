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
const { role } = useRoles();
const { data: projects, pending, error } = await useAsyncData(
  `projects${role.value ? " " + role.value : ""}`,
  async () => {
    let query = queryCollection("projects").order("rating", "DESC");
    if (role.value && role.value !== "all")
      query = query.where("role", "=", role.value);
    return query.all();
  },
  { watch: [role] }
);
</script>
<template>
  <section v-if="projects && projects.length > 0" class="grid grid-cols-2 lg:grid-cols-4 gap-4 space-y-3">
    <ProjectItem v-for="project in projects" :key="project.title" :project="project" />
  </section>
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
