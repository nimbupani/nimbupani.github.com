---
layout: post
title: "Using background clip for text with CSS fallback"
date: 2013-02-02 14:25
comments: true
category: Web Development
---

I was looking at the lovely design of [polygon](http://polygon.com) when their use of `background-clip` & `background: linear-gradient(…)` immediately suggested a JS-free fallback for using the non-standard `background-clip: text`.

## What it is
`background-clip` is a CSS property that was [originally introduced in WebKit (in 2008)](https://www.webkit.org/blog/164/background-clip-text/) that allows backgrounds specified on elements to clip to the text content of the element like so:

![](http://s3.amazonaws.com/nimbublips/1359844612.png)

by merely using the following code:

<pre>body{
 color: transparent;
 background: url(path/to/bg/image) repeat;
 -webkit-background-clip: text;
}
</pre>

However, `background-clip: text` is not part of any standard yet – but [other values such as `border-box` or `content-box` are](http://dev.w3.org/csswg/css3-background/#the-background-clip).

## The Problem
It is no surprise to find people using non-standard properties in HTML, and it is no big deal if it fails gracefully in other browsers. Unfortunately, `background-clip: text` fails rather spectacularly in non-WebKit browsers:

![](http://s3.amazonaws.com/nimbublips/1359844975.png)

The above is how it appears (when you use [placekitten](http://placekitten.com) to generate the background image) in Firefox. You cannot even read the text! This is clearly a disastrous situation.

## Current Solutions
The most commonly used solution is to use [Modernizr](http://modernizr.com) to detect if `background-clip: text` is available, and then use a class `backgroundcliptext` to apply `background-clip:text` selectively – [Polygon](http://polygon.com) does this too.

## Purely CSS solution
While looking at the code, I suddenly realized that if you use only the `-webkit-` prefixed value for `background` property, then `background-clip: text` would only apply when `-webkit-` prefixed values are supported in browsers – effectively curtailing its use to WebKit browsers:

<pre>body {
 color: transparent;
 background: -webkit-linear-gradient(transparent, transparent),
             url(path/to/bg/image) repeat;
 -webkit-background-clip: text;
}</pre>

Hurray! We are almost there! The background no longer appears in non-WebKit browsers:

![](http://s3.amazonaws.com/nimbublips/1359845371.png)

…until you test in Opera, which also [supports `-webkit-` prefixes for site compatibility](http://my.opera.com/ODIN/blog/opera-12-10-is-out). But, it is easy to solve for by merely adding `-o-` prefixed background value:

<pre>body {
 color: transparent;
 background: -webkit-linear-gradient(transparent, transparent),
             url(path/to/bg/image) repeat;
 background: -o-linear-gradient(transparent, transparent);
 -webkit-background-clip: text;
}</pre>

But, wait, the `color: transparent` would make the text invisible in all browsers! Let us change that to a readable color:

<pre>body {
 color: red;
 background: -webkit-linear-gradient(transparent, transparent),
             url(path/to/bg/image) repeat;
 background: -o-linear-gradient(transparent, transparent);
 -webkit-background-clip: text;
}</pre>

But now the color fills the text, and the clipped background is no longer shown in WebKit browsers :(

![](http://s3.amazonaws.com/nimbublips/1359845928.png)

## `text-fill-color` to the rescue
[`text-fill-color` (introduced in 2006)](https://www.webkit.org/blog/85/introducing-text-stroke/) fills text with a color when used in conjunction with a `text-stroke`. It behaves exactly like `color` except we now have the advantage of having it apply only to WebKit browsers! Nirvana!

<pre>body {
 color: red;
 -webkit-text-fill-color: transparent;
 background: -webkit-linear-gradient(transparent, transparent),
             url(path/to/bg/image) repeat;
 background: -o-linear-gradient(transparent, transparent);
 -webkit-background-clip: text;
}</pre>

Here is how it appears in WebKit browsers and non-WebKit browsers respectively:

![](http://s3.amazonaws.com/nimbublips/1359846393.png)

You only have to use 2 extra css properties, to make it fail-safe in all browsers and need not run a feature-detection script. Currently, only Opera requires the background reset using the `-o-` prefix, but if more browsers start supporting `-webkit-` prefix then each of those browsers need a reset (e.g. `background: -moz-linear-gradient(transparent, transparent);`). But I don't think this will happen.
