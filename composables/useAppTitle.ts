export const useAppTitle = (pageTitle?: string) => {
  const config = useRuntimeConfig();
  const appName = config.public.appName;
  useHead({
    title: pageTitle ? `${pageTitle} - ${appName}` : (appName as string),
  });
};
