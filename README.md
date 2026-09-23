# Saral Theme

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![Lint, Format, and Type Check](https://github.com/hidekazu-wada/hidelog/actions/workflows/lint.yml/badge.svg)](https://github.com/hidekazu-wada/hidelog/actions/workflows/lint.yml)

A simple & minimal theme for personal blog sites, crafted for Astro framework.

View blog at [https://hidekazu-wada.github.io/hidelog/](https://hidekazu-wada.github.io/hidelog/)

> Like what you see? Consider starring the repository 🌟

![Theme Screenshot](./screenshot.jpg)

HideLog - Personal blog built with Astro

## Custom categories & writing template

The blog is organized around the following slugs defined in `src/consts.ts`:

| Slug         | Name          | Notes                              |
| ------------ | ------------- | ---------------------------------- |
| `dive`       | Dive Life     | 安全と恐怖克服、海外ショップ運営   |
| `strength`   | Strength Lab  | 週6筋トレの分割・栄養ログ          |
| `code`       | Code & Tech   | Web制作・WordPress復旧・SEO・Astro |
| `nature`     | Nature Living | 自然豊かな地域での暮らし方         |
| `family`     | Family & Home | 夫婦生活、子育て、家づくり         |
| `books`      | Books & Ideas | 読書ログと実践メモ                 |
| `playground` | Playground    | 実験メモ・旅・新企画の下書き       |

Each article should declare its category (and optional CTA overrides) in the frontmatter:

```
---
title: 'タイトル'
description: 'ディスクリプション'
pubDate: '11 17 2025'
coverImageCredit: ''
category: 'dive'
ctaTitle: 'カスタムCTAタイトル (任意)'
ctaDescription: 'CTA文章 (任意)'
ctaLabel: 'ボタン文言 (任意)'
ctaHref: '/contact'
---
```

If no CTA overrides are provided, the defaults from the category definition are used. New categories can be added by updating `Categories` in `src/consts.ts`; the navigation、トップページのカード、カテゴリページ、記事CTAが自動で同期されます。

## Features

- Image optimization on build
- Accessible emojis
- Automatic reading time display for posts
- Automatic last update status for posts
- Dark mode support
- RSS feed
- Includes GitHub workflows for linting & formatting

## Getting started

- Clone this repository
- Install dependencies with `npm i`
- Start dev server with `npm run dev`
- Remove `<meta name="robots" content="noindex" />` tag from `src/components/BaseHead.astro` file
- Remove `.github/workflows/deploy.yml` if not deploying to [GitHub Pages](https://docs.github.com/en/pages)
- Update `base` value in `src/consts.ts` file - if your site is not in a subdirectory, make it empty string
- Update favicons & opengraph images ([realfavicongenerator.net](https://realfavicongenerator.net/) is a nice site to get the favicons cropped)
- Update page content & images
- Publish your site 🚀

## Adding a blog post

- Add `your-blog-post.md` file under `src/content/blog` (filename denotes the URL slug)
- Write content in file using Markdown syntax
- Add cover image at `src/assets/blogimages/<YOUR_SLUG>/cover.jpg` - Recommended dimensions: `853x480px`
- For adding images to content, use the folowing syntax for caption support `![Alt text](../../assets/blogimages/<YOUR_SLUG>/imagename.ext)`
- Create a PR & merge after passing workflow checks

> [!TIP]
> Facing any issues or want a feature? Feel free to create a new [issue](https://github.com/hidekazu-wada/hidelog/issues)

---

<a href="https://hidekazu-wada.github.io/hidelog/" target="_blank">HideLog</a>
