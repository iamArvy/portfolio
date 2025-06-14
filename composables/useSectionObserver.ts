import { ref, onMounted, onBeforeUnmount, type Ref } from "vue";

export function useSectionObserver(contentRef: Ref<HTMLElement | null>) {
  const currentSection = ref("");
  let mutationObserver: MutationObserver | null = null;
  let intersectionObserver: IntersectionObserver | null = null;

  function setupIntersectionObserver() {
    if (intersectionObserver) intersectionObserver.disconnect();

    intersectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length === 0) return;

        const topEntry = visibleEntries.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        )[0];

        if (topEntry.target.id) {
          currentSection.value = topEntry.target.id;
        }
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0,
      }
    );
  }

  function observeHeadings() {
    if (!contentRef.value) return;
    const headings = contentRef.value.querySelectorAll("h2");

    if (intersectionObserver) intersectionObserver.disconnect();

    setupIntersectionObserver();

    headings.forEach((heading) => {
      if (heading.id) {
        intersectionObserver!.observe(heading);
      }
    });
  }

  onMounted(() => {
    if (!contentRef.value) return;

    mutationObserver = new MutationObserver(() => {
      observeHeadings();
    });

    mutationObserver.observe(contentRef.value, {
      childList: true,
      subtree: true,
    });

    observeHeadings();
  });

  onBeforeUnmount(() => {
    mutationObserver?.disconnect();
    intersectionObserver?.disconnect();
  });

  return {
    currentSection,
  };
}
