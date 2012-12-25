---
layout: post
title: "Adaptive Design Using Unicode Private Use Area for Icon Fonts"
date: 2012-12-25 08:58
comments: true
category: "Web Development"
---

I used icon fonts extensively while designing [fripfrap.io](http://fripfrap.io). Unfortunately, icon fonts require tags wrapped around where they should be placed, and I went on a quest to find out if we can adaptively render icon fonts without any extra markup.

## Icon Fonts
Icon fonts are easy clean way to render icons across all sizes of text. The other advantage is you can apply all the text controls that are available including `text-shadow`, `vertical-align`, `font-size` to tweak the output as you like, instead of fiddling around in SVG or with image sprites ([here are more details on why icon fonts are better](http://blog.pictonic.co/post/32869817328/svgs-are-cool-but-icon-fonts-are-just-10-of-their)). The typical usage of icon fonts as pioneered by [@simurai](http://lab.simurai.com/buttons/) is:

<pre>[data-icon]::before {
    content: attr(data-icon);
}</pre>

Then, when you generate custom icon fonts using services like [icomoon](http://icomoon.io/app), you can specify a character that will be used to represent that icon and use that as the value of the icon in the mark-up. For example, to render the twitter icon, I select the Twitter icon from one of the various free icons available on icomoon, and then set the character to be 't' in the app, and download the font:

![](http://s3.amazonaws.com/Gyazo/1356408460.png)

In your markup, you declare:

<pre>&lt;b data-icon=t>subscribe on twitter&lt;/b>
</pre>

This markup in combination with the CSS we declared earlier, would [render the twitter icon like so](http://codepen.io/nimbupani/pen/fdlLe):

![](http://s3.amazonaws.com/Gyazo/1356408772.png)

## Problem with Using Icon Fonts via Generated Content
The first problem with this technique is Screen readers would read the alphabet used for the property `content`. This means, a person who uses a screen reader to navigate would hear 't twitter' rather than just 'twitter'. This obviously is not so fun.

## Using Private Use Area for Icon Fonts
Fonts are basically key value pairs, with the key being the character and the value a glyph (a path representation). For example, you see these letters in this post because the browser comes across a character, looks up the table for the font specified, & uses that glyph to render that character (e.g. 'a' or 'b' or '.'). The universal standard that is being increasingly adopted is called [Unicode](http://www.joelonsoftware.com/articles/Unicode.html).

There is a whole range of key-value pairs within the Unicode table that are deliberately empty and that range is called Private Use Area (PUA).

We can use this area to reference icon fonts. Using [Icomoon's icon font generator](http://icomoon.io/app), you can specify your icon as the glyph to represent a character from this PUA range:

![](http://s3.amazonaws.com/Gyazo/1356429440.png)

[Icomoon's documentation covers more details on how to use this](http://icomoon.io/#docs#screenreaders). Essentially, it is as simple as specifying the character used for the icon to be one from the Private Use Area (PUA) and using the HTML entity equivalent as a value for the `data-icon` attribute:

<pre>&lt;b data-icon='&amp;#xe000;'>subscribe to twitter&lt;/b></pre>

This would solve the problem of having screen readers read out icon fonts incorrectly, but it still leaves us with an extra set of tags, attribute (`data-icon`) & associated style that I think we could do without. This we can do with the CSS property called `unicode-range`.

## Unicode Range
I previously mentioned `unicode-range` in my [round-up of what is new in CSS](http://nimbupani.com/jscamp-css-next.html), & how it can be used to [enhance an existing ampersand](http://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/). I also have been wondering if unicode-range in combination with icon fonts set in Private Use Area could be used to render icons.

The markup then would merely be:

<pre>&amp;#xe000; subscribe to twitter</pre>

While the font-face declaration would change to:
<pre>@font-face {
    font-family: 'icons';
    src: url(path/to/font.woff) format('woff');
    <b>unicode-range: U+E000-U+E005;</b>
}</pre>

Then, when you define the base font:
<pre>body {
   font-family: <b>icons</b>, sans-serif;
}</pre>

This would render the icons inline with no other additions. This is nice, but previously with the `data-icon` process we could very easily hide or show icons based on Media/Feature queries by simply doing:

<pre>@media (max-width: 400px) {
    [data-icon]::before { content: none; }
}</pre>

But with inline icons, removing the font from the `font-family` would leave you with the empty rectangular glyph ():

![](http://s3.amazonaws.com/Gyazo/1356426010.png)

Does this mean, using unicode-range for fonts is a bust? Do we still need markup around these icons? There is a way out!

## Layout Font to the Rescue
When I was wondering how to prevent this on Twitter, [Christian Schaefer](http://twitter.com/derschepp) suggested the use of [Layout Font](https://github.com/jonathantneal/layout-webfont) (a font that [Jonathan Neal](http://www.jonathantneal.com/) invented to solve the problem of white-space impacting layouts using `display: inline-block` in CSS). The layout font merely replaces every glyph with what appears to be a "no space" in the font table. This will mean browsers when using this font would represent white space effectively as no space.

Now I was trying to figure out how to transform this font into one that would have this same "no space" as the value for all unicode characters. At this juncture, [Keyamoon](http://twitter.com/keyamoon) came to the rescue by creating a [base-64 encoded version of the layout font](http://codepen.io/Keyamoon/pen/bnwDL).

And so, we are satisfied! Here is an example of how to use icon fonts with `unicode-range` but with a graceful fallback in case we do not want to render these icons any more.

<pre>@font-face {
    font-family: space;
    src: url(data:application/x-font-woff;charset=utf-8;base64,d09GRk9UVE8AAAOYAAsAAAAABUwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAABCAAAAIQAAACQ1P+0gUZGVE0AAAGMAAAAGgAAABxjhaFsR0RFRgAAAagAAAAbAAAAIAAvAARPUy8yAAABxAAAAEsAAABgP9zcNGNtYXAAAAIQAAAAOgAAAUrgERK3aGVhZAAAAkwAAAAuAAAANvsbcvdoaGVhAAACfAAAAB0AAAAkBBD942htdHgAAAKcAAAACAAAAAgAAAAAbWF4cAAAAqQAAAAGAAAABgACUABuYW1lAAACrAAAAN4AAAGJ242MgnBvc3QAAAOMAAAADAAAACAAAwAAeJw9zUEKwjAQRuF/kkhKDa2WKgqjZ8gJXHoBj+CqSJtNK3gCkdnmsLMQFEHdvdX3CM6BiIrunPqUBpAB4aBsdGd14yRYCW5fYntqXiL/CF4umnWcMa41AwvGbcnwjEcD+zEK1FhPQ3eMMX7x3wOgOwyRmVc6umfW7CtpZSWhfANCyyLweJxjYGBgZACCk535hiD6zD9JWRgNAEIVBfQAAHicY2BkYGDgA2IJBhBgYmCEQhYwjwEABFUANAB4nGNgZvzCOIGBlYGD0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAMBBJMhIM01hcHhA8MHBsYH/x8w6DE+YFBoYGBghCtQAEJGAGqIDSIAeJxjYGBgZoBgGQZGBhBwAfIYwXwWBg0gzQakGRmYGBg+MPz/D1IAoQUYoeqBgJGNAcEZoQAAbecGtwAAeJxjYGRgYADiTz08rvH8Nl8ZuJkYQODMP0lZBP3/ARMD4wMgl4MBLA0AIQUKSgAAeJxjYGRgYHzw/wGDHgMQ/GNgAnIZUAETAG2yA/MAAAAAAAAAAAAAAAAAUAAAAgAAeJx1jjFOAzEQRd8mmyAUhKgQpQsKml3ZVqocYEVNkT6KrNVKSSw5SZOD0HIESo7BATgCl+DHcUMRSyM/f/+ZP8Ad71ScT8UND4VH4pfCY545Fa6lfxaeMOO78FT6r5xVfSvlPnedeSR+KjzmFVu4lv5ReMIjX4Wn0n8YWBPZqiI7GNZxG6PgjUDPkQ0rkp6hP25Wgi77DvlOcgQMnlZphoXq/7yL5pnT4HQ3KpuJLu4OXUx9ML61ZmFKssjPG+cbb51c19ZbKjix1/8lxuUVWIa0HzTEtfZq7x+jCTpIAAB4nGNgZsALAAB9AAQ=) format('woff');
}

body { font-family: <b>icons</b>, sans-serif; }

@media (max-width: 400px) {
    body { font-family: <b>space</b>, sans-serif; }
}</pre>

You can see this [adaptive icon font in action here](http://nimbu.in/private-use-unicode).

## Browser Support
Why do you trouble me with reality? :| I previously erroneously stated that `unicode-range` is supported amongst all browsers, but this is not the case. It is only supported in Safari & Chrome.

This method maybe useful when `unicode-range` is more widely supported, but all I wanted to do was to find new ways to kill fluffy markup.
