--- 
layout: post
title: Drop Shadows with CSS3
created: 1277352949
category: "Web Development"
---
<p><a href="http://paulirish.com">Paul Irish</a> showed me <a href="http://dev.ajcates.com/tests/wrap-shadow/test.php">this implementation of CSS3 drop-shadows</a>. The demo only works for webkit based browsers (though it will work on Firefox if the appropriate vendor-prefixes are added to the stylesheet). </p>

<p><a href="http://nimbupani.com/demo/css3-drop-shadows.html"><img src="http://nimbupani.com/files/drop-shadow_1.png" alt="drop-shadow.png" border="0" width="501" height="262" ></a></p>

<p>I first noticed this kind of drop-shadow on <a href="http://aspire2enquire.typepad.com/aspire_to_enquire/2009/08/mike-matas.html">Mike Matas's old website</a>. Looking at the CSS for the CSS3 implementation of the drop-shadow (uses box-shadows to avoid the use of an image), there were a number of things that I found missing: </p>

<ol>
	<li>The <code>article</code> is absolutely positioned. It will not work in Firefox if it is not so (the simple fix is to add <code>display: block;</code> to the style of the <code>article</code> element). </li> 
	<li>The method requires a block element within article to render correctly. The CSS for the block element has a lot of styles that I think are unnecessary and complicated.</li> 
	<li>The stylesheet was longer and more complicated than necessary.</li>
</ol>
<p>As an attempt to try a simpler version of it, I came up with <a href="http://nimbupani.com/demo/css3-drop-shadows.html">this implementation of CSS3 Drop-shadows</a>. This is what I did: </p>
<ol>
	<li><span class="strike">Add a wrapper around the container that needs shadows. Position it relatively</span>. Position the element that needs the drop shadows relatively.</li>   
	<li><p>Absolute position the pseudo-elements like the demonstration above, except position them behind the main content with <code>z-index: -1</code>, like so:</p>
		<pre><code>article:before, article:after {
  -webkit-box-shadow: 0 15px 10px rgba(0,0,0, .7);
  -moz-box-shadow: 0 15px 10px rgba(0, 0, 0, 0.7);
  box-shadow: 0 15px 10px rgba(0, 0, 0, 0.7);
  -webkit-transform: rotate(-3deg);
  -moz-transform: rotate(-3deg);
  -o-transform: rotate(-3deg);
  position: absolute;
  left: 10px;
  bottom: 15px;
  z-index: -1;
  width: 50%;
  max-width: 300px;
  height: 20%;
  content: "";
}
</code></pre> <p><small>Thanks <a href="http://simurai.com/">simurai</a> for better box-shadow values, <a href="http://nicolasgallagher.com/">Nicolas Gallagher</a> for fluid-layout fixes and further refinement, and <a href="http://twitter.com/seutje">seutje</a> for suggesting the removal of background color on pseudo-elements!</small> </p></li>
	<li><em>Fin</em>. This is 44 lines of code as compared to 84 lines of code in the original demo and works on all the latest versions of Opera, Chrome, Safari and Firefox. But, Opera&rsquo;s, and Firefox&rsquo;s implementation of transforms are not as good as Webkit&rsquo;s. </li>
</ol>
<p>It is interesting to attempt it for fun, but this is definitely not ready for production use!</p>
<p>Nicolas Gallagher's explanation of his fixes is a <a href="http://nicolasgallagher.com/css-drop-shadows-without-images/">good read</a>.</p>

  
