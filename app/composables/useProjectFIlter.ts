import type { ProjectFilter } from "~/interfaces";

export const useProjectFilter = () =>
  useState<ProjectFilter>("project-filter", () => ({
    stack: [],
    role: [],
  }));
