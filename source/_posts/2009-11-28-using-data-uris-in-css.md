--- 
layout: post
title: Using Data URIs in CSS
created: 1259440784
category: "Web Development"
---
<p><a href="http://chaz6.com">Chris Hills</a> brought Data URIs to my attention in a <a href="http://nimbupani.com/blog/font-in-your-face.html#comment-3137" title="Font in your face | Nimbupani Designs">comment on my post on web fonts</a>. I had not thought about using Data URIs in CSS at all, but <a href="http://www.nczonline.net/blog/2009/10/27/data-uris-explained/" title="Data URIs explained | NCZOnline">others have</a>.</p>
 
<p><a href="http://en.wikipedia.org/wiki/Data_URI_scheme">Data URIs</a> allow any file to be embedded inline within CSS. Here is an example of a Data URI:</p>
<pre>
	<code>
	span.button {
		background:url(data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%06%00%00%00%1F%F3%FFa%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%04gAMA%00%00%D8%EB%F5%1C%14%AA%00%00%00%20cHRM%00%00n%20%00%00r%EC%00%00%F7I%00%00%84%FA%00%00o%83%00%00%E8!%00%001%BA%00%00%17%89%0FO%F3%95%00%00%02%17IDATx%DA%9C%93%B1N%DB%60%14%85%3FCH%93%105(U%91%CA%D0%20%86H%9D%9A%A5b%23%EE%134oP%18%EC%81%2C%3C%02%8F%90%0EV%8534%7D%83%F4%0D%D2%BDj%93%AD%88%A5%0D%86%E0%10'.%B1%0D6%8E%DD%A1%BF%2B%20%E9%D2%23%FD%CB%D5%3D%E7%DE%7B%FE%7B%A58%8E%01%90%24%89%04%AA%A6T%81%03%40%06%D6D%B8%0B4%F4z%F3c%92%17%C71%D2C%01US%DE%02%AD%E2%93%22%A5%E7%252%99%0CQ%14a%9A%26%FD~%9F(%8AZz%BD%B9%A7j%CA%CB%A3%7D%BDwO%40T%EE%94%CBe%96V%24%EC%A9M%1CEd%1EeyZ%5C'%08%02%8E%BF%1F%E3%FB~%07%90%8F%F6ui%89%FB8(%16%8BL%DD)'''X%17%16%8E%ED%12%FA!%D6dD6%9Bekk%8B%E5%95e9!%3C%14%A8%8D%C7c%7Bp68%9C%05QES%DEK%AE%E3%C9g%C6y%7B8%18b%0CNy%5C(%B0%FDj%FB%2F!%F5%40%A0%0B%D4%F4z%F3g%12%D0%EB%CD%CF%AA%A6l%BA%AEWc%05n%A3%80r%E9%C5%BC%80%AA)%1F%80%06%60%DFU%14%BE%B4%00%FCk%1F%3F%B8%E1%AB%F7ea%07%BB%E2%A1jJ%17h%03m%D1A%05%90C%7FV%03%E4%D0%BB%5E%3C%C2%CEN%95%20%F0q%1C%A7b%18F%C5%B6%EDCUSjz%BD%F9%09%E8%01%EFTM)%88%FD%A8%CD%99%D8%3B%FE%86%EB%3A%A4%D3%E9%24%D4%10d%EEx%F2K%F8%B47%D7%81%7B%E30%BE%B2%C8g%F3%84%B3%10%A0%A2jJU%8C%91T%DE%15%D5%E7%05fn%C4hf%91ZO%B1%B1%F1%0C%C7q%E4%D1%C8%EA%A8%9A%02%12%AC%E6s%C41x%8E%D7%5D%E8A%1C%D2%F1%9D%40%1E%A5%2C%D6%0A%05r%B9%1C%A5%D2*11ax%CB%95%3BelN%10%06%CF-%D2%A6%5Eo%BE%06Z%AE%EDqyiaNLL%FB%82%B3%A1%C1%E9%B9%91%90%BB%E2%BB%FF%9C%C0%3F%AE%F1%CD%9DY%13%FC%10%FB%D0%10F%DE%BF%C6%FF%C5%EF%01%00%14%B1%11%2C%14%88%CF%E0%00%00%00%00IEND%AEB%60%82);
	}</code>
</pre>
<p>See <a href="http://nimbupani.com/demo/datauri/index.html">how it looks</a></p>
<p>Data URIs are always of this format:</p>
<pre>
	<code>data:[&lt;mediatype&gt;][;base64],&lt;data&gt;</code>
</pre>
<p><code>mediatype</code> can be any of the <a href="http://en.wikipedia.org/wiki/MIME#Content-Type">Content Types</a>. The Content Types most useful for CSS are:</p>
<ul>
<li>font/opentype</li>
<li>application/x-font-ttf</li>
<li>image/png</li>
<li>image/gif</li>
<li>image/jpeg</li>
<li>image/svg+xml</li></ul>
<p>Data URIs can be used in the CSS in many ways.</p>

<h3>Embedding Images in CSS</h3>
<p>Any CSS property that uses the <code>src</code> function can use Data URI scheme to embed data. This means, you can embed a CSS sprite like:</p>

<pre>
<code>.button {
	background:url(data:image/png /*embed code */)
}                                               

.button.active {
	background-position:0 -40px;
}                         

.button:hover {
	background-position: 0 -20px;	
}
</code></pre>

<p>See a <a href="http://nimbupani.com/demo/datauri/index.html#sprite">demo of embedding images with data URI scheme</a></p>
<p>This only works on Firefox 2+, Opera 7.2+, Chrome, Safari, IE 8+. For earlier IE versions, you can use a <a href="http://www.phpied.com/mhtml-when-you-need-data-uris-in-ie7-and-under/" title="MHTML - when you need data: URIs in IE7 and under / Stoyan's phpied.com">MHTML workaround</a> in your IE-specific stylesheet.</p>                              
<h3>Embedding Web Fonts in CSS</h3>
<p>Most browsers allow fonts to be embedded using Data URI scheme.</p>
<p>Robert Accettura wrote a great article investigating <a href="http://robert.accettura.com/blog/2009/07/03/optimizing-font-face-for-performance/">Data URLs in @font-face</a>. His demo page renders the embedded fonts correctly in Opera 10, Firefox 3.5, and Safari 4.</p>           
<p>IE 8 (the only IE that supports data uri scheme), for security reasons, <a href="http://msdn.microsoft.com/en-us/library/cc848897(VS.85).aspx" title="data Protocol">allows only images to be embedded inline</a>, so @font-face will not render embedded fonts.</p>
<h3>Advantages</h3>
<ul>
	 <li><a href="http://www.stevesouders.com/blog/2009/11/16/cssembed-automatically-data-uri-ize/">Fewer HTTP requests</a>.</li>
	<li>If you are using it for @font-face implementation, you can avoid the <a href="http://paulirish.com/2009/fighting-the-font-face-fout/">Flash of Unstyled Text</a> since the font is inline (thanks @<a href="http://twitter.com/paul_irish">paul_irish</a>).</li>
	<li>All resources are in one place and if you cannot host images, fonts, you can embed them inline in the stylesheet (Nicholas C. Zakas has written a tool, <a href="http://www.nczonline.net/blog/2009/11/03/automatic-data-uri-embedding-in-css-files/">CSSEmbed</a>, that replaces image references in your CSS file as Data URIs). It would also be useful when you create <a href="http://www.wait-till-i.com/2009/09/06/introduction-to-w3c-widgets-my-presentation-at-brighton-barcamp-4/">stand-alone web applications running as widgets</a>. </li>
</ul> 
<h3>Drawbacks</h3>
<li>Large file sizes. Embedded images work best with small images like icons and arrows. Rob Flaherty has done some excellent research into <a href="http://www.ravelrumba.com/blog/css-images-and-data-uris/">real-time performance of inline embedding</a>.</li>
<li>Not easy to maintain. Any change to the image or font needs to be added correctly to the CSS.</li>                                                                                   




