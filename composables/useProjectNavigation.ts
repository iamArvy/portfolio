// import type { BreadcrumbItem } from "~/types";

import type { ProjectPagesCollectionItem } from "@nuxt/content";

export const useProjectNavigation = () =>
  useState<ProjectPagesCollectionItem[] | undefined>(
    "projectNavigation",
    () => undefined
  );
