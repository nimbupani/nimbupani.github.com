--- 
layout: post
title: Multi-Lingual Fonts with Typotheque and Font Face
created: 1249615376
category: "Web Development"
---
<p>I <a href="http://nimbupani.com/blog/font-in-your-face.html" title="Font in your face | Nimbupani Designs">wrote about the great debate on @font-face</a>, and was pleasantly surprised when Peter Bilak of <a href="http://www.typotheque.com/">Typotheque</a> invited me to beta-test their webfont service.</p>     
<p>The primary advantages of Typotheque&rsquo;s service is ease of use and faster load times (as compared to others). It only uses CSS (not javascript) to generate the font stack. By using font subsetting, the service generates smaller font files.</p> 
<h3>How to Use Typotheque Webfonts</h3>  
<ul>  
<li>Create an account with Typotheque.</li>
<li>Purchase fonts from a list of available webfonts.</li>
<li>Create a project on your account. Here you set which fonts you would like to use, the language you will use the font in, and domain it will be used in (you can set multiple domains).</li>
<li>The service generates a CSS file and gives you the link to it that you just need to add to between <code>&lt;head&gt;&lt;/head&gt;</code> of your HTML page.</li>
<li>You cannot access the CSS file by loading the url given above directly in your browser. Same is true for the font files as well.</li>
<li>If you are more street-savy, you might be able to download the font, but you can&rsquo;t install it on your machine as it is not strictly a TrueType font.</li>
</ul>
<p>Typotheque&rsquo;s business model is to charge according to bandwidth usage (which seems fair). The exact prices are not available yet (nor are the EULAs for webfonts) and might just be the deciding factor in how successful this service becomes.</p>   
<p>If you would like to know how the interface looks like, head over to <a href="http://forabeautifulweb.com/blog/about/testing_typotheque_font-face_embedding/">Andy Clarke&rsquo;s blog post on it</a>. </p>
<h3>Multi-Lingual Fonts with @font-face</h3>
<p>Here is my <a href="http://nimbupani.com/demo/typotheque/index.html">demo page with Typotheque font faces</a>.</p>
<p>As you can see, I have used their first Devanagri webfont &ldquo;Fedra Sans Hindi&rdquo;. It renders beautifully in browsers supporting @font-face on Windows. However, it is a different story on the mac. See the picture below:</p>   
<p><img src="/files/typotheque-multilingual-demo.png" alt="Typotheque Multilingual Demo" /></p>
<p>Apple uses their own proprietary <a href="http://developer.apple.com/textfonts/ttrefman/RM06/Chap6AATIntro.html">Apple Advanced Typography</a> (which is a set of extensions on top of True Type Font) for rendering complex ligatures which are found in Arabic or Devanagari scripts. There is a way to specify fonts such that you can provide the AAT format for Mac OS X and other kinds of fonts for the rest of the browsers:</p>
<pre>
@font-face {
font-family: Lateef;
src: url(../fonts/LateefRegAAT.ttf) format(&quot;truetype-aat&quot;), 
url(../fonts/LateefRegOT.ttf) format(&quot;opentype&quot;);
}
</pre>     
<p>Currently, in the CSS 3 draft, the following font formats can be specified &ndash; True Type (supported by Opera, Safari, Firefox), OpenType (Opera, Safari, Firefox), Embedded OpenType (Internet Explorer), SVG Font (Safari & <a href="http://dev.opera.com/articles/view/standards-support-in-opera-10-beta/#webfontssvg`">Opera</a> &ndash; I cannot confirm if Firefox supports it, IE definitely does not). </p>       
<p>Unfortunately, Typotheque does not generate the AAT format font for their multi-lingual webfonts (you can see in my demo that the Hindi text is not rendered correctly, in all OS X browsers except Firefox, because of that). Firefox 3.5 on the Mac OS X, interestingly, does not use the font specified in the @font-face if it is not an AAT type of font. <a href="#comment-2942">John Dagett explains it quite well in his comment</a>.</p>
<p>They have a point. Recently, Apple started <a href="http://en.wikipedia.org/wiki/OpenType#Advanced_typography">supporting Open Type rendering for Arabic scripts</a> (which means Typotheque&rsquo;s Arabic webfont will be rendered correctly by all browser in Mac OS X 10.5). Typotheque feels that they would expand this to other scripts as well (like Devanagari) in the future. Updating their service to support yet another font format would require weeks of work.</p>
<p>On the whole, I think this service has great potential and is a simpler alternative to <a href="http://blog.typekit.com/2009/05/27/introducing-typekit/">Typekit</a> or <a href="http://kernest.com/">Kernest</a>.</p>
