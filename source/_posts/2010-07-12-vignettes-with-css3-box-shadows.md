--- 
layout: post
title: Vignettes with CSS3 Box Shadows
created: 1278946695
category: "Web Development"
---
<a href="http://nimbupani.com/demo/css3vignettes/"><img src="http://nimbupani.com/files/vignette.png" alt="vignette.png" border="0" width="604" height="331"> </a>

<p><a href="http://paulirish.com">Paul Irish</a> (why nobody else sends me such awesome stuff beats me), showed me yet another <a href="http://chris-armstrong.com/">CSS3/HTML5 website</a>.</p> 

<p>What is interesting is, the site author uses 4 empty divs to create the vignetting effect on the four corners of the viewport. I thought it would be a good use of box-shadow property to recreate the same effect, minus the 3 extra divs (<a href="http://sickdesigner.com/index.php/2010/html-css/css3-vignette-a-wicked-cool-technique/#comment-231">I am not the first to think of it</a>).</p>

<p>The caveat is, the CSS3 <code>box-shadow</code> property slows down webkit browsers considerably. So, until <a href="https://bugs.webkit.org/show_bug.cgi?id=22102">this bug is resolved</a> this demo will only work on non-webkit browsers like Opera 10.5x, Firefox 3.5+ (IE 9 Platform Preview claims <code>box-shadow</code> support, but this demo does not render box-shadows there).</p> 

<p>You could use the same technique to add vignetting to images. Here is how: </p>

<ol>
	<li><p>In your HTML document, add a wrapper element to the image, I have this: </p>
		<pre><code>&lt;p class=&quot;vignette&quot;&gt;&lt;img src=&quot;image.jpg&quot;&gt;&lt;/p&gt;</code></pre>
	</li>
	<li><p>In your CSS file, add this:</p>

	<pre><code>p.vignette {
  position: relative;
}
p.vignette {
  position: relative;
}

p.vignette img {
  display: block;
}

body {
  -moz-box-shadow: inset 0 0 10em #000;
  -webkit-box-shadow: inset 0 0 10em #000;
  box-shadow: inset 0 0 10em #000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0%;
  z-index: 2;
  content: "";
}
</code></pre>
<p>The <code>content: ""</code> is essential to <a href="http://www.w3.org/TR/CSS2/generate.html#content">make sure the pseudo-element is generated</a>. <code>z-index</code> positions the pseudo-element above the image.</p> 
</li>
<li>
	<em>Die Ende!</em>
</li>
</ol>
<p>Yes, I do wish webkit would hurry up and fix those horrible box-shadow bugs. Till then, you can indulge with me in this fantasy and <a href="http://nimbupani.com/demo/css3vignettes/">view the demo</a> :) </p>

