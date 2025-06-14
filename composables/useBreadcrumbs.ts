// import type { BreadcrumbItem } from "~/types";

export const useBreadcrumbs = () =>
  useState<string[] | undefined>("breadcrumbs", () => undefined);
