import type { Breadcrumb } from "~/interfaces";

export const useBreadcrumbs = () =>
  useState<Breadcrumb[] | undefined>("breadcrumbs", () => undefined);
