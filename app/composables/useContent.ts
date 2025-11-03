import type { StackCollectionItem } from "@nuxt/content";

export const useContent = () => {
  const route = useRoute()
  const role = useState<string>('role', () => route.query.role as string || 'all')
  const key = (suffix: string) => `content-${role.value ?? 'all'}-${suffix}`

  const { data: projects } = useAsyncData(
    key('projects'), 
    () => {
      let query = queryCollection("projects").order("rating", "DESC")
      if (role.value && role.value !== 'all') query = query.where("role", "=", role.value)
      return query.all()
    },
    { watch: [role] }
  );

  const { data: profile } = useAsyncData(
    key("profile"),
    () => {
      return queryCollection("profile")
      .where("role", "=", role.value)
      .first()
    },
    { watch: [role] }
  );

  const { data: socials } = useAsyncData(
    "socials",
    () => queryCollection("socials").first()
  );

  const { data: contacts } = useAsyncData(
    "contacts", 
    () => queryCollection("contacts").first()
  );

  const { data: roles } = useAsyncData(
    "roles", 
    () => queryCollection("roles").first()
  );

  const { data: stacks } = useAsyncData(
    key("stacks"),
    async () => {
      const results = await queryCollection("stack").all()
       if (role.value && role.value !== 'all') return results.filter((item: StackCollectionItem) => item.role?.includes(role.value))
      return results
    },
    { watch: [role] }
  );

  return {
    profile,
    projects,
    stacks,
    socials: socials.value?.items,
    contacts: contacts.value?.items,
    roles: roles.value?.items,
  };
};
