<script setup lang="ts">
import { profile } from "~/constants";

const breadcrumbs = useBreadcrumbs();
onMounted(() => {
  breadcrumbs.value = [
    {
      title: `${profile.name}  Portfolio`,
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
  <div class="flex h-full flex-1 flex-col gap-4 rounded-xl lg:px-4 overflow-x-auto">
    <section class="p-2">
      <div class="flex flex-row space-x-3 lg:space-x-7">
        <NuxtImg :src="profile.image" :alt="profile.name" class="rounded-sm" placeholder quality="100"
          sizes="100 md:150 lg:250px" fit="contain" />
        <div class="flex flex-col space-y-2 col-span-2">
          <div>
            <h1 class="text-xl sm:text-2xl md:text-4xl font-bold text-sidebar-primary">
              {{ profile.name }}
            </h1>
            <h3 class="text-sm md:text-lg font-bold">
              {{ profile.job_description }}
            </h3>
          </div>
          <p class="hidden lg:flex text-sm lg:text-base">
            {{ profile.bio }}
          </p>
          <ResumeButton v-if="profile.resume" :file="profile.resume" />
        </div>
      </div>
      <p class="lg:hidden mt-3 text-sm md:text-base">
        {{ profile.bio }}
      </p>
    </section>
    <div id="stacks">
      <Stacks :stacks="data?.stacks" />
    </div>
    <SectionLayout id="projects" title="Featured Projects"
      description="A showcase of my most impactful and polished work.">
      <GridRenderer>
        <ProjectItem v-for="project in data?.projects" :key="project.title" :project="project" />
      </GridRenderer>
    </SectionLayout>
    <SectionLayout id="projects" title="Latest Blogs" description="Some of my latest writings and tutorials.">
      <GridRenderer>
        <BlogItem v-for="post in data?.blog" :key="post.title" :post="post" />
      </GridRenderer>
    </SectionLayout>
  </div>
</template>
