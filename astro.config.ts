import alpinejs from "@astrojs/alpinejs";

import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import AstroPWA from "@vite-pwa/astro";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import { siteTitle, siteUrl } from "./site.config";

// https://astro.build/config
export default defineConfig({
	site: siteUrl,
	output: "static",
	compressHTML: true,
	redirects: {
		"/admin": "/keystatic",
	},
	build: {
		inlineStylesheets: 'auto',
	},
	vite: {
		define: {
			__DATE__: `'${new Date().toISOString()}'`,
		},
		build: {
			rollupOptions: {
				output: {
					assetFileNames: (assetInfo) => {
						const info = assetInfo.name.split('.');
						const extType = info[info.length - 1];
						if (/\.(css)$/.test(assetInfo.name)) {
							return `assets/css/[name]-[hash][extname]`;
						}
						if (/\.(js)$/.test(assetInfo.name)) {
							return `assets/js/[name]-[hash][extname]`;
						}
						return `assets/[name]-[hash][extname]`;
					},
				}
			}
		}
	},
	integrations: [
		alpinejs(),
		tailwind({
			// Base style is applied on the file global.css
			applyBaseStyles: false,
		}),
		sitemap(),
		icon(),
		react(),
		markdoc(),

		robotsTxt({
			policy: [{ userAgent: "*", allow: "/" }],
		}),
		AstroPWA({
			mode: import.meta.env.PROD ? "production" : "development",
			base: "/",
			scope: "/",
			includeAssets: ["favicon.png"],
			registerType: "autoUpdate",
			injectRegister: false,
			manifest: {
				name: siteTitle,
				short_name: siteTitle,
				description: "BaQshi - Professional Web Services",
				theme_color: "#ffffff",
				background_color: "#ffffff",
				display: "standalone",
				scope: "/",
				start_url: "/",
			},
			pwaAssets: {
				config: true,
			},
			workbox: {
				globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"],
				globIgnores: ["**/_worker.js/**/*", "_worker.js", "**/keystatic/**/*"],
				skipWaiting: true,
				clientsClaim: true,
			},
			devOptions: {
				enabled: false,
			},
		}),
	],
});
