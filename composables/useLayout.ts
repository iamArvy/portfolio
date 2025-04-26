import type { LayoutKey } from "#build/types/layouts";
import type { Layout } from "~/types";
// import { onMounted } from "#app";
function useLayout() {
  const defaultLayout: Layout = "sidebar";
  const layout = useState<Layout>("layout", () => defaultLayout);
  const layoutName = computed<false | LayoutKey>(() => {
    return layout.value ? (`dashboard-${layout.value}` as LayoutKey) : false;
  });
  // const config = useRuntimeConfig();
  // defaultLayout = (config.public.layoutProvider as Layout) || "sidebar";
  const initializeLayout = () => {
    if (typeof window === "undefined") {
      return;
    }
    const savedLayout = localStorage.getItem("layout") as Layout | null;
    layout.value = savedLayout || defaultLayout;
  };

  onMounted(() => {
    initializeLayout();
  });

  const setLayout = (value: Layout) => {
    localStorage.setItem("layout", value);
    layout.value = value;
  };

  return {
    layout,
    layoutName,
    setLayout,
    initializeLayout,
  };
}
export default useLayout;
