import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { nitro } from 'nitro/vite';

export default defineConfig({
  plugins: [
    tanstackStart(),
    nitro({
      preset: 'vercel',
      output: {
        dir: '.vercel/output',
        serverDir: '.vercel/output/functions/__server.func',
        publicDir: '.vercel/output/static',
      },
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 8080,
  },
});