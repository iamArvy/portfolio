import type { PageProps } from "@inertiajs/core";
import type { LucideIcon } from "lucide-vue-next";
import type { Config } from "ziggy-js";

export interface Auth {
  user: User;
}

export interface BreadcrumbItem {
  title: string;
  href: string;
}

export interface NavItem {
  title: string;
  href: string;
  icon?: LucideIcon;
  isActive?: boolean;
}

export interface SharedData extends PageProps {
  name: string;
  quote: { message: string; author: string };
  auth: Auth;
  ziggy: Config & { location: string };
  sidebarOpen: boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
}
export interface RegisterForm {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export type AuthForm = {
  email: string;
  password: string;
};

export interface Token {
  token: string;
  expiry: number;
}
export interface AuthData {
  access: Token;
}

export type AuthResponse = AuthData & {
  user: User;
};
export interface Flash {
  type: "success" | "error" | "info";
  message: string;
}

export type ProfileEditForm = {
  name: string;
  email: string;
};

export type UpdatePasswordForm = {
  current_password: string;
  password: string;
  password_confirmation: string;
};

export type AuthBaseProps = {
  title: string;
  description: string;
};

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

export type ResetPasswordForm = {
  email: string;
  password: string;
  password_confirmation: string;
  token: string;
};
