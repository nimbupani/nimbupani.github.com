--- 
layout: post
title: A Bit of SVG and Canvas
created: 1251342133
category: "Web Development"
---
<p>As you might have noticed from <a href="http://nimbupani.com/blog/web-design.html">my previous writings on HTML 5 and CSS 3</a>, I typically write about topics I wish to know more about, after spending a few weeks intensely <span class="strike">googling</span> learning about them. These two weeks, they happen to be SVG and Canvas. The interwebs are heating up with debates about the merits of each, and many are predicting a deathmatch. However, my research convinces me that each has its own purpose, but definitely their time has come.</p> 
<h3>What is SVG?</h3>
<p><abbr title="Scalable Vector Graphics">SVG</abbr> is a language for describing two-dimensional graphics and graphical applications in XML. Some examples of SVG are the <a href="http://upload.wikimedia.org/wikipedia/commons/7/77/Wikipedia_svg_logo.svg">Wikipedia logo</a> and this &ldquo;Hello World&rdquo; of SVG, <a href="http://www.amplesdk.com/examples/svg/tiger/">a Tiger</a>. View the source of those two SVG files to see how SVG looks like.</p> 
<h3>What is Canvas?</h3>  
<p>The <a href="http://dev.w3.org/html5/spec/Overview.html#the-canvas-element">HTML 5 spec</a> defines it best: &ldquo;The canvas element represents a resolution-dependent bitmap canvas, which can be used for rendering graphs, game graphics, or other visual images on the fly.&rdquo;</p>
<p><a href="http://people.mozilla.com/~vladimir/xtech2006/">This presentation by Mozilla&rsquo;s Vladimir Vuki&#x107;evi&#x107;</a>, created in 2006, has a good explanation of the differences between SVG and Canvas, namely:</p>
<ul>
	<li>SVG is XML based. This means, every element is available within the SVG <abbr title="Document Object Model">DOM</abbr> (useful when you want to attach javascript event handlers for an element &mdash; say you want to make the SVG tiger&rsquo;s muskers twitch if you click on it). Canvas is not XML based.</li>                        
	<li>Canvas is rendered pixel by pixel. SVG is a bunch of vectors and needs to be manipulated as a group of shapes. An analogy in the Photoshop world would be, creating a rectangle using the &ldquo;shape&rdquo; tool in vs. using paintbrush.</li>
</ul>                                               
<h3>Who Will Win?</h3>
<p>Even though they are quite different in nature and purpose, there are several things that can be done using both Canvas and SVG. The recent popularity of the Canvas element seems to make some people sound the death knell for SVG. But, from what I have gathered, this is far from the truth.</p> 
<p>Canvas is as good as an image — except it can be manipulated pixel by pixel. Right now, Canvas element cannot support event handlers (e.g. have a 20x20px wide rectangle within a canvas be clickable). SVG does.</p> 
<p>Canvas, in its current state is not accessible. SVG however is <a href="http://www.iheni.com/just-how-accessible-is-svg/">quite accessible</a>.</p>  
<p>All this might change, as there is a task force that is looking into a <a href="http://dev.w3.org/html5/canvas-api/canvas-2d-api.html">Canvas 2D API</a>. The very changes that might apply to Canvas might even get applied to the image element in future versions of SVG &mdash; which would a big win.</p>
<p>There are, however, <a href="http://www.borismus.com/canvas-vs-svg-performance/">significant performance differences between Canvas and SVG</a>. The outcome of the experiment described in the previous link is that, Canvas is more suitable for a graphics-intensive game where many objects are redrawn frequently (like this <a href="http://blog.nihilogic.dk/2008/04/super-mario-in-14kb-javascript.html">Super Mario game</a>), while SVG is best for applications that involve large rendering areas (like Google Maps).</p>  
<h3>Can I use them now?</h3>
<p>Yes, you can. There are many initiatives to enable browsers which don&rsquo;t  support SVG or Canvas to render them using other means. Google has an impressive <a href="http://code.google.com/p/svgweb/">SVG Web</a> project that uses Flash to render SVG in browsers that do not support SVG natively. <a href="http://raphaeljs.com/">Raphael</a> renders content into SVG or VML using javascript (it is NOT a javascript API for SVG or VML). For Canvas, Google has an <a href="http://code.google.com/p/explorercanvas/">explorecanvas</a> library that uses VML (or Silverlight) to render Canvas elements (you simply need to include the excanvas.js file, and it should work) in Internet Explorer.  Do note that IE9 now supports both <a href="http://ie.microsoft.com/testdrive/info/ReleaseNotes/Default.html">SVG and Canvas</a>.</p>
<p>Mark Pilgrim, as usual, has written an excellent article on how to use <a href="http://diveintohtml5.org/canvas.html">Canvas</a> element, which is part of <a href="http://diveintohtml5.org/">his book on HTML 5</a>.</p>
<h3>So, really, who wins?</h3>
<p>Both. These are exciting times for SVG and Canvas. We finally have a native alternative to Flash for basic animation needs. Keep your eyes peeled on the <a href="http://lists.w3.org/Archives/Public/public-html/">HTML mailing list</a> for breaking news. Or you can hear about them a few seconds later on my <a href="http://twitter.com/nimbuin">Web Development Twitter Stream</a>.</p>
