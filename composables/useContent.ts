export const useContent = () => {
  const { data: projects } = useAsyncData("projects", async () => {
    return queryCollection("projects").order("title", "ASC").all();
  });

  const { data: profile } = useAsyncData("profile", async () => {
    return queryCollection("profile").first();
  });

  const { data: socials } = useAsyncData("experience", () => {
    return queryCollection("socials").first();
  });

  const { data: contacts } = useAsyncData("certification", () => {
    return queryCollection("contacts").first();
  });

  const { data: stacks } = useAsyncData("stack", async () => {
    return queryCollection("stack").first();
  });

  return {
    profile,
    projects,
    stacks: stacks.value?.items,
    socials: socials.value?.items,
    contacts: contacts.value?.items,
  };
};
