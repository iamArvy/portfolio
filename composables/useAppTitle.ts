export const useAppTitle = (pageTitle?: string) => {
  const config = useAppConfig();
  const appName = config.appName;
  useHead({
    title: pageTitle ? `${pageTitle} - ${appName}` : (appName as string),
  });
};
