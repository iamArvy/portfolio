// @ts-expect-error Error from the library
import MarkdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import hljs from "highlight.js";

export interface TOCItem {
  content: string;
  slug: string;
  level: number;
}

export const useMarkdown = () => {
  const renderMarkdown = (markdown: string) => {
    const toc: TOCItem[] = [];

    const md = new MarkdownIt({
      html: false,
      linkify: true,
      typographer: true,
      // @ts-expect-error Error from the library
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(str, { language: lang }).value;
          } catch (e) {
            alert(e);
            // do nothing
          }
        }

        return "";
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
        headingMap[slug] = s;
        return slug;
      },
      callback: (
        token: { content: string; tag: string },
        info: { slug: string }
      ) => {
        toc.push({
          content: headingMap[info.slug] ?? info.slug,
          slug: info.slug,
          level: parseInt(token.tag.slice(1)),
        });
      },
    });

    const html = md.render(markdown);

    return { html, toc };
  };
  const getMarkdown = async (markdown: string) => {
    try {
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
