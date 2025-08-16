import type { StackCollectionItem } from "@nuxt/content";

export const useContent = () => {
  const route = useRoute()
  const role = route.query.role
  const key = (suffix: string) => `content-${role ?? 'all'}-${suffix}`
  const { data: projects } = useAsyncData(
    key('projects'), 
    () => {
      let query = queryCollection("projects").order("title", "ASC")
      if (role) query = query.where("role", "=", role)
      return query.all()
    }
  );

  const { data: profile } = useAsyncData(
    key("profile"),
    () => queryCollection("profile").where("role", "=", role ?? 'all').first()
  );

  const { data: socials } = useAsyncData(
    "socials",
    () => queryCollection("socials").first()
  );

  const { data: contacts } = useAsyncData(
    "contacts", 
    () => queryCollection("contacts").first()
  );

  const { data: stacks } = useAsyncData(
    key("stacks"),
    async () => {
      const results = await queryCollection("stack").all()
       if (role) return results.filter((item: StackCollectionItem) => item.role?.includes(role as string))
      return results
    }
  );

  return {
    profile,
    projects,
    stacks,
    socials: socials.value?.items,
    contacts: contacts.value?.items,
  };
};
