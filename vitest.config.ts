import { defineConfig } from "vite";
import { fileURLToPath } from "url";
/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "assets": fileURLToPath(new URL("./src", import.meta.url)),
      "services": fileURLToPath(new URL("./src/services", import.meta.url)),
      "components": fileURLToPath(new URL("./src/components", import.meta.url)),
    },
  },
//   test: {
//     globals: true,
//     environment: "jsdom",
//     setupFiles: "./setup.js",
//     watch: false,
//   },
});