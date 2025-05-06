export interface BreadcrumbItem {
  title: string;
  href: string;
}

export interface NavItem {
  title: string;
  href: string;
  icon?: string;
  isActive?: boolean;
}

export interface Flash {
  type: "success" | "error" | "info";
  message: string;
}

export type Appearance = "light" | "dark" | "system";
export type Layout = "sidebar" | "topbar";
export type BreadcrumbItemType = BreadcrumbItem;

export const API_NAMES = [
  "default",
  "auth",
  "authProtected",
  // register more apis as needed
] as const;

export type ApiName = (typeof API_NAMES)[number];

export interface Stack {
  name: string;
  job: string;
  icon: string;
  url: string;
}

export * from "./github";
export * from "./content";
