import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
	const blog = await getCollection('blog', ({ data }) => data.draft !== true)
	return rss({
		// `<title>` field in output xml
		title: 'HideLog',
		// `<description>` field in output xml
		description:
			'AIエンジニアとリゾート経営の現場から。WordPressの復旧・保守やWeb制作、AIを使った業務の仕組みづくり、ホテルとキャンプ場の経営で、実際に起きたことと判断の記録を書いています。',
		// Pull in your project "site" from the endpoint context
		// https://docs.astro.build/en/reference/api-reference/#site
		site: context.site,
		// Array of `<item>`s in output xml
		// See "Generating items" section for examples using content collections and glob imports
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			// Compute RSS link from post `id`
			// This example assumes all posts are rendered as `/blog/[id]` routes
			link: `/blog/${post.id.replace('.md', '')}/`,
		})),
	})
}
