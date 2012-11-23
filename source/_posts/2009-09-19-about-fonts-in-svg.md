--- 
layout: post
title: About Fonts in SVG
created: 1253406623
category: "Web Development"
---
<p>One area in my <a href="http://nimbupani.com/blog/font-in-your-face.html" title="Font in your face | Nimbupani Designs">webfonts investigation</a> that I wanted to know more about, was the state of SVG fonts.</p>
<h3>What is SVG?</h3> 
<p>SVG stands for Scalable Vector Graphics. SVG was created to fill the need for a standardized vector graphic solution for the web (read about <a href="http://www.w3.org/Graphics/SVG/WG/wiki/Secret_Origin_of_SVG">the history of SVG</a>). SVG uses XML to describe 2D graphics. So, a circle is defined in SVG as:</p>

<pre>
	&lt;svg width=&quot;12cm&quot; height=&quot;4cm&quot; viewBox=&quot;0 0 1200 400&quot;
	     xmlns=&quot;http://www.w3.org/2000/svg&quot; version=&quot;1.1&quot;&gt;
	  &lt;desc&gt;Example Circle&lt;/desc&gt;
	  &lt;circle cx=&quot;600&quot; cy=&quot;200&quot; r=&quot;100&quot;
	        fill=&quot;red&quot; stroke=&quot;none&quot; stroke-width=&quot;0&quot;  /&gt;
	&lt;/svg&gt;	
</pre>

<p>See <a href="/demo/svgfonts/circle.svg">the sample SVG</a>.</p>
<p>You can convert almost any <a href="http://en.wikipedia.org/wiki/Vector_graphics" title="Vector graphics - Wikipedia, the free encyclopedia">vector graphic</a> to SVG format (here is <a href="http://help.adobe.com/en_US/Illustrator/14.0/WS714a382cdf7d304e7e07d0100196cbc5f-655ba.html">how to save your Adobe Illustrator files as SVG</a>). Typically, since SVG is XML (and a vector graphic), it will be smaller than other image formats.</p>  

<h3>The elephant in the room</h3>
<p>Before I proceed, I must mention that <a href="http://www.rustybrick.com/svg-support-for-internet-explorer.html">IE (even IE 8) does not support SVG</a>. <a href="http://ie.microsoft.com/testdrive/info/ReleaseNotes/Default.html">IE 9 Preview does have support for SVG</a>. Google Chrome&rsquo;s native support of SVG is not as good as Opera, <a href="https://developer.mozilla.org/En/SVG_in_Firefox">Firefox</a>, or <a href="http://webkit.org/projects/svg/index.html">Safari</a> either (see <a href="http://www.codedread.com/svg-support.php" title="SVG Support in major browsers">this excellent chart of SVG support on various browsers</a>). Google has released <a href="http://code.google.com/p/svgweb/">SVG Web</a> which allows SVG to be rendered on all browsers that support either SVG or Flash.</p>
<h3>Fonts in SVG</h3>
<p>Like in any vector graphic, SVG can have text. If you want the text to render a font on any SVG Viewer, you have 3 options:</p> 
<ul>
	<li><p><em>Use web-safe fonts:</em> This is the easiest. An example:</p>
		    <pre>&lt;text x=&quot;100&quot; y=&quot;100&quot; style=&quot;font-family: impact, georgia, times, serif; font-weight: normal; font-style: normal&quot;&gt;
	Text using web safe font
&lt;/text&gt;		    	
		    </pre>   
			<p>See demo of <a href="/demo/svgfonts/svg-websafe.svg">SVG rendered with web-safe font</a></p>
		</li>
		<li><p><em>Use @font-face CSS declaration to specify fonts:</em> Browsers will render text just as they render HTML using @font-face. For example, Firefox does not allow cross-site linking of fonts, so it will not render a font if it is in another server (you need to add a <a href="http://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/" title="beautiful fonts with @font-face at hacks.mozilla.org">HTTP header to allow cross-site linking</a>). </p>
<pre>
&lt;defs&gt;
  &lt;style type=&quot;text/css&quot;&gt;
   &lt;![CDATA[
	@font-face {
		font-family: Delicious;
		src: url(&#x27;http://nimbupani.com/demo/svgfonts/delicious-roman.otf&#x27;);
	}
   ]]&gt;
 &lt;/style&gt;
&lt;/defs&gt;
&lt;text x=&quot;100&quot; y=&quot;100&quot; style=&quot;font-family: &#x27;Delicious&#x27;; font-weight:normal; font-style: normal&quot;&gt;
 Text using CSS @font-face
&lt;/text&gt;	
</pre> 
<p>See a demo of <a href="/demo/svgfonts/svg-fontface.svg">SVG text rendered with CSS @font-face</a></p>
</li>
<li>  
	<p>
			<em>Use fonts defined using SVG&rsquo;s font element: </em> SVG format provides a common font format that will be supported by all confirming SVG viewers. An SVG font will have a file extension of &ldquo;.svg&rdquo; and will be formatted as XML. Here are <a href="http://devfiles.myopera.com/articles/751/SVGfonts_in_HTML.html">some examples of SVG fonts</a>. There are two ways of using SVG Fonts:	</p>   
<ul>
	<li><p><em>Using external SVG Fonts: </em> You can link to an external SVG using the font-face element of SVG (not the CSS @font-face declaration).</p>
</li>
<li><p><em>Embed font within the svg file:</em> Most Vector Graphic editors default to this option.</p></li>
</ul>			
			<p><a href="http://purl.org/NET/2008,frankbruder/article/SVGFonts-usage" title="Frank Bruder - SVG Fonts: How To">This page on SVG Fonts</a> explains exhaustively how to use SVG fonts (and how to convert fonts from other formats to SVG). It has great examples of these two methods of using SVG fonts.</p>
</li>                                   
</ul>
<h3>Using SVG Fonts for HTML</h3>
<p>Using the CSS <a href="http://nimbupani.com/blog/font-in-your-face.html">@font-face declaration</a>, you can also specify SVG fonts instead of just TTF/EOT/OTF fonts. It looks like only Opera 10 and Safari 4 support SVG fonts in CSS (<a href="http://devfiles.myopera.com/articles/593/SVGfonts_in_HTML.html" title="Web fonts example">see a demo of SVG Fonts in HTML</a>). There is a <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=119490">bug filed for Firefox</a> but no fix yet.</p>
<h3>Why use SVG fonts?</h3>
<ul>                                         
	<li><em>Universal support:</em> Any conforming SVG viewer will render the text in the SVG font specified.</li>
	<li><em>Store multiple fonts in a single file:</em> You can create a single SVG file with multiple fonts and use the "id" of that specific font element to declare which font you want to use in your HTML or SVG document.</li>
	<li><em>Open Source:</em> The font file is completely open. If <a href="http://www.w3.org/TR/SVG/fonts.html#MissingGlyphElement">the font you are using is missing glyphs</a> you can add the glyph you need.</li>
	<li><em>Chrome Support:</em> (Thanks for this suggestion <a href="http://twitter.com/paul_irish">@paul_irish</a>!) If you use SVG font format in CSS @font-face declaration for HTML/SVG, it will now work on the latest releases of Chrome, Safari, and Opera (though not on Firefox!).</li>	
</ul>
<h3>Disadvantages of SVG fonts</h3>
<ul>
	<li>
		<p>The main drawback to SVG fonts is there is no provision for <a href="http://en.wikipedia.org/wiki/Font_hinting">font-hinting</a>. The SVG standard states:</p>
		<blockquote cite="http://www.w3.org/TR/SVG/fonts.html#SVGFontsOverview">
			<p>SVG fonts contain unhinted font outlines. Because of this, on many implementations there will be limitations regarding the quality and legibility of text in small font sizes. For increased quality and legibility in small font sizes, content creators may want to use an alternate font technology, such as fonts that ship with operating systems or an alternate WebFont format.</p>  	
		</blockquote>	                       		
	</li>                                  
	<li>
<p>SVG support across browsers is still not consistent. The support for SVG fonts in HTML is even worse.</p>		
	</li>
</ul>
<h3>The Future</h3>
<p>SVG has gained a lot of traction in the recent months. Projects like <a href="http://code.google.com/p/svgweb/">SVG Web</a> can only make the adoption easier. Different browsers support SVG text differently. But, as someone said, these are interesting times for SVG.</p>
