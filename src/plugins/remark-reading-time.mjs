import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

export function remarkReadingTime() {
	return function (tree, { data }) {
		const textOnPage = toString(tree)
		const readingTime = getReadingTime(textOnPage)
		// 例：「約3分で読めます」
		data.astro.frontmatter.minutesRead = `約${Math.max(1, Math.ceil(readingTime.minutes))}分で読めます`
	}
}
