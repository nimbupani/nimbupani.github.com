--- 
layout: post
title: Making "Pure CSS3" demos better
created: 1297963372
category: "Web Development"
---
<p>I appreciate the effort that goes into creating a pure CSS3/HTML5 demo, but unfortunately many beginners consider these demos as representation of the best practices in Web Development (many aren't). Here is one that got my goat today: A <a href="http://designmadeingermany.de/slideshow/">Pure CSS3 Slideshow</a>.</p>

<p>Here are some reasons why this is not a great example of best practices:</p>
<ul>
  <li>Uses a table for navigation when the semantic nav element (or a simple list) would do.</li>
  <li>Implements features using <code>-moz</code>, <code>-webkit</code> only prefix. Why not add the standard that they are temporary demonstrations for (and while at it, also support <a href="http://opera.com">other</a> <a href="http://ie.microsoft.com/testdrive/">browsers</a>?)</li>
  <li><p>This is how it degrades on browsers that do not support CSS3 transitions, and transforms:</p>
    <p><img src="http://nimbupani.com/files/79e91b32f7713c3a03a5650e476ade27.png" alt="79e91b32f7713c3a03a5650e476ade27.png" border="0" width="600" height="348" /></p>    
  </li>
</ul>
<p>So, lets fix it! Here is the final result:</p> 
<iframe style="width: 100%; height: 400px" src="http://jsfiddle.net/nimbu/KEqSF/embedded/result,html,css"></iframe>
<h3>Changes:</h3>
<ul>
<li><p>No translateX functions. All we need to do is to animate the <code>left</code> property. So:</p>
<pre><code>#a1:target .page { -webkit-transform: translateX(-100%); -moz-transform: translateX(-100%); }
#a2:target .page { -webkit-transform: translateX(-200%); -moz-transform: translateX(-200%); }
#a3:target .page { -webkit-transform: translateX(-300%); -moz-transform: translateX(-300%); }</code></pre>
<p>becomes:</p>
<pre><code>#a1:target .pages { left: 0%; }
#a2:target .pages { left: -100%; }
#a3:target .pages { left: -200%; }</code></pre>
</li>  
<li>
  I added a parent <code>div</code> element for all the pages so we just need to animate that element and not each of the 3 page elements.  
</li>
<li><p>No tables for nav! Just use the <code>nav</code> element with a set of links:</p>
<pre>
  <code>&lt;table&gt; 
  &lt;tr&gt; 
   &lt;td&gt;&lt;a href=&quot;#a1&quot; id=&quot;p1&quot;&gt;1&lt;/a&gt;&lt;/td&gt; 
   &lt;td&gt;&lt;a href=&quot;#a2&quot; id=&quot;p2&quot;&gt;2&lt;/a&gt;&lt;/td&gt; 
   &lt;td&gt;&lt;a href=&quot;#a3&quot; id=&quot;p3&quot;&gt;3&lt;/a&gt;&lt;/td&gt; 
  &lt;/tr&gt; 
&lt;/table&gt;</code>
</pre>
<p>becomes: </p>
<pre><code>&lt;nav&gt;&lt;a href=&quot;#a1&quot;&gt;1&lt;/a&gt;&lt;a href=&quot;#a2&quot;&gt;2&lt;/a&gt;&lt;a href=&quot;#a3&quot;&gt;3&lt;/a&gt;&lt;/nav&gt;</code></pre>
</li>
<li>
<p>In the default view, the first page is positioned outside the viewport:</p>  
<pre><code>/* Page Positioning */
#i1 { left: 100%; }
#i2 { left: 200%; }
#i3 { left: 300%; }</code></pre>
<p>This means browsers that do not support transitions effectively see a blank page. We fix this but setting the default position as <code>left: 0</code>, and only adjust the positions for the next 2 slides:</p>
<pre><code>/* Pages */
#i2 { left: 100%; }
#i3 { left: 200%; }  </code></pre>
</li>
</ul>
<p>There, now we have a neat little slideshow, that doesn't degrade too badly on browsers that do not support the target element (accessible via the horizontal scrollbar for IE6, 7). If there are ways to improve this, please fork the fiddle and link in the comments!</p>
</body>
