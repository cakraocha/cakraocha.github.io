import adapter from '@sveltejs/adapter-static';
// was @sveltejs/adapter-auto
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === "development"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs",
		}),
		paths: {
			// change below to your repo name
            base: dev ? "" : "/cakraocha.github.io",
		},
		prerender: {
			default: true
		}
		// hydrate the <div id="svelte"> element in src/app.html
		// target: "#svelte"
	}
};

export default config;
