<script setup lang="ts">
const breadcrumbs = useBreadcrumbs();
onMounted(() => {
  breadcrumbs.value = [
    {
      title: 'Profile',
    },
  ];
});
const { data, pending, error } = await useAsyncData(
  'homepage',
  async () => {
    const projectsPromise = (async () => {
      return queryCollection("projects").order("rating", "DESC").limit(4).all();
    })();
    const stacksPromise = (async () => {
      return queryCollection("stack").all();
    })();
    const blogPromise = (async () => {
      return queryCollection("blogs").order("publishedAt", "DESC").limit(4).all();
    })();

    const [projects, stacks, blog] = await Promise.all([
      projectsPromise,
      stacksPromise,
      blogPromise
    ]);
    return { projects, stacks, blog };
  }
);
</script>
<template>
  <div>
    <ProfileInformation />
    <div id="stacks">
      <Stacks :stacks="data?.stacks" />
    </div>
    <SectionLayout title="Featured Projects" description="A showcase of my most impactful and polished work.">
      <GridRenderer>
        <ProjectItem v-for="project in data?.projects" :key="project.title" :project="project" />
      </GridRenderer>
    </SectionLayout>
    <SectionLayout title="Latest Blogs" description="Some of my latest writings and tutorials.">
      <GridRenderer>
        <BlogItem v-for="post in data?.blog" :key="post.title" :post="post" />
      </GridRenderer>
    </SectionLayout>
    <ProfileContact />
  </div>
</template>
