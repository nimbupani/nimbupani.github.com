---
layout: post
title: "JSCamp: CSS Next"
date: 2012-12-01 06:09
comments: true
category: "Web Development"
---

I talked at [JSCamp](http://jscamp.asia) on 28th November 2012, on some of the newer features of CSS. I gave the talk without slides, so here is a description of all that I covered.

## No CSS3 or CSS4

Before I delve into what the newer features of CSS that I am very interested in are, I want to clarify a myth that keeps persists on how there are varying ‘versions’ of CSS like CSS3 and CSS4. [Tab Atkins wrote in detail about why there is no CSS3](http://www.xanthir.com/b4Ko0). Essentially, work after [CSS 2.1 specification](http://www.w3.org/TR/CSS21/) has been split into independent modules that can all reach stability independent of each other, so specifications can become stable and recommendations faster.

## Typography
The [Font Module](http://dev.w3.org/csswg/css3-fonts/) has a couple of interesting features that are worth looking at.

### Open Type Features
[![](http://s3.amazonaws.com/Gyazo/1354317414.png)](http://timepiece.inostudio.de/)

Open Type Fonts have a features file that exposes ligatures (and other features) to applications that understand and enable these. Till recently browsers did not have the ability to expose these features that would allow you to use these ligatures from within stylesheets. But now you can.

To do this, you would have to use `font-feature-settings` like so (you must add the appropriate prefixes `-ms`, `-webkit-` & `-moz-` & `-o-` when Opera supports it):

<pre>h1 {
 font-feature-settings: 'liga';
}</pre>


This tells the browser to enable Common Ligatures in the Open Type font.

Georg Seifert of [Glyphs](http://glyphsapp.com) has created a very cool font that [exploits these ligatures to create a lovely clock](http://timepiece.inostudio.de/).

### Unicode Range
Fonts are essentially a table of glyphs that represent each code point. Browsers look up the table for each code point and render that glyph on the screen.

The @font-face rule used to specify web fonts can include a declaration for [`unicode-range`](http://dev.w3.org/csswg/css3-fonts/#unicode-range-desc). When this property is declared, the browser knows that the font specified in the `@font-face` rule must only be used when that range of [unicode code points](http://www.joelonsoftware.com/articles/Unicode.html) are found in text. This way, [you can control the rendering of English letters when they occur in conjunction with letters of another language](http://rishida.net/blog/?p=760) instead of defaulting to system fonts. Here is how you would use them:

<pre>@font-face {
  font-family: myJapanesefont;
  src: local('Bookman Antiqua');
  unicode-range: U+41-5A, U+61-7A, U+C0-FF;
}</pre>

<pre>h1 {
  font-family: myJapanesefont, MS-Mincho;
}</pre>

But this property is also useful if you want to specify better ampersands or use fonts as icons. 

### Better Ampersands
A few years ago, it was all the rage to use a different font for the ampersands (&amp; symbol) than the current one. The way this was done was to wrap the symbol in a `<span class='amp'>` and then use a different font-family for the class `.amp`. With `unicode-range property`, you could merely use the @font-face rule to specify the font you want to use for that particular character (specified with `unicode-range`) and not bother at all with adding extra tags. 

This method is described in detail by Drew McLellan in his [24 Ways article](http://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/). 

[Demo of using Baskerville font for & symbol](http://nimbu.in/jscamp/unicode-range.html).

### Font Icons
The unicode tables have a private-use space allocated that would allow any font creator to use that space to create glpyhs that are not standard (e.g. glyphs that do not represent Latin, or other language characters or standardized symbols). Using this area of the table, you could create icons in a font, and only have these icons render on screen when the font itself is used. 

This is what [GitHub uses](https://github.com/blog/1135-the-making-of-octicons) for their [Octicons](https://github.com/styleguide/css/7.0).


## Layout

### Exclusions
[Exclusions](http://dev.w3.org/csswg/css3-exclusions/) would allow you to wrap text within a specified shape. Currently an implementation of `shape-inside` property that would allow text to wrap _within_ a path is available in Chrome Canary. [Bear Travis](http://twitter.com/bear_travis) wrote [a tool for determining polygon shapes](http://betravis.github.com/shape-tools/polygon-drawing/) that can be used for generating the path. In brief, you would use it as such:

<pre>.crow {
  shape-inside: polygon(0 0, 0 100%, 100% 100%, 100% 0);
}</pre>

[Demo of shape-inside](http://nimbu.in/jscamp/shape-inside.html) (_turn on 'Enable Experimental WebKit Features' in chrome:flags in Chrome Canary to see this_)

### Regions
[Regions specification](http://dev.w3.org/csswg/css3-regions/) has features that allows your content to be separate from the layout structure. 

First you declare which elements will be part of the named flow of content:

<pre>.news-items {
  flow-into: newsflow; /* name of the flow */
}</pre>

Then, you declare which elements will be the recepients of the content within the named flow:

<pre>.news-items-container {
  flow-from: newsflow; /* name of the flow */
}</pre>

This means, all elements that have the class `news-items-container` will no longer display content they originally had, but will only display content that flows into them through the named flow called `newsflow`. 

The [Web Inspector in Chrome Canary](http://blogs.adobe.com/webplatform/2012/09/27/web-inspector-support-for-css-regions/) has a way to debug which elements are part of a flow and which are recepients of a flow. 

[Demo of regions](http://nimbu.in/jscamp/regions.html) (_turn on 'Enable Experimental WebKit features' in chrome:flags in Chrome Canary to see this_)

## Graphics
### Native Filters
It is now possible to use image processing functions such as `greyscale`, `sepia`, `blur` on HTML and SVG elements. You can do this by using a CSS property known as `filter` like so:

<pre>.banner {
  filter: blur(10px);
}</pre>

These are known as _native_ filters as the functions are provided out of the box by browsers. You can use this feature in Safari 6, Mobile Safari &amp; Chrome. 

Here is how blur has been used to [simulate depth of field](http://codepen.io/vcurd).

### Custom Filters
Instead of using browser-provided filters, you can use your own. To do this, you would use [GLSL shaders](http://www.w3.org/TR/filter-effects/#feCustomElement) - that are typically used in WebGL - via custom filter function. 

<pre>.banner {
 filter: custom(url(/path/to/shader.vs));
}</pre>

The above declaration tells the browser to create vertice maps for each element that matches the selector, run them through the shader provided within the custom function and finally render the results on the screen. The interesting thing is these shaders can also take custom arguments that would determine the extent to which you want to apply these shaders.

[Altered Qualia](http://twitter.com/alteredq) has a [great in-depth article on how to write and use Shaders for Custom Filtering](http://alteredqualia.com/css-shaders/article). You can also play with some of the custom filters on [CSS FilterLab](http://html.adobe.com/webstandards/csscustomfilters/cssfilterlab/)

[Demo of Custom Filters](http://nimbu.in/jscamp/custom-filters.html) (_turn on 'Enable CSS Shaders' in chrome:flags in Chrome Canary to see this_).

### Blend Modes
In Photoshop and other Graphic Editing tools, there has always been an option to specify how each layer interacts with other layers below it. This is typically specified using a dropdown of blend modes that have values such as 'overlay', 'multiply', 'darken', 'lighten', 'difference', etc.

My team at Adobe has been working on a [specification and a prototype build](http://adobe.github.com/web-platform/demos/compositing/) out that brings the power of those blend modes to the web via CSS. This would happen via specifying the property `blend-mode` on the elements you want to target:

<pre>.banner h1 {
	blend-mode: difference; 
}</pre>

[Demo of blend modes](http://adobe.github.com/web-platform/demos/compositing/blend-photogallery/index.html) (_use this [prototype build of Chromium]() to view this_).

## Responsible Styling
You must use styles responsibly, especially properties such as flex box which can lead to drastically unreadable results in unsupported browsers. Previously, [Modernizr](http://modernizr.com) came to the rescue. But now, there is a [specification that adds conditional rules natively via `@supports`](http://www.w3.org/TR/css3-conditional/):


<pre>@supports (font-feature-settings: ‘liga’) or
          (-webkit-font-feature-settings: 'liga') or
          (-moz-font-feature-settings: 'liga=1') {
  h1 {
    font-family: 'A Common Ligatured Font', serif;
  }
}</pre>

Browsers that understand `@supports` would then check if any of the declarations (`font-feature-settings: 'liga'` or `-webkit-font-feature-settings: 'liga'`) is supported and if so, render the styles for the `h1` selector within the `@supports` rule. This way of writing CSS may be familiar to you via Media Queries. 

This is a great way to do feature-detection natively and specify different rules when advanced features are supported while providing a basic but readable experience on other browsers. [Chris Mills has written in greater depth about this rule on dev.opera.com](http://dev.opera.com/articles/view/native-css-feature-detection-via-the-supports-rule/)

`@supports` rule is available in Opera and Firefox (under a flag), and [soon in WebKit](http://trac.webkit.org/changeset/131783).

[Demo of @supports rule](http://nimbu.in/jscamp/supports.html) (_use Opera or Firefox 17+ with 'layout.css.supports-rule.enabled' set to true in `about:config`_).

## Non-standard but interesting
### Canvas as Background Image
WebKit browsers have had, for more than 2 years, [support for writing to a canvas that is used as a background image for elements](https://www.webkit.org/blog/176/css-canvas-drawing/). This is specified as such:

<pre>.banner {
  background-image: canvas(contextForCanvas);
}</pre>

Instead of writing the pixels to the context of a Canvas element, you would write it to the context of that background image (`contextForCanvas`):


<pre>
var context = document.getCSSCanvasContext(‘2d’, contextForCanvas, canvasWidth, canvasHeight);
</pre>

[Demo of canvas as `background-image`](http://nimbu.in/jscamp/css-canvas.html) (_please use Safari or Chrome to view this_)

### Elements as Background Image
The use of canvas as a background image is somewhat similar to a [Mozilla proposal to have elements as background images](https://hacks.mozilla.org/2010/08/mozelement/):

<pre>
.banner {
  background-image: element(#elementID);
}</pre>

<pre>
&lt;div class='banner'&gt;This is a banner&lt;/div&gt;
&lt;p id='elementID'&gt;This is the element that will be a background.&lt;/p&gt;
</pre>


[Simurai](http://twitter.com/simurai) created [this interesting kalaidescope effect using this property](http://jsfiddle.net/simurai/JKZTu/21/show/).

Personally, I find the <code>element</code> function confusing and easy to make mistakes with (e.g. adding a twitter widget to a supposedly empty element suddenly has it appear as a background to another element). Hopefully, some middle-ground between canvas as a background image and elements as a background image will be arrived at.

## In Conclusion

There are lots of new and interesting features out there and it would be _awesome_ if you could take the time to play with them and [provide feedback](http://lists.w3.org/Archives/Public/www-style/). There are plenty of new features I did not cover because I thought I was out of time (I wasn’t!) like [Flexbox](http://css-tricks.com/old-flexbox-and-new-flexbox/), [Grid Layout](http://dev.w3.org/csswg/css3-grid-layout/), [Variables](http://css3.bradshawenterprises.com/blog/css-variables/), [Calc()](https://developer.mozilla.org/en-US/docs/CSS/calc), and more.

My talk was just several browsers each with pinned tabs of each demo. [Here is a list of all of the demos I showed](http://nimbu.in/jscamp/).