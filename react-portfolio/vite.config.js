import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            external: [
                'graphql/validation/rules/KnownArgumentNamesRule',
                'graphql/validation/rules/ProvidedRequiredArgumentsRule',
            ],
        },
    },
    server: {
        port: 3000,
        open: true,
        proxy: {
            '/graphql': {
                target: 'http://localhost:3001',
                secure: false,
                changeOrigin: true,
            },
        },
    },
});
