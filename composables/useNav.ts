import { ref, onMounted, onBeforeUnmount } from "vue";
import type { NavItem } from "@/types";

export function useNav(navItems: NavItem[]) {
  const currentSection = ref("");
  let intersectionObserver: IntersectionObserver | null = null;

  function setupIntersectionObserver() {
    if (intersectionObserver) intersectionObserver.disconnect();

    intersectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length === 0) return;

        const topEntry = visibleEntries.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        )[0];

        if (topEntry.target.id) {
          currentSection.value = topEntry.target.id;
        }
      },
      {
        rootMargin: "0px 0px -40% 0px",
        threshold: 0,
      }
    );
  }

  function observeNavSections() {
    setupIntersectionObserver();

    navItems.forEach((nav) => {
      const id = nav.href;
      const el = document.getElementById(id);
      if (el) {
        intersectionObserver!.observe(el);
      }
    });
  }

  onMounted(() => {
    observeNavSections();
  });

  onBeforeUnmount(() => {
    intersectionObserver?.disconnect();
  });

  const isCurrentRoute = (path: string) => {
    return currentSection.value === path;
  };

  return {
    isCurrentRoute,
    currentSection,
  };
}
