import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { sveltePreprocess } from 'svelte-preprocess';

export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: sveltePreprocess()
		})
	],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler' // or "modern"
			}
		}
	}
});
