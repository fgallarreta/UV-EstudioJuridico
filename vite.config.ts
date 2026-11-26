import { defineConfig, type HtmlTagDescriptor, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

import siteConfigurationData from "./config/site.json" with { type: "json" };

// Vite config — https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const emitSourcemaps = mode === "development";

  return {
    base: process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}/` : "/",
    build: {
      sourcemap: emitSourcemaps ? "inline" : false,
      minify: !emitSourcemaps,
    },
    plugins: [react(), tailwindcss(), siteConfiguration(siteConfigurationData)],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "./src"),
      },
    },
    server: {
      host: process.env.HOST || "0.0.0.0",
      port: parseInt(process.env.PORT || "8443"),
      strictPort: true,
    },
    preview: {
      host: process.env.HOST || "0.0.0.0",
      port: parseInt(process.env.PORT || "8443"),
    },
  };
});

type SiteConfiguration = {
  title?: string;
  description?: string;
  siteUrl?: string;
  language?: string;
  robots?: {
    index?: boolean;
  };
  icons?: {
    icon?: string;
  };
  openGraph?: {
    image?: string;
  };
  analytics?: {
    googleAnalyticsId?: string;
  };
  customScripts?: {
    headStart?: string;
    headEnd?: string;
    bodyStart?: string;
    bodyEnd?: string;
  };
  accessibility?: {
    addBypassLinks?: boolean;
  };
};

/** Applies config/site.json to the generated document shell. */
function siteConfiguration(config: SiteConfiguration): Plugin {
  function sanitizeHtmlValue(value: string | undefined): string {
    return value?.replace(/[^a-zA-Z0-9_-]/g, "") || "";
  }
  function escapeHtmlText(value: string): string {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function replaceHtmlCommentSlot(html: string, slotName: string, content: string): string {
    return html.replace(`<!-- ${slotName} -->`, content);
  }

  const title = config.title ?? "";
  const description = config.description ?? "";
  const favicon = config.icons?.icon ?? "/favicon.png";
  const socialImage = config.openGraph?.image ?? "";
  const siteUrl = config.siteUrl?.replace(/\/?$/, "/") ?? "";
  const canIndex = config.robots?.index !== false;
  const sitemapUrl = siteUrl && canIndex ? new URL("sitemap.xml", siteUrl).toString() : "";
  const language = sanitizeHtmlValue(config.language) || "es";
  const googleAnalyticsId = sanitizeHtmlValue(config.analytics?.googleAnalyticsId);
  const headStart = config.customScripts?.headStart ?? "";
  const headEnd = config.customScripts?.headEnd ?? "";
  const bodyStart = config.customScripts?.bodyStart ?? "";
  const bodyEnd = config.customScripts?.bodyEnd ?? "";
  const robotsTxt =
    config.robots?.index === false
      ? "User-agent: *\nDisallow: /\n"
      : `User-agent: *\nAllow: /\n${sitemapUrl ? `Sitemap: ${sitemapUrl}\n` : ""}`;
  const sitemapXml = siteUrl && canIndex
    ? `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${siteUrl}</loc></url></urlset>\n`
    : "";

  return {
    name: "site-configuration",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathname = req.url?.split("?")[0];
        if (!canIndex && pathname === "/robots.txt") {
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          res.end(robotsTxt);
          return;
        }
        if (pathname === "/sitemap.xml" && sitemapXml) {
          res.setHeader("Content-Type", "application/xml; charset=utf-8");
          res.end(sitemapXml);
          return;
        }
        return next();
      });
    },
    generateBundle() {
      if (!canIndex) {
        this.emitFile({
          type: "asset",
          fileName: "robots.txt",
          source: robotsTxt,
        });
      }
      if (sitemapXml) {
        this.emitFile({
          type: "asset",
          fileName: "sitemap.xml",
          source: sitemapXml,
        });
      }
    },
    transformIndexHtml: {
      order: "pre",
      handler(html) {
        let result = html;
        result = replaceHtmlCommentSlot(result, "site:lang", language);
        result = replaceHtmlCommentSlot(result, "site:title", escapeHtmlText(title));
        result = replaceHtmlCommentSlot(result, "site:head-start", headStart);
        result = replaceHtmlCommentSlot(result, "site:head-end", headEnd);
        result = replaceHtmlCommentSlot(result, "site:body-start", bodyStart);
        result = replaceHtmlCommentSlot(result, "site:body-end", bodyEnd);

        const tags: HtmlTagDescriptor[] = [];
        if (description) {
          tags.push({
            tag: "meta",
            attrs: { name: "description", content: description },
            injectTo: "head",
          });
        }
        tags.push({
          tag: "meta",
          attrs: {
            name: "robots",
            content: config.robots?.index === false ? "noindex, nofollow" : "index, follow",
          },
          injectTo: "head",
        });
        if (siteUrl) {
          tags.push(
            { tag: "link", attrs: { rel: "canonical", href: siteUrl }, injectTo: "head" },
            { tag: "meta", attrs: { property: "og:url", content: siteUrl }, injectTo: "head" },
            { tag: "meta", attrs: { property: "og:type", content: "website" }, injectTo: "head" },
            { tag: "meta", attrs: { property: "og:locale", content: "es_AR" }, injectTo: "head" },
            { tag: "meta", attrs: { name: "twitter:card", content: "summary" }, injectTo: "head" },
          );
        }
        if (favicon) {
          const faviconUrl = siteUrl ? new URL(favicon.replace(/^\/+/, ""), siteUrl).toString() : favicon;
          tags.push({ tag: "link", attrs: { rel: "icon", href: faviconUrl }, injectTo: "head" });
        }
        if (title) {
          tags.push({
            tag: "meta",
            attrs: { property: "og:title", content: title },
            injectTo: "head",
          });
        }
        if (description) {
          tags.push({
            tag: "meta",
            attrs: { property: "og:description", content: description },
            injectTo: "head",
          });
        }
        if (socialImage) {
          const socialImageUrl = siteUrl
            ? new URL(socialImage.replace(/^\/+/, ""), siteUrl).toString()
            : socialImage;
          tags.push(
            {
              tag: "meta",
              attrs: { property: "og:image", content: socialImageUrl },
              injectTo: "head",
            },
            {
              tag: "meta",
              attrs: { name: "twitter:card", content: "summary_large_image" },
              injectTo: "head",
            },
            {
              tag: "meta",
              attrs: { name: "twitter:image", content: socialImageUrl },
              injectTo: "head",
            },
          );
        }

        if (googleAnalyticsId) {
          tags.push(
            {
              tag: "script",
              attrs: {
                async: true,
                src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
              },
              injectTo: "head",
            },
            {
              tag: "script",
              children: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', ${JSON.stringify(googleAnalyticsId)});
 `,
              injectTo: "head",
            },
          );
        }

        if (config.accessibility?.addBypassLinks) {
          tags.push(
            {
              tag: "style",
              children: `
  .skip-link {
    position: fixed;
    top: 8px;
    left: 8px;
    z-index: 2147483647;
    transform: translateY(-150%);
    border-radius: 6px;
    background: #111827;
    color: #fff;
    padding: 8px 12px;
    font: 600 14px/1.2 system-ui, sans-serif;
    text-decoration: none;
  }
  .skip-link:focus {
    transform: translateY(0);
  }
 `,
              injectTo: "head",
            },
            {
              tag: "a",
              attrs: { class: "skip-link", href: "#root" },
              children: "Skip to content",
              injectTo: "body-prepend",
            },
          );
        }

        return {
          html: result,
          tags,
        };
      },
    },
  };
}
