import type { ApiName } from "~/types";

export default defineNuxtPlugin((nuxtApp) => {
  const access_token = useCookie("access_token");
  const apis: Record<ApiName, typeof $fetch> = {
    default: $fetch.create({
      baseURL: "http://localhost:3001",
      onRequest({ options }) {
        if (access_token.value) {
          options.headers.set("Authorization", `Bearer ${access_token.value}`);
        }
      },
      async onResponseError({ response }) {
        if (response.status === 401) {
          await nuxtApp.runWithContext(() => navigateTo("/login"));
        }
      },
    }),
    auth: $fetch.create({
      baseURL: "http://localhost:3001",
      // onRequest({ options }) {
      //   if (access_token.value) {
      //     options.headers.set("Authorization", `Bearer ${access_token.value}`);
      //   }
      // },
      // async onResponseError({ response }) {
      //   if (response.status === 401) {
      //     await nuxtApp.runWithContext(() => navigateTo("/login"));
      //   }
      // },
    }),
    authProtected: $fetch.create({
      baseURL: "http://localhost:3001",
      onRequest({ options }) {
        if (access_token.value) {
          options.headers.set("Authorization", `Bearer ${access_token.value}`);
        }
      },
      async onResponseError({ response }) {
        if (response.status === 401) {
          await nuxtApp.runWithContext(() => navigateTo("/login"));
        }
      },
    }),
    // Add more apis as needed
  };

  return {
    provide: {
      apis,
    },
  };
});
