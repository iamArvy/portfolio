import { Book, BookOpen, Folder, Rss, User } from "lucide-vue-next";

export const navs = [
    {
        path: "/",
        label: "Profile",
        icon: User,
        order: 1
    },
    {
        path: "/projects",
        icon: Folder,
        label: "Projects",
        order: 2
    },
    {
        path: "/blog",
        icon: BookOpen,
        label: "Blog",
        order: 3
    }
]