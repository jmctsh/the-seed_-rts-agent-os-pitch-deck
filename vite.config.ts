import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, '.', '');
    const isSingleFile = process.env.BUILD_SINGLE_FILE === 'true';

    return {
      base: command === 'serve' ? '/' : './',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        isSingleFile && viteSingleFile()
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        assetsInlineLimit: isSingleFile ? 100000000 : 4096, // Force inline assets for single file build
      }
    };
});
