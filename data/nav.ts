// import { LayoutGrid, Folder, BookOpen } from "lucide-vue-next";
import type { NavItem } from "@/types";
const mainNavItems: NavItem[] = [
  {
    title: "Profile",
    href: "/",
    icon: "mingcute:profile-fill",
  },
  {
    title: "Stacks",
    href: "/stacks",
    icon: "material-symbols:stacks",
  },
  {
    title: "Projects",
    href: "/projects",
    icon: "grommet-icons:projects",
  },
  {
    title: "Blog",
    href: "/blogs",
    icon: "carbon:blog",
  },
];

const rightNavItems: NavItem[] = [
  {
    title: "Github",
    href: "https://github.com/iamArvy",
    icon: "mdi:github",
  },
  {
    title: "LinkedIn",
    href: "https://linkedIn.com/oluwaseyioke-webdev",
    icon: "radix-icons:linkedin-logo",
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
