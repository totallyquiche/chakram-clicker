import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter()
    },
    vite: {
        resolve: {
            alias: {
                $src: resolve('./src'),
                $components: resolve('./src/components'),
                $sections: resolve('./src/sections')
            }
        }
    }
};

export default config;
