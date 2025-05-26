import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 路径别名
    },
  },
  server: {
    port: 3000, // 你可以指定端口，跟CRA默认3000端口保持一致
  },
});
