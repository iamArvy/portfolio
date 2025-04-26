import { LayoutGrid, Folder, BookOpen } from "lucide-vue-next";
import type { NavItem } from "@/types";

const mainNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutGrid,
  },
];

const rightNavItems: NavItem[] = [
  {
    title: "Repository",
    href: "https://github.com/laravel/vue-starter-kit",
    icon: Folder,
  },
  {
    title: "Documentation",
    href: "https://laravel.com/docs/starter-kits",
    icon: BookOpen,
  },
];

const settingsNavItems: NavItem[] = [
  {
    title: "Profile",
    href: "settings-profile",
  },
  {
    title: "Password",
    href: "settings-password",
  },
  {
    title: "Appearance",
    href: "settings-appearance",
  },
];
export { mainNavItems, rightNavItems, settingsNavItems };
