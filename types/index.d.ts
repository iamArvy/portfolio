export interface NavItem {
  title: string;
  href: string;
  icon?: string;
  isActive?: boolean;
}

export type Appearance = "light" | "dark" | "system";
export type Layout = "sidebar" | "topbar";
