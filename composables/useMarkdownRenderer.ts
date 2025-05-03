import MarkdownIt from "markdown-it";
// utils/useMarkdownRenderer.ts
// import MarkdownIt from "MarkdownIt";
import markdownItAnchor from "markdown-it-anchor";
import hljs from "highlight.js"; // https://highlightjs.org

export interface TOCItem {
  content: string;
  slug: string;
  level: number;
}

// export function renderMarkdownWithTOC(markdown: string) {
//   const toc: TOCItem[] = [];

//   const md = new MarkdownIt({
//     html: true,
//     linkify: true,
//     typographer: true,
//   });

//   md.use(markdownItAnchor, {
//     slugify: (s) =>
//       s
//         .trim()
//         .toLowerCase()
//         .replace(/[\s]+/g, "-")
//         .replace(/[^\w\-]+/g, ""),
//     callback: (token, info) => {
//       toc.push({
//         content: token.content,
//         slug: info.slug,
//         level: parseInt(token.tag.slice(1)), // h2 -> 2
//       });
//     },
//   });

//   const html = md.render(markdown);

//   return { html, toc };
// }

export const useMarkdown = () => {
  const renderMarkdown = (markdown: string) => {
    const toc: TOCItem[] = [];

    const md = new MarkdownIt({
      html: false,
      linkify: true,
      typographer: true,
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(str, { language: lang }).value;
          } catch (__) {}
        }

        return ""; // use external default escaping
      },
    });
    const headingMap: Record<string, string> = {};
    md.use(markdownItAnchor, {
      slugify: (s: string): string => {
        const slug = s
          .trim()
          .toLowerCase()
          .replace(/[\s]+/g, "-")
          .replace(/[^\w-]+/g, "");
        headingMap[slug] = s; // store original heading by slug
        return slug;
      },
      callback: (
        token: { content: string; tag: string },
        info: { slug: string }
      ) => {
        toc.push({
          content: headingMap[info.slug] ?? info.slug, // lookup original heading
          slug: info.slug,
          level: parseInt(token.tag.slice(1)), // h2 -> 2
        });
      },
    });

    const html = md.render(markdown);

    return { html, toc };
  };
  const getMarkdown = async (url: string) => {
    try {
      const response = url ? await $fetch(url) : null;
      if (!response) {
        throw new Error(`HTTP error! status: ${response}`);
      }
      const markdown = await response;
      const { html, toc } = renderMarkdown(markdown as string);
      return { html, toc };
    } catch (error) {
      console.error("Error fetching markdown:", error);
      return { html: "", toc: [] };
    }
  };
  return {
    getMarkdown,
  };
};
