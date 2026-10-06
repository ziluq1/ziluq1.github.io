// @ts-check
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { defineConfig } from "astro/config";

// Astro writes the page scripts inline. Hash them so the live site can run them.
function allowInlinePageScripts() {
  return {
    name: "allow-inline-page-scripts",
    hooks: {
      "astro:build:done": ({ dir }) => {
        const file = new URL("index.html", dir);
        const html = readFileSync(file, "utf8");
        const hashes = [];
        for (const match of html.matchAll(/<script type="module">([\s\S]*?)<\/script>/g)) {
          const digest = createHash("sha256").update(match[1]).digest("base64");
          hashes.push(`'sha256-${digest}'`);
        }
        if (hashes.length === 0) return;
        writeFileSync(
          file,
          html.replace("script-src 'self'", `script-src 'self' ${hashes.join(" ")}`),
        );
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://ziluq1.github.io",
  integrations: [allowInlinePageScripts()],
});
