// contentlayer.config.ts
import { defineDocumentType, makeSource } from "@contentlayer/source-files";
import { remarkCodeHike } from "@code-hike/mdx";
import { createRequire } from "module";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
var require2 = createRequire(import.meta.url);
var theme = require2("shiki/themes/nord.json");
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `articles/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    image: { type: "string", required: false },
    excerpt: { type: "string", required: false, default: "No excerpt provided" },
    tags: { type: "list", of: { type: "string" }, required: false }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (article) => `/${article._raw.flattenedPath}`
    },
    image: {
      type: "string",
      resolve: (article) => article.image = article.image + "?r=" + Math.random()
    },
    ...computedFields
  }
}));
var Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (page) => `/${page._raw.flattenedPath}`
    },
    ...computedFields
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Article, Page],
  mdx: {
    remarkPlugins: [
      remarkGfm,
      [
        remarkCodeHike,
        {
          showCopyButton: true,
          theme,
          lineNumbers: true
        }
      ]
    ],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          test: ["h1", "h2", "h3", "h4", "h5", "h6"],
          content: {
            type: "element",
            tagName: "svg",
            properties: {
              style: "display: inline-block; height: 0.8em; width: 0.8em; margin: 0.25rem; opacity: 0.6;",
              className: ["text-primary_color", "dark:text-primary_color-dark"],
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: "1.5",
              stroke: "currentColor"
            },
            children: [
              {
                type: "element",
                tagName: "path",
                properties: {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                },
                children: []
              }
            ]
          }
        }
      ]
    ]
  }
});
export {
  Article,
  Page,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-L356ORJD.mjs.map