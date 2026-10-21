import type { CollectionEntry } from 'astro:content'

/**
 * 記事の並び：公開日の新しい順。同日の記事は id（＝URL のスラッグ）順で固定する。
 * Astro 7 の glob loader では取得順が旧方式と変わるため、すべての一覧で同じ並びにする。
 */
export function comparePosts(
	a: CollectionEntry<'blog'>,
	b: CollectionEntry<'blog'>
): number {
	const byDate = b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	if (byDate !== 0) {
		return byDate
	}
	return a.id < b.id ? -1 : a.id > b.id ? 1 : 0
}
