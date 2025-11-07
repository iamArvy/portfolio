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
      return queryCollection("projects").order("rating", "DESC").limit(3).all();
    })();
    const stacksPromise = (async () => {
      return queryCollection("stack").all();
    })();

    const [projects, stacks] = await Promise.all([
      projectsPromise,
      stacksPromise,
    ]);
    console.log(projects, stacks);
    return { projects, stacks };
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
    <SectionLayout id="projects" title="Featured Projects"
      description="A showcase of my most impactful and polished work.">
      <div class="flex flex-wrap space-y-3 justify-center auto-rows-min md:grid-cols-2 lg:grid-cols-3 ">
        <ProjectItem v-for="project in data?.projects" :key="project.title" :project="project" class="lg:w-1/2 px-1" />
      </div>
    </SectionLayout>
    <div id="stacks">
      <Stacks :stacks="data?.stacks" />
    </div>
  </div>
</template>
