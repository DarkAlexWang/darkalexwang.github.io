---
title: One-line browser notepad
date: 2016-09-27 12:22:56
categories:
tags: [html, Tech, Gist]
---
Original Post was first published in [fullweb.io issue #67](https://gist.github.com/nepsilon/070daa5f631c4e56237f28775aa31158)
# One-line browser notepad 📝

Sometimes you just need to quickly take some notes.

A trick is to use the `data:` scheme with `data:text/html` to show just a piece
of HTML in your browser.
Then using the mighty `contentEditable` to make the whole thing editable.

**To copy/paste into your browser address bar:**
``html
data:text/html,<html contenteditable>
``

**And from there you can get fancier. Adding better styling:**
``html
data:text/html,<html contenteditable autofocus style="font: 500 1rem/1.5 Menlo,
monospace; background:#fafafa">
``

**From there, no limit: Turning it into a full editor:**

From [Jake Moffatt](https://gist.github.com/jakeonrails/4666256):
``html
data:text/html, <style
type="text/css">#e{position:absolute;top:0;right:0;bottom:0;left:0;}</style>
<div id="e"></div><script
src="http://d1n0x3qji82z53.cloudfront.net/src-min-noconflict/ace.js"
type="text/javascript" charset="utf-8"></script><script>var
e=ace.edit("e");e.setTheme("ace/theme/monokai");e.getSession().setMode("ace/mode/ruby");</script>
```
`
`
