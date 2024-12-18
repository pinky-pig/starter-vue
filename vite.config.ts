/* eslint-disable node/prefer-global/process */
/// <reference types="vitest" />

import { resolve } from "node:path";
import { type PluginOption, defineConfig, loadEnv, mergeConfig } from "vite";

import CleanCSS from "clean-css";
import baseConfig from "./vite.base.config";
import cesiumConfig from "./vite.cesium.config";

const cleanCssInstance = new CleanCSS({});
function minify(code: string) {
  return cleanCssInstance.minify(code).styles;
}

let cssCodeStr = "";

export default defineConfig(({ mode }) => {
  // process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd()));

  if (mode === "lib") {
    return mergeConfig(baseConfig, {
      build: {
        lib: {
          entry: resolve(__dirname, "packages/index.ts"),
          name: process.env.VITE_PKG_NAME,
          fileName: process.env.VITE_PKG_NAME,
        },
        outDir: "output-lib",
        emptyOutDir: true,
        cssCodeSplit: true,
        sourcemap: false,
        rollupOptions: {
          external: ["vue"],
          output: [
            {
              format: "umd",
              name: `${process.env.VITE_PKG_NAME}.umd.js`,
              entryFileNames: `${process.env.VITE_PKG_NAME}.umd.js`,
            },
            {
              format: "es",
              entryFileNames: `${process.env.VITE_PKG_NAME}.es.js`,
              preserveModules: false,
            },
          ],
        },
      },
      publicDir: false,
      plugins: [
        {
          name: "inline-css",
          transform(code, id) {
            const isCSS = (path: string) => /\.css$/.test(path);

            if (!isCSS(id)) return;
            const cssCode = minify(code);
            cssCodeStr += cssCode;
            return {
              code: "",
              map: { mappings: "" },
            };
          },
          renderChunk(code, { isEntry }) {
            if (!isEntry) return;

            return {
              code: `\
              function __insertCSS(code) {
                if (!code || typeof document == 'undefined') return
                let head = document.head || document.getElementsByTagName('head')[0]
                let style = document.createElement('style')
                style.type = 'text/css'
                head.appendChild(style)
                ;style.styleSheet ? (style.styleSheet.cssText = code) : style.appendChild(document.createTextNode(code))
              }\n
              __insertCSS(${JSON.stringify(cssCodeStr)})
              \n ${code}`,
              map: { mappings: "" },
            };
          },
        },
      ] as PluginOption,
    });
  } else {
    return mergeConfig(
      mergeConfig(baseConfig, {
        base: process.env.VITE_BASE_URL,
        build: {
          outDir: "dist",
        },
      }),
      cesiumConfig,
    );
  }
});
