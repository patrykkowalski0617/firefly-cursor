import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "manifest.json", dest: "" },
        { src: "style.css", dest: "" },
        { src: "options.html", dest: "" },
        { src: "public/icon.png", dest: "" },
      ],
    }),
  ],

  build: {
    outDir: "dist",
    emptyOutDir: true,

    rollupOptions: {
      input: {
        options: resolve(__dirname, "src/options/index.jsx"),
        content: resolve(__dirname, "src/content/index.js"),
      },

      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name].js",
        assetFileNames: "[name][extname]",
      },
    },
  },

  server: {
    open: "/src/options/options.dev.html",
  },
});
