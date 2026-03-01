/* global process */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      "/lambda": {
        target: process.env.LAMBDA_PROXY_TARGET || "http://localhost:9000",
        changeOrigin: true,
        rewrite: () => "/2015-03-31/functions/function/invocations",
      },
    },
  },
});
