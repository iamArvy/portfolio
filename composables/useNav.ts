function useNav() {
  const router = useRouter();
  const route = useRoute();

  const goBack = () => {
    if (route.name !== "index") {
      router.back();
    } else {
      router.push({ name: "index" });
    }
  };

  const isCurrentRoute = (path: string) => {
    return route.name === path;
  };

  return { goBack, isCurrentRoute };
}

export default useNav;
