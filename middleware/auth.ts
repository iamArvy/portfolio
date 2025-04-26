export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useAuth();
  // alert(`isAuthenticated: ${isAuthenticated.value}`);
  // console.log("isAuthenticated", isAuthenticated.value);
  if (!isAuthenticated.value && to.path !== "/auth/login") {
    return navigateTo(`/auth/login?redirect=${to.fullPath}`);
  }
});
