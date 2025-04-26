import type {
  User,
  AuthForm,
  RegisterForm,
  Token,
  ResetPasswordForm,
} from "~/types";
import {
  mockGetUser,
  mockLogin,
  mockRegister,
  mockSendPasswordResetLink,
  mockConfirmPassword,
  mockResetPassword,
} from "~/data";

export function useCustomAuth() {
  const userState = useState<User | null>("user", () => null);
  const { setError, setSuccess } = useFlash();
  const loading = useState<boolean>("loading", () => false);

  const setUser = async (access_token: string) => {
    try {
      const response = await mockGetUser(access_token);
      userState.value = response.user;
      return;
    } catch (error) {
      throw new Error(error as string);
    }
  };
  const init = async () => {
    const access_cookie = useCookie("access_token");
    if (!access_cookie) {
      userState.value = null;
      return;
    }
    await setUser(access_cookie.value as string);
  };

  const setAuth = (access: Token, user?: User) => {
    useCookie("access_token", {
      maxAge: 60 * 60 * access.expiry,
      sameSite: true,
      secure: true,
      // httpOnly: true,
      // path: "/",
    }).value = access.token;
    if (user) userState.value = user;
  };

  const signIn = async (formdata: AuthForm) => {
    loading.value = true;
    try {
      const { user, access } = await mockLogin(formdata);
      // In a real application, you would fetch the user data from an API
      // and set the user object accordingly.
      // For example:
      // const { data, error } = useAPI('auth', '/login',
      //   {
      //     method: "POST",
      //     body: data,
      //   }
      // );
      // if(error.value) thow new Error()
      // const { access, user } = data.value
      setAuth(access, user);
      setSuccess("Login successful");
      const route = useRoute();
      const redirect = route.query.redirect ?? "/dashboard";
      navigateTo(redirect as string);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
      return;
    } finally {
      loading.value = false;
    }
  };

  const signUp = async (data: RegisterForm) => {
    loading.value = true;
    try {
      const { user, access } = await mockRegister(data);
      setAuth(access, user as User);
      setSuccess("Registration successful");
      navigateTo("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
      return;
    } finally {
      loading.value = false;
    }
  };

  function signOut() {
    userState.value = null;
    useCookie("access_token").value = null;
    setSuccess("Logout successful");
    navigateTo("/");
  }

  async function forgotPassword(formdata: { email: string }) {
    try {
      await mockSendPasswordResetLink(formdata);
      setSuccess("Reset link has been sent to your email.");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
      return;
    } finally {
      loading.value = false;
    }
    // Implement password reset logic here
  }

  async function resetPassword(formdata: ResetPasswordForm) {
    try {
      await mockResetPassword(formdata);
      setSuccess("Password Updated");
      navigateTo("/auth/login");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
      return;
    } finally {
      loading.value = false;
    }
    // Implement password reset logic here
  }

  async function confirmPassword(formdata: { password: string }) {
    try {
      await mockConfirmPassword(formdata);
      setSuccess("Password Confirmed");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
      return;
    } finally {
      loading.value = false;
    }
    // Implement password reset logic here
  }
  return {
    signIn,
    signOut,
    signUp,
    loading,
    init,
    forgotPassword,
    resetPassword,
    confirmPassword,
  };
}
