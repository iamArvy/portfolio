export const useRoles = () => {
  const route = useRoute();
  const role = useState<string>(
    "role",
    () => (route.query.role as string) || "all"
  );
  const { data: roles } = useAsyncData("roles", () =>
    queryCollection("roles").first()
  );

  return {
    roles: roles.value?.items,
    role,
  };
};
