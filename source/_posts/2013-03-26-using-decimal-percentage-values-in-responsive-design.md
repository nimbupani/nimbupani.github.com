---
layout: post
title: "Using decimal percentage values in responsive design"
date: 2013-03-26 04:24
comments: true
category: 'Web Development'
---

At work I get many samples of code to be reviewed, most of them with a warning 'only works in Chrome'. Nevertheless, I open these pages in Safari & mostly they work. Yesterday I came across something that didn't. This post is a result of that investigation.

The page layout was broken in Safari and as I turned on the Inspector, I noticed the way the values were being specified:

<pre>
margin: 0 0 0 6.3124621208203820812122%;
width: 48.121212121212121212121212%
</pre>

(The values are not the same as the ones I saw in the code, but the number of decimals used is similar)

I was stupified.

## Unreadable Code

When values are so large, it becomes really hard to actually understand the exact round number equivalent. It took me a while to realise that the margin was supposed to be approx. 6% of the (pause) 48% width. I know I am not that bad at calculating numbers in my head!

Over-preciseness never worked in WebKit until very recently. WebKit [recently enabled subpixel units](http://trac.webkit.org/wiki/LayoutUnit) that would allow the painting of half a pixel. So what are these precise decimals doing?

## History

I expressed [my disappointment at having such unreadable code](https://twitter.com/divya/status/316284818675625985) on twitter (where else do you rant?!), and I received feedback that this is how 'responsive design' is done, and for pointers linked to the [original article by Ethan Marcotte](http://alistapart.com/article/responsive-web-design) who pointed to [initial post on fluid design](http://alistapart.com/article/fluidgrids).

The use of percentages stem from the Fluid Grids post, where it has been argued:

<pre>
(target pixel value / context pixel value) * 100 = length value in percentage
</pre>

This percentage value is typically pasted to the whole 10 decimal places (or more!) that you get when you use a calculator in typical 'responsive' websites.

## Why we do it
The article has a footnote on rounding that states that, by over-specifying the values you avoid Rounding errors because you give sufficient information to the browser to round up or down.

All browsers have since fixed the rounding issue, so this may no longer apply. Even discounting that fact, let us see how many decimal values you need for the errors to be significant enough to cause layout errors. Given the previous math, the target pixel size becomes:

<pre>
target pixel value = length value in percentage * context pixel value
</pre>

Lets calculate what the target pixel width would be with just 2 decimal places, when the context is 1000px & 5000px respectively. 5000px is an outlier given even [Retina Display resoution does not exceed 2560 pixels](http://en.wikipedia.org/wiki/Retina_Display):

<pre>
16.67% * 1000px = 166.7px
16.67% * 5000px = 833.5px
</pre>

Let us try to calculate the same result with 3 decimal places:

<pre>
16.667% * 1000px = 166.67px (-0.03 from previous value)
16.667% * 5000px = 833.35px (-0.15 from previous value)
</pre>

How about for 4 decimal places?

<pre>
16.6667% * 1000px = 166.667px (-0.003 from previous value)
16.6667% * 5000px = 833.335px (-0.015 from previous value)
</pre>

While the difference in the approximation seems significant enough to consider using 3 decimal places, the move to 4 decimals or more seems irrelevant. The values are fairly trivial even for impossible pixel widths.

## How should we do it?

If your intent is to inform the browser to take accurate action based on a fraction. Why not provide that fraction? CSS provides a handy `calc` function that allows you to pass in any calculation, and the browser will calculate appropriately. This would result in:

<pre>
h1 {
 width: calc(1/6 * 100%);
}
</pre>

Do note [`calc` is supported in most browsers](http://caniuse.com/calc) except Opera (which will soon when it switches to WebKit) or older iOS or Android browsers.

But in the interest of graceful degredation, we can always provide:

<pre>
h1 {
 width: 16.667%;
 width: calc(1/6 * 100%);
}
</pre>

## A note about ems

As [Scott Jehl pointed out](https://twitter.com/scottjehl/status/316350378809647105) the decimal values raise in significance as soon as you start using them directly on em units like so:

<pre>
h1 {
 font-size: 36em;
 margin: 0 0 0 0.009em;
}
</pre>

I would only want you to consider using `rem` as a unit instead, & avoiding confusing complicated scenarios ems bring with them.

## Think before you use!

In HTML5 Boilerplate, most of the code we add or delete have valid proven reasons for their existence or non-existence, so to see something be accepted as common methodology without scrutiny was disconcerting. Many have suggested they have previously come across problems with smaller decimal values, but there is no reproducable test case.

If you have one, please do [let me know on twitter](http://twitter.com/divya).
