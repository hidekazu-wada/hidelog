import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'
import icon from 'astro-icon'
import { unified } from '@astrojs/markdown-remark'
import rehypeFigureTitle from 'rehype-figure-title'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs'
import { remarkModifiedTime } from './src/plugins/remark-modified-time.mjs'

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.wadahide.com',
	integrations: [
		mdx(),
		sitemap(),
		icon(),
		partytown({
			config: {
				forward: ['dataLayer.push'],
			},
		}),
	],
	// 7 で既定が 'jsx' に変わり、インライン要素間の空白が詰まるため 5 と同じ挙動を明示する
	compressHTML: true,
	vite: {
		plugins: [tailwindcss()],
		build: {
			// Vite 8 の既定（Safari 16.4+）だとメディアクエリが範囲記法（width>=…）になり古い iOS で崩れるため、5 と同じ出力に揃える
			cssTarget: ['edge88', 'firefox78', 'chrome87', 'safari14'],
		},
	},
	markdown: {
		// Astro 7 の既定の処理系（Sätteri）では remark/rehype が動かないので unified を明示する
		processor: unified({
			remarkPlugins: [remarkReadingTime, remarkModifiedTime],
			rehypePlugins: [rehypeFigureTitle, rehypeAccessibleEmojis],
		}),
	},
})
