import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        ViteImageOptimizer({
            jpg: {
                quality: 50,
            },
            jpeg: {
                quality: 50,
            },
            png: {
                quality: 50,
            },
        }),
        laravel({
            input: 'resources/js/app.tsx',
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, './public/assets/')
        }
    }
});
