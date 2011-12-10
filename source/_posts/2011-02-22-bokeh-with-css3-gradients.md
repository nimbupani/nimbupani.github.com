--- 
layout: post
title: Bokeh with CSS3 Gradients
created: 1298432689
category: "Web Development"
---
<p>Ever since <a href="http://leaverou.me/2010/12/checkered-stripes-other-background-patterns-with-css3-gradients/">Lea Verou mentioned about the possibilities of CSS3 Gradients</a>, I have been using them in various shapes and sizes as a replacement for background images. I recently worked on a project which uses a bunch of circles as a decorative background. <a href="http://gf3.ca/">gf3</a> suggested that the circles would look much better like <a href="http://en.wikipedia.org/wiki/Bokeh">bokeh</a>. Today, I finally got down to creating them.</p>

<h3>Result</h3>
<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/nimbu/CPCRU/embedded/result,css"></iframe>

<h3>Design of the Bokeh</h3>
<p>I referred to some pictures of bokeh, and these were their defining characteristics:</p>
<ul>
  <li>There should be groups of circles with same color (each circle outlined with the more opaque version of the fill). In each group, circles are close to each other.</li>
  <li>The color transition from one color group to the other can be accomplished with a very blurry second color group radial gradient overlaid on the first group.</li>
  <li>Each color group needs to have a very blurry large background circle to base the rest of the circles from.</li>
  <li>Each color group has 2 or more of smaller circles and one big blurry circle as a base.</li>
  <li>Colors used are almost transparent so that the background color shows through, and the colors mix well when they are overlaid.</li>
</ul>

<h3>Implementation</h3>
<p>Here is how a single "tile" looks like:</p>

<p><img src="http://nimbupani.com/files/bokeh-graph.png" alt="bokeh-graph.png" border="0" width="420" height="300"></p>

<p>The black background is the size of the "tile", set by <code>background-size</code> property (the grey area is where our circles spill over). In our demo it is 300px square. Each of these circles is a background image (all gradients are background images), and have a default <code>background-size</code> property set to the top left corner of the tile, which means, the center of each of the circle is at the intersection of the yellow lines in the image above.</p>

<p>Then, we use <code>background-position</code> to offset them into places we want.</p>
<p>By tweaking the <code>background-position</code> for each of the gradient images, we also move the center of each of the circle - shown in the image above relatively. Do note that what <em>actually</em> moves is the top left corner, but I find it easier to visualize the positioning of radial gradients in this manner.</p>

<p>By using <code>background-repeat</code>, we can repeat our bokeh across the screen! You can tweak the tile size so you can get some interesting effects.</p> 

<p>Needless to say, this demo <a href="http://caniuse.com/#feat=css-gradients">only works</a> on Firefox 3.6+, Safari 4+, Chrome 10+ all of which support CSS3 radial gradients as it has been finalized in the <a href="http://www.w3.org/TR/css3-images/#radial-gradients">spec</a> (support is coming soon in Opera 11).</p>

<h3>Update</h3>
<p><a href="http://a.deveria.com/">Alexis</a> has kindly <a href="http://nimbupani.com/bokeh-with-css3-gradients.html#comment-3620">provided an SVG</a> that would work as well for browsers that do not support gradients! I have updated the demo to use <a href="http://modernizr.github.com/Modernizr/2.0-beta/#cssgradients">Modernizr</a> to detect for gradients, and serve the SVG version if the browser does not support it. Whee! Thanks Alexis!</p>
