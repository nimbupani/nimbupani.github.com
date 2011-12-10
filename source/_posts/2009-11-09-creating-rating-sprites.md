--- 
layout: post
title: Creating Rating Sprites
created: 1257779531
category: "Web Development"
---
<p>I came across this <a href="http://www.youtube.com/html5">Youtube HTML 5 demo</a> via <a href="http://twitter.com/laura_carlson">Laura Carlson</a> and was amazed at their simple sprite solution for static ratings display. Here is how to create one.</p>
<h3>Caveat</h3>
<p>This solution is only for displaying a static rating and not an <a href="http://www.learningjquery.com/2007/05/half-star-rating-plugin">animated one</a>.</p>
<p>I am using the word &ldquo;star&rdquo; a bit loosely in this post. The &ldquo;star&rdquo; in the sprite below is a circle for the sake of simplicity.
<h3>Image</h3>
<p>Create a sprite as shown below. I have created each circle within an imaginary 20px box so that it is easier to style via CSS. You can use my reference <a href="/demo/ratingsprite/stars.psd">Photoshop file</a> where I have used guides to position each circle at intervals of 20px.</p>
<p><img src="http://www.nimbupani.com/blog/files/stars.png" alt="stars sprite"></p>

<h3>HTML</h3>
<p>Put this HTML where you want your ratings to appear:</p>
<pre>&lt;span class=&quot;rating r0&quot;&gt;0/5&lt;/span&gt;</pre>
<p>The class <code>rating</code> will be used to apply all the common style properties. Classes <code>r0</code> to <code>r5</code> will be used to position the sprite as a background image appropriately.</p>

<h3>CSS</h3>
<p>In your CSS file, add the following:</p>

<pre>
span.rating {
  background:url(&quot;star.png&quot;) top left;  
  display:inline-block;
  width:100px; /* width of the set of 5 stars */
  overflow:hidden;
  text-indent:-1000em;  
}                                     
</pre>

<h3>Creating the rating</h3>
<p>Now we style each of the <code>r0</code> to <code>r5</code> classes. </p>

<pre>span.r0 {
  background:-50px 0;
}</pre>               

<pre>
span.r1 {             
   background-position:-60px 0; /* assuming each star is 20px wide */      
}      
</pre>

<p>and so on&hellip;</p>

If you use <a href="http://sass-lang.com/">SASS</a> you can add this to your SASS file:
<pre>
// 100 is the width of the set of 5 stars and 20 is the width of each 
// star (including the space to the right, see the Photoshop file

@for !i from 0 through 5
  span.r#{!i}
    background-position = &quot;#{-(100 - (20*!i))}px 0&quot; 
</pre> 

<p>Here is the <a href="http://nimbupani.com/demo/ratingsprite/">demo of the star ratings sprite</a>.</p>

<h3>Advantages</h3>
<ul>
	<li>Single image, lesser page requests, faster page load.</li>
	<li>Small file size</li>
	<li>Easier maintainance: You only need to edit one image file in case you want to change the graphic.</li>
</ul>

