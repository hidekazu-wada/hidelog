import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { CATEGORY_SLUGS } from './consts'

const blog = defineCollection({
	// 先頭が `_` のファイル（_template.md）は旧方式と同じく対象外
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		coverImageCredit: z.string().optional(),
		category: z.enum(CATEGORY_SLUGS).optional(),
		ctaTitle: z.string().optional(),
		ctaDescription: z.string().optional(),
		ctaLabel: z.string().optional(),
		ctaHref: z.string().optional(),
		draft: z.boolean().default(false),
	}),
})

export const collections = { blog }
