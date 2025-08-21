export interface NavItem {
  name: string;
  id: string;
  icon?: string;
  // isActive?: boolean;
}

export type Appearance = "light" | "dark" | "system";
export type Layout = "sidebar" | "topbar";
