import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";
import VueMacros from "unplugin-vue-macros/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": path.join(__dirname, "src"),
        },
    },
    build: {
        outDir: "docs",
    },
    plugins: [
        VueRouter(),
        VueMacros({
            plugins: {
                vue: Vue(),
            },
        }),
    ],
});
