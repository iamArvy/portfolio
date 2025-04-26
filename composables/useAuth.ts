import type { AuthForm, RegisterForm, ResetPasswordForm, User } from "~/types";
import { useCustomAuth } from "./auth";

type AuthComposable = () => {
  signIn: (data: AuthForm) => Promise<void>;
  signUp: (data: RegisterForm) => Promise<void>;
  signOut: () => void;
  forgotPassword: (data: { email: string }) => void;
  resetPassword: (data: ResetPasswordForm) => void;
  confirmPassword?: (data: { password: string }) => void;
  init: () => Promise<void>;
  loading: Ref<boolean>;
};

const providers: Record<string, AuthComposable> = {
  // cognito: () => useCognitoAuth(),
  custom: () => useCustomAuth(),
  // Add more like:
  // firebase: () => useFirebaseAuth(),
  // supabase: () => useSupabaseAuth(),
};

export function useAuth() {
  const user = useState<User | null>("user", () => null);
  const access_token = useCookie("access_token");
  const isAuthenticated = computed(() => !!access_token.value);
  const config = useRuntimeConfig();
  const providerKey = config.public.authProvider || "custom";
  const authComposable = providers[providerKey];

  if (!authComposable) {
    throw new Error(`Unknown auth provider: ${providerKey}`);
  }

  return {
    ...authComposable(),
    user,
    isAuthenticated,
    provider: providerKey,
  };
}
