import type { BreadcrumbItem } from "~/types";

export const useBreadcrumbs = () =>
  useState<BreadcrumbItem[] | undefined>("breadcrumbs", () => undefined);
