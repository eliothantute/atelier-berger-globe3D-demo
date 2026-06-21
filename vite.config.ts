import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react({
        babel: {
          plugins: [["babel-plugin-react-compiler"]],
        },
      }),
    ],

    base: "/atelier-berger-globe3D-demo/",

    server: {
      allowedHosts: env.ALLOWED_HOSTS?.split(",") ?? ["localhost"],

      hmr: {
        overlay: false,
      },
    },
  };
});