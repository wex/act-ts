import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'docs',
    },
    base: './',
    publicDir: "assets",
})