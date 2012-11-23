--- 
layout: post
title: Learn to write CSS without hacks
created: 1219723092
category: "Web Development"
---
<p>Mike Davidson has written about his <a href="http://www.mikeindustries.com/blog/archive/2008/08/design-signatures">design signature</a> which has inspired me to write about the elements of my web design signature. As he had mentioned, it seems following my signature leads to no or negligible use for IE specific style sheets.</p>
<p><strong>Update:</strong> There is another informative article on <a href="http://anthonyshort.com.au/blog/comments/how-to-get-cross-browser-compatibility-everytime/">getting cross-browser compatibility every time</a>.</p>
<ol>
	<li>
	<h3>Use only Classes</h3>
	<p>I use ids only if there are javascripts that require one. Makes my styles a lot more re-usable and I don&rsquo;t have to remember whether I used an id or a Class in the HTML when I write my CSS code.</p>
	</li>
	<li>
	<h3>Use Reset CSS</h3>
	<p><a href="http://meyerweb.com/eric/thoughts/2007/05/01/reset-reloaded/">Eric Meyer&rsquo;s Reset CSS</a> with the <code>vertical-align:baseline</code> commented out works well for me. <code>vertical-align:baseline</code> does not allow HTML elements with set "align" attributes, to display correctly aligned in IE (and plays havoc with widgets that use inline styles and attributes).</p>
	</li>
	<li>
	<h3>Using a clear &lt;div&gt;</h3>
	<p>I use <code>&lt;div class=&quot;clear&quot;&gt;&lt;/div&gt;</code> and define in the CSS <code>div.clear { clear:both; }</code> to clear floats. Read more <a href="http://www.quirksmode.org/css/clearing.html">about clearing floats</a>.</p>
	</li>
	<li>
		<h3>Use a fixed width layout</h3>
		<p>I use a fixed width layout with a center align on the <code>body</code> and left align for the child <code>&lt;div&gt;</code> (with margins set to auto). I use floats rather than position for layouts and for anything whose position is fixed (e.g. the header navigation section), I use absolute positioning.</p>
	</li>
	<li>
		<h3>Use starting and closing comment tags</h3>
		<p>I use Textmate&rsquo;s snippets to automatically add a comment that states <code>&lt;!--START CLASS &lt;name&gt;--&gt;</code> next to each <code>&lt;div&gt;</code> and at the closing tag <code>&lt;/div&gt;</code> adds the comment <code>&lt;!--END CLASS &lt;name&gt;--&gt;</code> &mdash; where <code>&lt;name&gt;</code> is the name of the class assigned to the <code>&lt;div&gt;</code></p>
		<p>The snippet I use is:</p>
		<pre>
<code>&lt;div class=&quot;${1:name}&quot;&gt;&lt;!--START CLASS ${1:name}--&gt;
  ${0:$TM_SELECTED_TEXT}
&lt;/div&gt;&lt;!--END CLASS ${1:name}--&gt;</code></pre>
	</li>
	<li><h3>Use <code>display:inline</code> for all floated elements</h3><p>This takes care of the double margin bug for IE.</p></li>
	<li><h3>Use the png-fix</h3>
	<p>Most of the designs I work on, have some element of transparency - which require the use of the <a href="	http://www.twinhelix.com/css/iepngfix/">png-fix</a>.</p>
	</li>
	<li>
		<h3>Use a conditional IE CSS</h3>
		<p>I use a conditional IE-6 and IE-7 CSS stylesheet. Mostly they contain less than 2 or 3 lines. But it is better to keep them separate from modern CSS without using hacks for individual browsers.</p>		
	</li>
	<li><h3>Use margins rather than padding</h3>
	<p>I rarely use padding (and am very careful with borders) on elements with width specified. This is because of the <a href="http://en.wikipedia.org/wiki/Internet_Explorer_box_model_bug">Box Model Bug</a> in IE as compared to other modern browsers.</p>
	</li>
	<li>
		<h3>Use <code>vertical-align:middle</code></h3>
		<p>For aligning inline <code>img</code> with any other inline element &mdash; especially images which are longer rather than wider. <a href="http://phrogz.net/CSS/vertical-align/index.html">Read more about Vertical Aligning</a> (update: <a href="http://www.maxdesign.com.au/2008/10/05/vertical-align/">another great article on vertical align</a>).</p>

	</li>
</ol>

