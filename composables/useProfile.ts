import type { ProfileEditForm, UpdatePasswordForm } from "~/types";
import { mockDeleteAccount, mockEditProfile, mockPasswordUpdate } from "~/data";

export function useProfile() {
  const { setError, setSuccess } = useFlash();
  const loading = useState<boolean>("loading", () => false);

  async function editProfile(formdata: ProfileEditForm) {
    loading.value = true;
    try {
      const access_cookie = useCookie("access_token");
      const userState = useState("user");
      const { user } = await mockEditProfile(
        formdata,
        access_cookie.value as string
      );
      userState.value = user;
      setSuccess("Edit successful");
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
  }

  async function deleteAccount(formdata: { password: string }) {
    loading.value = true;
    try {
      await mockDeleteAccount(formdata);
      const access_cookie = useCookie("access_token");
      const userState = useState("user");
      userState.value = null;
      access_cookie.value = null;
      setSuccess("Account deleted successful");
      navigateTo("/");
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
  }

  function verifyEmail() {
    loading.value = true;
    try {
      setSuccess("Verification link as been sent");
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
  }

  async function updatePassword(formdata: UpdatePasswordForm) {
    loading.value = true;
    try {
      await mockPasswordUpdate(formdata);
      setSuccess("Password Updated Successfully");
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
  }
  return {
    loading,
    editProfile,
    deleteAccount,
    verifyEmail,
    updatePassword,
  };
}
