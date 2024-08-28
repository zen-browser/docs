import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightViewModes from 'starlight-view-modes'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Zen Docs',
			logo: {
				src: './src/assets/my-logo.svg',
				replacesTitle: true,
			  },
			  plugins: [starlightViewModes()],
			social: {
				github: 'https://github.com/zen-browser',
				discord: 'https://discord.com/invite/nnShMQzR4b',
				mastodon: 'https://fosstodon.org/@zenbrowser',
			},
			editLink: {
				baseUrl: 'https://github.com/zen-browser/docs/edit/docs-astro/',
			  },
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			  ],
			sidebar: [
				{
					label: 'Info',
					autogenerate: { directory: 'more' },
				},
				{
					label: 'Guides',
					/* items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					], */
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Theme store',
					autogenerate: { directory: 'theme-store' },
				},
				{
					label: 'Contribute',
					autogenerate: { directory: 'contribute' },
				},
			],
		}),
	],
});
