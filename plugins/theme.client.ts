// plugins/theme.client.ts
import { initializeTheme } from "@/composables/useAppearance";
export default defineNuxtPlugin(() => {
  const { initializeLayout } = useLayout();
  initializeTheme();
  initializeLayout();
});
