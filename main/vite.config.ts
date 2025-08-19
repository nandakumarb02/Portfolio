import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  appType: "spa",
  assetsInclude: ["**/*.PNG"],
  server: {
    host: "::",
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    react(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/_variables.scss";
        `,
        quietDeps: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Ensure the public directory is copied to the build output
    assetsDir: 'assets',
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
}));
