import { UserConfig, UserConfigFn } from "vite";
import { dependencies } from "./package.json";
import { builtinModules } from "module";

export default <UserConfigFn>function ({ mode, command }) {
    const _config: UserConfig = {
        root: __dirname,
        build: {
            outDir: "dist",
            emptyOutDir: true,
            minify: mode === "production",
            sourcemap: mode === "development",
            lib: {
                entry: "src/index.ts",
                formats: ["cjs", "es"],
                fileName: "index"
            },
            rollupOptions: {
                external: [ ... builtinModules, ... Object.keys(dependencies) ]
            }
        }
    }


    if (mode === "development") _config.build.watch = {
        buildDelay: 100,
        exclude: "node_modules/**",
        include: "src/**"
    }

    return _config
}