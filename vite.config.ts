/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // if this is set to true "it" and "describe" won't be needed to be exported in every test file
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    css: true,
  },
});
