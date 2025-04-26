export default defineNuxtPlugin(() => {
  const { init } = useAuth();
  init();
});
