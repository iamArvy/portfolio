import { name } from "~/constants";

export const useAppTitle = (pageTitle?: string) => {
  useHead({
    title: pageTitle ? `${pageTitle} - ${name}` : name,
  });
};
