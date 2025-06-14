import type { ProjectPagesCollectionItem } from "@nuxt/content";

export const useProjectNavigation = () => {
  const pages = useState<ProjectPagesCollectionItem[]>(
    "projectNavigation",
    () => []
  );

  const setPages = (items: ProjectPagesCollectionItem[] = []) => {
    pages.value = items;
  };

  const currentPath = useRoute().path;
  const currentIndex = computed(() =>
    pages.value.findIndex((p) => p.path === currentPath)
  );

  const prevPage = computed(() =>
    currentIndex.value > 0 ? pages.value[currentIndex.value - 1] : null
  );

  const nextPage = computed(() =>
    currentIndex.value >= 0 && currentIndex.value < pages.value.length - 1
      ? pages.value[currentIndex.value + 1]
      : null
  );
  return {
    pages,
    setPages,
    currentIndex,
    prevPage,
    nextPage,
  };
};
