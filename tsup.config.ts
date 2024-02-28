import {defineConfig} from "tsup";

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  minify: 'terser',
  clean: true,
  splitting: true,
  outDir: 'dist',
});
