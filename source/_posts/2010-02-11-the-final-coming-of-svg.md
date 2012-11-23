--- 
layout: post
title: The Final Coming of SVG
created: 1265902289
category: "Web Development"
---
<p>I started drafting this post about a month ago, giddy with the news about Microsoft joining <a href="http://blogs.msdn.com/ie/archive/2010/01/05/microsoft-joins-w3c-svg-working-group.aspx">SVG Working Group</a> and all the possibilities SVG portended. So, I started dreaming of creating a demo of how SVG could be used by web developers now, as background images with fall-back support, webfonts, and what not. Why, you ask? Think about all these that you can do with SVG using CSS:</p>

<ul>
	<li>Simple background images that are several times smaller than PNG/GIF formats.</li>
	<li>Scalable background images that can be reused on elements with different widths and heights.</li>
	<li>SVG background images can share same stylesheet as the webpages which means you do not have to open Photoshop every time you need to change the colors of background images.</li>
	<li>Use the same SVG file <a href="http://nimbupani.com/about-fonts-in-svg.html">as a font</a> and an image.</li>
</ul> 
<p>Alas, it was not to be! The story of SVG is like the story of the boy who cried Wolf. Every 2 years there is a riot about SVG's coming dominance, nothing happens, and everybody goes away disappointed. So, when SVG truly becomes a standard supported by most browsers, nobody gives a damn.</p>

<p>At the risk of sounding like that boy, my opinion is SVG dominance is closer to reality than ever before. SVG support for most modern browsers has improved (<a href="http://www.opera.com/docs/specs/presto23/svg/attributes/">Opera</a>, <a href="https://developer.mozilla.org/en/SVG_in_Firefox">Firefox</a>, <a href="http://webkit.org/projects/svg/status.xml">Webkit</a>). <a href="http://hsivonen.iki.fi/test-html5-parsing/">HTML specification has been updated to allow in-line SVG</a> too! Hell, there are even <a href="http://paulirish.com/work/gordon/demos/">Flash runtimes written with JavaScript and SVG</a> that can run Flash animations on browsers that do not support Flash (I am looking at you, iPhone Safari).</p>
 
<p>David Storey has <a href="http://people.opera.com/dstorey/user-interfacesvgcss.html">a nifty example of a HTML5 UI that uses SVG files as background images</a>. Browsers do not consistently support using SVG files as background images. Safari does not render the file if the SVG does not have absolute width and height specified (not so for Chrome). Firefox does not render SVG background images at all. Here is <a href="http://nimbu.in/demo/svg/">a demo of using an SVG file as background or border image</a>.</p>

<p>You have much better luck with <a href="http://www.alistapart.com/articles/using-svg-for-flexible-scalable-and-fun-backgrounds-part-ii">SVG images rendered via the object element</a>, most browsers support SVG as an image format, and for IEs you could use <a href="http://code.google.com/p/svgweb/">SVGWeb</a> to replace them with a flash file. In SVG-friendly browsers, you can also use this <a href="http://plugins.jquery.com/project/svg ">jQuery plugin to manipulate SVG files</a>.</p> 

So, all this means good times are ahead for SVG. <a href="http://lists.w3.org/Archives/Public/www-svg/2010Jan/0108.html">Microsoft even seems to be asking relevant questions</a> about implementing SVG, which only supports the assertion that IE9 will be the first Internet Explorer to support SVG.

<p>If you are interesting in learning SVG, the <a href="http://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html">W3C SVG Primer</a> is best place to start. You can also create simple shapes in Illustrator or Inkscape and save them as SVG, but they are more likely to be tag-soups, so be sure to clean them with <a href="http://www.planetsvg.com/tools/scour/scra.py/form">Scour</a>.</p>
