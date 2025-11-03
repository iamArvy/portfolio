<script setup lang="ts">
import type { StackCollectionItem } from "@nuxt/content";
import { name } from "~/constants";

const breadcrumbs = useBreadcrumbs();
onMounted(() => {
  breadcrumbs.value = [
    {
      title: `${name}  Portfolio`,
    },
  ];
});
const { roles, role } = useRoles();
const { data, pending, error } = await useAsyncData(
  `homepage${role.value ? " " + role.value : ""}`,
  async () => {
    const projectsPromise = (async () => {
      let query = queryCollection("projects").order("rating", "DESC");
      if (role.value && role.value !== "all")
        query = query.where("role", "=", role.value);
      return query.all();
    })();

    const profilePromise = (async () => {
      return queryCollection("profile").where("role", "=", role.value).first();
    })();

    const stacksPromise = (async () => {
      const results = await queryCollection("stack").all();
      if (role.value && role.value !== "all")
        return results.filter((item: StackCollectionItem) =>
          item.role?.includes(role.value)
        );
      return results;
    })();

    // Run all in parallel
    const [projects, profile, stacks] = await Promise.all([
      projectsPromise,
      profilePromise,
      stacksPromise,
    ]);

    return { projects, profile, roles, stacks };
  },
  { watch: [role] }
);
</script>
<template>
  <div
    class="flex h-full flex-1 flex-col gap-4 rounded-xl lg:px-4 overflow-x-auto"
  >
    <div id="profile">
      <Profile :profile="data?.profile" />
    </div>
    <div id="stacks">
      <Stacks :stacks="data?.stacks" />
    </div>
    <div id="projects">
      <Projects :projects="data?.projects" />
    </div>
  </div>
</template>
