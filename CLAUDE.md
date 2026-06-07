# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal blog built with [Hexo](https://hexo.io/) (v6.3.0) and the `next-reloaded` theme, deployed to GitHub Pages. The `source` branch holds content and config; deploying pushes generated HTML to the `master` branch.

## Common commands

```bash
npm run server    # local dev server at http://localhost:4000
npm run build     # generate static site into public/
npm run clean     # clear generated files and cache (db.json)
npm run deploy    # build + push to master branch on GitHub
```

## Content workflow

New posts live in `source/_posts/` as Markdown files. Hexo scaffolds:

```bash
npx hexo new post "Post Title"     # creates source/_posts/Post-Title.md
npx hexo new draft "Draft Title"   # creates source/_drafts/
npx hexo publish "Draft Title"     # moves draft to _posts
```

Front matter fields used in posts: `title`, `date`, `categories`, `tags`.

## Architecture

- `_config.yml` — site-wide config: URL, theme, deploy target, plugins
- `source/` — all content (posts, pages, static assets in `uploads/`)
- `themes/next-reloaded/` — active theme; has its own `_config.yml` inside
- `public/` — generated output, not committed on `source` branch
- `scripts/` — custom Hexo scripts that run during generation

The deploy target is `git@github.com:DarkAlexWang/darkalexwang.github.io.git` branch `master`.

## Theme customization

Theme config is at `themes/next-reloaded/_config.yml`. Prefer editing that file over touching theme source files directly, as overrides there survive theme updates.

## Encrypted posts

Some posts use a Hexo encryption plugin (see `encrypt: enable: true` in `_config.yml`). Encrypted post filenames typically end in `-加密.md`.
