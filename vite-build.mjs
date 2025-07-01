import path from "path";
import url from "url";
import { build, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import typescript from '@rollup/plugin-typescript';
import globals from "./webcomponents/globals.json" with { type: "json" };
import { writeFile, copyFile, mkdir } from "fs/promises";

const liteRollup = {
  external: Object.keys(globals),
  output: {
    globals
  },
}

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const muiModalWCConfig = {
  plugins: [],
  entry: path.resolve(__dirname, "./webcomponents/mui-modal.ts"),
  name: "mui-modal",
  formats: ["umd"],
};
const simpleBoxWCConfig = {
  plugins: [],
  entry: path.resolve(__dirname, "./webcomponents/simple-box.ts"),
  name: "simple-box",
  formats: ["umd"],
};
const blogAppWCConfig = {
  plugins: [],
  entry: path.resolve(__dirname, "./webcomponents/blog-app.ts"),
  name: "blog-app",
  formats: ["umd"],
};

const dependenciesConfig = {
  plugins: [],
  entry: path.resolve(__dirname, "./webcomponents/dependencies.js"),
  name: "dependencies",
  formats: ["umd"],
};

const getConfiguration = ({ plugins, ...library }, mode) => {
  return defineConfig(() => ({
    define: {
      'process.env': { NODE_ENV: "production" }
    },
    plugins: [
      react({
        babel: {
          plugins: [
            "styled-jsx/babel"
          ],
        }
      }),
      typescript({
        tsconfig: "./tsconfig.json",
        outDir: "./dist",
      }),
      ...plugins
    ],
    build: {
      emptyOutDir: false,
      lib: {
        ...library,
        fileName: (format) => `${library.name}.${mode}.${format}.js`
      },
      outDir: "./dist",
      rollupOptions: mode === "lite" ? liteRollup : {},
    },
  }));
};

const createDependencyRollup = () => {
  const imports = Object.entries(globals).map(([modulePath, globalName]) => `import ${globalName} from "${modulePath}";`);
  
  const guard = `const rootObj = typeof window !== "undefined" ? window : global`;

  const assignments = Object.entries(globals).map(([modulePath, globalName]) => `rootObj.${globalName} = ${globalName};`);

  return writeFile(path.resolve(__dirname, "./webcomponents/dependencies.js"), [...imports, guard, ...assignments].join("\n"));
}

const viteBuild = (configFactory) => {
  const config = configFactory();

  return build(config);
};

const copyHtmlFiles = async () => {
  const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
  
  // Ensure dist directory exists
  try {
    await mkdir(path.resolve(__dirname, "./dist"), { recursive: true });
  } catch (err) {
    // Directory might already exist
  }
  
  // Copy HTML files to dist
  await copyFile(
    path.resolve(__dirname, "./complete-demo.html"),
    path.resolve(__dirname, "./dist/complete-demo.html")
  );
  
  await copyFile(
    path.resolve(__dirname, "./index.html"),
    path.resolve(__dirname, "./dist/index.html")
  );
  
  // Copy complete-demo.html as index.html for Vercel default page
  await copyFile(
    path.resolve(__dirname, "./complete-demo.html"),
    path.resolve(__dirname, "./dist/index.html")
  );
};

const buildLibraries = async () => {
  await createDependencyRollup();

  await Promise.all([].concat(
    ...["lite", "full"].map(mode => [
      viteBuild(getConfiguration(muiModalWCConfig, mode)),
      viteBuild(getConfiguration(simpleBoxWCConfig, mode)),
      viteBuild(getConfiguration(blogAppWCConfig, mode)),
    ]),
    [viteBuild(getConfiguration(dependenciesConfig, "full"))]
  ));
  
  // Copy HTML files after building JavaScript
  await copyHtmlFiles();
};

buildLibraries();