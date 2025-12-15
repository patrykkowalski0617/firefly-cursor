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
    rollupOptions: {
      input: {
        options: resolve(__dirname, "src/options/index.jsx"),
        content: resolve(__dirname, "src/content/index.js"),
      },
      output: {
        entryFileNames: "[name].js", // wygeneruje: options.js i content.js
        assetFileNames: "[name].[ext]",
        chunkFileNames: "[name].js",
      },
    },
  },
});
