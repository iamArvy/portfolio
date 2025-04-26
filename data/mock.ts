import type {
  AuthForm,
  AuthResponse,
  ProfileEditForm,
  RegisterForm,
  ResetPasswordForm,
  UpdatePasswordForm,
  User,
} from "~/types";

export const sampleUser = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  avatar: "",
  email_verified_at: null,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

export const sampleAccessToken = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbTluOWl5MGYwMDAwbWMzM2ZraGJmdHR2IiwiZW1haWwiOiJleGFtcGxlQGdtYWlsLmNvbSIsImlhdCI6MTc0NTAxMDQ2OSwiZXhwIjoxNzQ1MDExMzY5fQ.SrWBOgVQyp0MCGR0tahBcPIRek-gaczWbCeq1Rf9CfM",
  expiry: 2, //in hours
};

export const mockLogin = (
  data: AuthForm
): AuthResponse | PromiseLike<AuthResponse> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === sampleUser.email && data.password === "password") {
        resolve({
          user: sampleUser,
          access: sampleAccessToken,
        });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });

export const mockRegister = (
  data: RegisterForm
): AuthResponse | PromiseLike<AuthResponse> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        data.email &&
        data.password &&
        data.name &&
        data.password_confirmation
      ) {
        resolve({
          user: sampleUser,
          access: sampleAccessToken,
        });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });

export const mockGetUser = (
  access_token: string
): { user: User } | PromiseLike<{ user: User }> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (access_token === sampleAccessToken.token) {
        resolve({ user: sampleUser as User });
      } else {
        reject(new Error("Invalid access token"));
      }
    });
  });

export const mockEditProfile = (
  data: ProfileEditForm,
  access_token: string
): { user: User } | PromiseLike<{ user: User }> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (access_token === sampleAccessToken.token) {
        resolve({
          user: { ...sampleUser, name: data.name, email: data.email },
        });
      } else {
        reject(new Error("Invalid access token"));
      }
    }, 1000);
  });

export const mockDeleteAccount = (data: { password: string }): Promise<void> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.password === "password") {
        resolve();
      } else {
        reject(new Error("Incorrect Credentials"));
      }
    }, 1000);
  });

export const mockPasswordUpdate = (data: UpdatePasswordForm): Promise<void> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.password !== data.password_confirmation)
        reject(new Error("Passwords do not match"));
      if (data.current_password !== "password")
        reject(new Error("Incorrect Credentials"));
      resolve();
    }, 1000);
  });

export const mockSendPasswordResetLink = (data: {
  email: string;
}): Promise<void> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email !== sampleUser.email) reject(new Error("User not found"));
      resolve();
    }, 1000);
  });

export const mockResetPassword = (data: ResetPasswordForm): Promise<void> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email !== sampleUser.email) reject(new Error("User not found"));
      if (data.password !== data.password_confirmation)
        reject(new Error("Passwords do not match"));

      resolve();
    }, 1000);
  });

export const mockConfirmPassword = (data: {
  password: string;
}): Promise<void> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.password !== "password")
        reject(new Error("Incorrect Credentials"));
      resolve();
    }, 1000);
  });
