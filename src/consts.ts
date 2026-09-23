// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'HideLog'
export const SITE_DESCRIPTION =
	'WordPressの復旧やサーバー、SEO、Astroなど、Web制作の現場で実際に手を動かして分かったことを書いています。ダイビングやトレーニング、暮らしの記録も。'

export const CATEGORY_SLUGS = [
	'code',
	'dive',
	'strength',
	'nature',
	'family',
	'books',
	'playground',
] as const

export type CategorySlug = (typeof CATEGORY_SLUGS)[number]

export type CategoryDefinition = {
	slug: CategorySlug
	name: string
	tagline: string
	description: string
	summary: string
	focus: string[]
	ctaLabel: string
	ctaHref: string
	ctaDescription?: string
	showOnHome?: boolean
}

export const Categories: CategoryDefinition[] = [
	{
		slug: 'code',
		name: 'Code & Tech',
		tagline: '現役エンジニアの実装ログ',
		description:
			'Web制作、WordPressのトラブル復旧、SEO、Astro。現場で実際に手を動かした記録を、設計の視点から残します。',
		summary: 'WordPress復旧、セキュリティ、Astro、SEO設計。',
		focus: [
			'WordPress復旧・セキュリティ',
			'Astroとパフォーマンス',
			'SEOと設計',
		],
		ctaLabel: 'Webの相談をする',
		ctaHref: 'mailto:info@wadahide.com?subject=Web制作・トラブル対応のご相談',
		ctaDescription:
			'Web制作、WordPressの復旧・保守、SEO改善のご相談を受け付けています。',
	},
	{
		slug: 'dive',
		name: 'Dive Life',
		tagline: '水中の冒険',
		description:
			'インストラクターの視点で、安全に潜るための知識や海外ダイビングのリアルを共有します。',
		summary: '恐怖克服、安全管理、海外ダイビング、器材レビュー。',
		focus: ['安全と恐怖克服', '海外ダイビング', '器材レビュー'],
		ctaLabel: 'ダイビングの相談をする',
		ctaHref: 'mailto:info@wadahide.com?subject=Dive%20Life%20について',
		ctaDescription:
			'安全講習、海外ダイビング、器材選びなどの相談を受け付けています。',
	},
	{
		slug: 'strength',
		name: 'Strength Lab',
		tagline: 'トレーニングの実験ログ',
		description:
			'週6で鍛える生活のメニュー、食事、ルーティンを実験ログとして残します。',
		summary: '分割メニュー、フォーム、食事とサプリ、継続の仕組み。',
		focus: ['分割メニュー', 'フォーム改善', '栄養とサプリ', '継続の仕組み'],
		ctaLabel: 'トレーニングログを読む',
		ctaHref: '/blog',
		ctaDescription:
			'トレーニングのメニュー構成やフォーム改善の実験ログをまとめています。',
		showOnHome: false,
	},
	{
		slug: 'nature',
		name: 'Nature Living',
		tagline: '自然と暮らす',
		description:
			'自然豊かな地域で暮らす幸福感や、働き方・コミュニティづくりを丁寧に綴ります。',
		summary: '拠点づくり、ローカル仕事、季節の楽しみ方。',
		focus: ['ローカルコミュニティ', '仕事と暮らしの両立', '自然との向き合い方'],
		ctaLabel: '暮らしの相談をする',
		ctaHref: 'mailto:info@wadahide.com?subject=Nature%20Living%20について',
		ctaDescription:
			'移住の準備や自然のそばで働くための工夫について共有しています。',
	},
	{
		slug: 'family',
		name: 'Family & Home',
		tagline: '家族と家づくり',
		description:
			'夫婦生活、子育て、これから始まる家づくりのプロセスを共有し、同じ悩みを持つ人のヒントに。',
		summary: 'パートナーシップ、子育て、家づくりのログ。',
		focus: ['夫婦の対話', '子育てのリアル', '家づくりプロジェクト'],
		ctaLabel: '家づくりの記録を見る',
		ctaHref: '/blog',
		ctaDescription:
			'家づくりの進捗や夫婦・子育ての気づきをまとめて更新していきます。',
	},
	{
		slug: 'books',
		name: 'Books & Ideas',
		tagline: '読書ログ',
		description:
			'本で得たアイデアを実験に結びつけ、暮らしや仕事への落とし込み方までレビューします。',
		summary: '読書記録、学びの実践、引用メモ。',
		focus: ['読書レビュー', '行動への落とし込み', '思考の整理'],
		ctaLabel: '読書メモを読む',
		ctaHref: '/blog',
		ctaDescription:
			'読んだ本をどう行動に落とし込むか、実験ログとセットで紹介します。',
	},
	{
		slug: 'playground',
		name: 'Playground',
		tagline: '実験メモ',
		description:
			'まだ形になっていないアイデアや旅、マインドの試行錯誤を気軽に残す場所です。',
		summary: '旅、実験企画、マインドセットの断片。',
		focus: ['旅と移動', '新企画の試行', '学びの断片'],
		ctaLabel: '実験ログを読む',
		ctaHref: '/blog',
		ctaDescription: '旅や新企画の試行錯誤をそのまま残していく自由帳です。',
		showOnHome: false,
	},
]

// If you deploy to a subdirectory, set the `WEBSITE_BASE` here.
// e.g. '/blog' if you are deploying to example.com/blog
// Leave it as an empty string if you are deploying to a root domain (e.g. example.com)
export const SITE_BASE = ''

export const SocialLinks = [
	{
		name: 'GitHub',
		url: 'https://github.com/hidekazu-wada',
	},
	{
		name: 'X / Twitter',
		url: 'https://x.com/SekainoWanchi',
	},
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/wadahidekazu/',
	},
]

const categoryLinks = Categories.map((cat) => ({
	name: cat.name,
	url: `category/${cat.slug}`,
}))

export const WebsiteLinks = [
	{
		name: 'Home',
		url: '/',
	},
	...categoryLinks,
	{
		name: 'Blog',
		url: 'blog',
	},
	{
		name: 'About',
		url: 'about',
	},
]

// Google Analytics 4 測定ID (例: 'G-XXXXXXXXXX')
// 環境変数から取得するか、直接設定してください
export const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID || ''

// Google Search Console 検証用メタタグのコンテンツ
// 環境変数から取得するか、直接設定してください
export const GOOGLE_SITE_VERIFICATION =
	import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION || ''
