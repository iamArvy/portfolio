import type { UseFetchOptions } from "nuxt/app";
import type { FetchError } from "ofetch";
import type { ApiName } from "~/types";

interface CustomError {
  message: string;
  statusCode: number;
}

export function useAPI<T>(
  apiName: ApiName,
  url: string | (() => string),
  options?: UseFetchOptions<T>
) {
  const fetcher = useNuxtApp().$apis?.[apiName] as typeof $fetch;

  if (!fetcher) {
    throw new Error(`API fetcher "${apiName}" not found`);
  }

  // @ts-expect-error Typescript error from framework
  return useFetch<T, FetchError<CustomError>>(url, {
    ...options,
    $fetch: fetcher,
  });
}
