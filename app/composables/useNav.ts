import { ref, onMounted } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

interface Navigation {
  id: string;
}

export function useNav(navs: Navigation[]) {
  const currentSection = ref("");

  onMounted(() => {
    navs.forEach((nav) => {
      const el = document.getElementById(nav.id);
      if (!el) return;

      useIntersectionObserver(
        el,
        ([entry]) => {
          if (entry?.isIntersecting) {
            currentSection.value = nav.id;
          }
        },
        {
          rootMargin: "0px 0px -40% 0px",
          threshold: 0,
        }
      );
    });
  });

  const isCurrentRoute = (path: string) => currentSection.value === path;

  return {
    isCurrentRoute,
    currentSection,
  };
}
