import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit({
		compilerOptions: {
		  dev: true
		}
	  }
	)]
};

export default config;
