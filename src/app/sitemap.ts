import type { MetadataRoute } from "next";
import { source } from "@/lib/source";

export const dynamic = "force-static";

interface TreeNode {
  $id: string;
  type?: string;
  name?: string;
  url?: string;
  index?: TreeNode;
  children?: TreeNode[];
}

function generateSitemap(
  root: TreeNode,
  baseUrl: string = "https://docs.zen-browser.app"
): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];

  function traverse(node: TreeNode): void {
    if (!node) return;

    // If the node is a page and has a URL, add it to the sitemap.
    if (node.type === "page" && node.url) {
      // Concatenate baseUrl with the node URL.
      const fullUrl = baseUrl + (node.url === "/" ? "" : node.url);
      sitemap.push({
        url: fullUrl,
        // Use 'monthly' for the homepage and 'monthly' for other pages (customize as needed)
        changeFrequency: node.url === "/" ? "monthly" : "monthly",
        // Set a higher priority for the homepage
        priority: node.url === "/" ? 1 : 0.8,
      });
    }

    // If the node is a folder and has an index page, add that index page to the sitemap.
    if (node.type === "folder" && node.index && node.index.url) {
      const fullUrl = baseUrl + (node.index.url === "/" ? "" : node.index.url);
      sitemap.push({
        url: fullUrl,
        lastModified: new Date(),
        changeFrequency: node.index.url === "/" ? "monthly" : "monthly",
        priority: node.index.url === "/" ? 1 : 0.8,
      });
    }

    // Recursively process children if any.
    if (node.children && node.children.length) {
      node.children.forEach((child) => traverse(child));
    }
  }

  traverse(root);
  return sitemap;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return generateSitemap(source.pageTree as TreeNode);
}
