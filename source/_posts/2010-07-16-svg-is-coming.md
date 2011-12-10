--- 
layout: post
title: SVG is coming!
created: 1279292407
category: "Web Development"
---
<p>I am an SVG fanatic, in fact I was using SVG for implementing my final year project (which was to create a GPS system on a linux mobile device) in 2000. So yes, I am partial to SVG and cannot <a href="http://nimbupani.com/search/node/svg">stop writing about it</a>.</p>

<p>I have long bemoaned the persistent <a href="http://nimbupani.com/the-final-coming-of-svg.html">lack of love for SVG from browser vendors</a> but these developments indicate that is no longer the case: </p>

<ol>
	<li><p>HTML spec allows inline SVG in your HTML document (and not just XHTML document). This means <a href="http://dev.w3.org/html5/html4-differences/#mathml-svg">you can use an SVG element inline an HTML document</a> (without using any ugly object tags). You can already test it on the <a href="http://nightly.mozilla.org/">nightly builds of Firefox</a></p></li> 
	<li><p>Apple's retina display brought back attention to this <a href="http://webkit.org/blog/55/high-dpi-web-sites/">old post on how to develop websites for higher DPI</a> – which basically advocates SVG (<a href="http://paulirish.com">Paul Irish</a> also tells me <a href="http://code.google.com/p/android/issues/detail?id=1376">a future release of Android will support SVG</a>). </p></li>   
	<li><p>@media queries are extensively supported in several browsers. Andreas Bovens of Opera has a great technique to <a href="http://my.opera.com/ODIN/blog/2009/10/12/how-media-queries-allow-you-to-optimize-svg-icons-for-several-sizes">use media queries with SVG</a> which he explains in this video:</p><object width="640" height="385"><param name="movie" value="http://www.youtube.com/v/YAK5el8Uvrg&color1=0xb1b1b1&color2=0xd0d0d0&hl=en_US&feature=player_embedded&fs=1"></param><param name="allowFullScreen" value="true"></param><param name="allowScriptAccess" value="always"></param><embed src="http://www.youtube.com/v/YAK5el8Uvrg&color1=0xb1b1b1&color2=0xd0d0d0&hl=en_US&feature=player_embedded&fs=1"; type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="640" height="385"></embed></object>
    <p>You can control the styles of the SVG file that referred to by an image element, based on the width specified on the image element (see demos of <a href="http://people.opera.com/andreasb/demos/demos_svgopen2009/circles.html">colored circles</a>, <a href="http://people.opera.com/andreasb/demos/demos_svgopen2009/svgscalelogo.html">scaling SVG logos</a>, and <a href="http://people.opera.com/andreasb/demos/demos_svgopen2009/svgscalegold.html">altering SVG charts</a>. </p> 
<p><em>Update:</em> <a href="http://schepers.cc/">Shepazu</a> has rightly stated CSS Media Queries work on Firefox, Webkit and Opera, not just Opera (for some reason the colored circles demo only seems to show in Opera).</p>
</li>                                     
<li><p><a href="http://svg-edit.googlecode.com/svn/trunk/editor/svg-editor.html">SVG-Edit</a> is a fantastic open-source online SVG editing platform (it is new and the UI needs some love), especially for tiny icons. 
</p></li>
<li>Opera, Webkit browsers recognize SVG images served as <a href="http://dl.dropbox.com/u/952/svgdatauri.html">data-uris for use as background images</a>. 
</li>
</ol> 
<p>I am glad things are looking up for dear SVG. What was that <a href="http://nimbupani.com/bit-of-svg-and-canvas.html">Canvas thing</a> you were talking about?</p>
