--- 
layout: post
title: Notes from HTML5 Readiness Hacking
created: 1271556287
category: "Web Development"
---
<p><em>Update:</em> <a href="http://html5readiness.com">HTML5 Readiness</a> now shows how HTML5 support has evolved since 2008. Click away to see the spurt of growth in 2010!</p>

<p><a href="http://paulirish.com">Paul Irish</a> pinged me on Thursday evening wondering about visualizing browser support per HTML5/CSS3 feature for <a href="http://jsconf.us/2010/schedule.html">his presentation at JSConf</a> on April 17th. I thought it would be a fun exercise in creating it with the "cool" features of CSS3. Soon, Paul had registered the domain and <a href="http://html5readiness.com">HTML5 Readiness</a> was born. Here are some of the design and implementation notes from that process.</p>

<h3>Design</h3>

<p>The intention of the visualization is to show how much support exists for each new HTML/CSS feature. I remembered the graphic showing the <a href="http://www.good.is/post/transparency-america-s-wealthiest-religions">distribution of wealth among religious Americans</a> and I thought a similar structure would work for this one too and I really liked this <a href="http://www.flickr.com/photos/eriknitsche/476093355/in/set-72157600143976187/">ad for General Dynamics by Erik Nitsche</a>.</p>

<p>Paul wanted to show support for 8 browsers (IE 7, 8, 9, Opera 10.10, Safari 4, Chrome 4, Firefox 3.5, and Firefox 3.7). The browsers are grouped into color schemes based on their underlying rendering engine - e.g. all Firefox versions are shades of blue, Chrome/Safari - yellow, IE - pink. Each ray also has a different background color if it is a CSS3 feature.</p>

<p>Each browser is represented with a tile on the bar and gets an equal width of space, so if you see a bar that is full, that means that feature has universal support among all the 8 browsers.</p>

<p><img src="http://nimbupani.com/files/html5readiness.png" alt="html5readiness.png" border="0" width="600" height="612" ></p>

<h3>Sass to rescue</h3>

<p>There was not enough time to spend working on a photoshop mockup and then implementing the design. I am also more comfortable working on a design in the browser (with all the CSS3 bells & whistles), so I dived in to HTML/Sass. <a href="http://sass-lang.com">Sass</a> is a life-saver. The transforms (for each ray on the semi-circle), which result in about 114 lines of CSS (when compacted and with vendor-prefixes), are actually a result of just 4 lines of Sass:</p>

<pre><code>@for $i from 1 through 28
 .ray-#{$i}
   +transform((-6.7deg*($i - 1)), 0%, 50%)
  
  i
    +transform((6.7deg*($i - 1)), 50%, 50%)</code></pre> 

<p>The odd angle multiplier (6.7) is because each ray (except the first) is transformed so that they fit into the 180 degree arc with equal angular space between each (0, 50% sets the axis for rotation). You can see <a href="http://github.com/paulirish/html5readiness.com/blob/master/src/style.sass">the full Sass file on Github</a>.<p>

<p>That's it! Most of the work was done Thursday night / Friday morning. It was great fun dealing with 2D graphics after 8 years, and I loved working on it!</p>

