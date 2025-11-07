import { profile } from "~/constants";

export const useAppTitle = (pageTitle?: string) => {
  useHead({
    title: pageTitle ? `${pageTitle} - ${profile.name}` : profile.name,
  });
};
