--- 
layout: post
title: Font in your face
created: 1248587965
category: "Web Development"
---
<p>So, you are a web designer going about your daily life, struggling with IE 6, huffing about CSS 3/HTML 5, berating your designers for not using web-safe fonts, and there comes a brick hurling towards you named @font-face. You are dumbstruck. You have no idea what hit you. Everyone is asking about it, and you pretend to know about it. Then you quickly google for it and are hit with even more bricks. I was one such web designer and I spent 4 days in agony, learning about @font-face. I wrote this down, so that no other web designer has to face this torture anymore. So here is the &ldquo;A to Z&rdquo; of what @font-face means now and what it will mean for the future of web design.</p> 

<h3>Digital/Computer Fonts</h3>
Computer fonts are digital data files that are made up of a set of characters and glyphs to render text. 

<h3>Copyright issues with Computer Fonts</h3>
<p>The <a href="http://www.howdesign.com/article/fontpiracy/">U.S. Copyright Office has declared typeface design cannot be copyrighted.</a> (Some other countries do allow copyrighting of typeface designs). Hence, analog font designs (those metal characters) cannot be copyrighted.</p>

<p>However, all scalable digital fonts are treated as &ldquo;Computer Programs&rdquo; and hence come under the draconian <a href="http://en.wikipedia.org/wiki/Digital_Millennium_Copyright_Act" title="Digital Millennium Copyright Act">DMCA</a>. As they are treated as software, you only get <a href="http://en.wikipedia.org/wiki/Software_license">a license to use the software</a> following all the instructions of the font creator/seller. Almost all commercial licenses forbid you to share/link to fonts.</p> 

<h3>Font Embedding</h3>
<blockquote><p>Font embedding refers to technology that saves fonts (or subsets of fonts) inside document files. The aim of this is that recipients of the document can see it as it was designed, without having to have the fonts already installed on their computer.</p></blockquote>
-  Older version of <a href="http://fontlab.wikidev.net/Font_embedding">Electronic EULA Wiki</a>                                 

There are two major font formats: True Type and Open Type. Both support, &ldquo;embedding protection&rdquo; by having an &ldquo;embed flag&rdquo; that specifies what kind of embedding permission has been allowed by the font seller. The permissions available are:

<strong>Restricted License:</strong> This font cannot be modified or exchanged or embedded in any manner without first obtaining permission of the legal owner.

<strong>Preview &amp; Print:</strong> This font may be embedded and temporarily loaded with a document on a remote computer. No editing of a document is allowed.

<strong>Editable:</strong> This font may be embedded and temporarily loaded with a document on a remote computer, and the document may be edited and the changes saved. 

<strong>Installable:</strong> This font can be embedded and permanently loaded on a remote computer for use with the document. The user of the remote computer acquires the same rights and obligations as the original purchaser of the font. 
   
- from <a href="http://www.fontembedding.com/document-font-embedding/">Document Font Embedding</a>   
There has only been one case that has been brought to court which tested the usage of these embed flags. It was a case that Agfa Monotype brought against Adobe Systems for the software that Adobe produced which did not respect these embed flags. <a href="http://www.eff.org/wp/unintended-consequences-ten-years-under-dmca#footnoteref44_mk118s2">The court noted that embedding bits do not effectively control access to a protected work</a>.    

<h3>@font-face</h3>        
<p>Introduced in 1998 for CSS level 2, the first browser to implement it was IE 4 which used (and which IE 8 continues to use) a new format of font called <a href="http://en.wikipedia.org/wiki/Embedded_OpenType" title="Embedded Open Type">EOT</a>. It was introduced (without the EOT) in the CSS 3 Draft &ndash; mostly thanks to <a href="http://people.opera.com/howcome/">H&aring;kon Wium Lie</a>. Webkit (the web browser engine that powers Safari, Chrome) started supporting @font-face in October 2007, Firefox in October 2008, Opera 10 in December 2008. All of them do not recognize EOT format but only the existing popular True Type and Open Type formats.</p>   
     
<h3>How to use it?</h3>
<p>It is quite simple. See the example below (from the <a href="http://www.w3.org/TR/css3-webfonts/#the-font-face-rule">CSS 3 draft</a>) for a simple use case:</p>
<pre>
	<code>
		@font-face {
		  font-family: Gentium;
		  src: url(http://site/fonts/Gentium.ttf);
		}

		p { font-family: Gentium, serif; }		
	</code>
</pre>
<p>Read Paul Irish&rsquo;s entry on <a href="http://paulirish.com/2009/bulletproof-font-face-implementation-syntax/">how to use @font-face so that it works across all browsers that support it</a>. </p>   
<h3>But there is no embed, you idiot!</h3>             
<p>Technically, @font-face only <em>links</em> to fonts, but the browsers would have to download those fonts and store it in the user&#x27;s machine to render the HTML document. Hence, a lot of font developers treat @font-face font linking as font embedding.</p>
     
<h3>Drawbacks of @font-face</h3>
<p>Technically, you can use @font-face cross-browser <em>right now!</em> But there are a few issues with using @font-face:</p>
<ul>
	<li>Many fonts of today are really huge, running into 2MB or more. So, users of your website need to wait till the font downloads. In Firefox 3.5, the users will see the web safe font (if you have declared it) first before it switches to the downloaded font. But, scarily, in Safari, <a href="https://bugs.webkit.org/show_bug.cgi?id=25207">you will see <em>nothing</em></a>, till the font loads (if it loads at all).</li>   
	<li>Firefox implements a <a href="https://developer.mozilla.org/index.php?title=En/CSS/%40font-face">same-domain restriction on fonts</a>, which means the font you use and the HTML file you use it on must be on the same domain name. You can overcome it by setting the <a href="https://developer.mozilla.org/En/HTTP_access_control">HTTP Access Controls</a> on the server where your fonts are stored.</li>
	<li>You can only use fonts which have been explicitly licensed for using with @font-face. You can find a those fonts in these sites: <a href="http://www.webfonts.info/wiki/index.php?title=Fonts_available_for_%40font-face_embedding#Fonts_which_specifically_allow_.40font-face_embedding">1</a>, <a href="http://www.theleagueofmoveabletype.com/">2</a>, <a href="http://www.fontsquirrel.com/">3</a>, <a href="http://blogof.francescomugnai.com/2009/07/20-beautiful-free-font-face-fonts/">4</a>.
		</li> 
		<li>A lot of designers think @font-face will herald the return of the 90s design and the &ldquo;downfall&rdquo; of web design as we know it. Obviously, this is a silly conjecture, tools do not make a design.</li>
</ul>
<h3>What is this EOT?</h3>
<p>Read this <a target="_blank" href="http://en.wikipedia.org/wiki/Embedded_OpenType">wikipedia entry on EOT</a> and come back here.</p>

<h3>Read it, why not just use EOT and be done with it?</h3>
<p>The main objections that Firefox and Safari have to using EOT is the clause in the specification of EOT that states &ldquo;If the font embedding bits do not provide permissions for embedding, the user agent shall not use the font.&rdquo; <p>A lot of <a href="http://diveintomark.org/archives/2009/04/21/fuck-the-foundries">free software evangelists</a> are against the idea of using the embed flag as <a href="http://en.wikipedia.org/wiki/Digital_rights_management" title="Digital Rights Management">DRM</a></p></p>
<p>Another objection is that the compression technology used by EOT is patented by <a href="http://www.monotypeimaging.com/">Monotype Imaging</a>. Monotype has claimed it will bring the <abbr title="MicroType Express">MTX</abbr> technology into public domain IF EOT gets adopted universally (a classic chicken-and-egg problem).</p>  
<p>There is a proprietary Microsoft (windows-only) tool to generate EOTs, called <a href="">WEFT</a> and that tool does not convert Open Type fonts to EOT format, but the OTF fonts need to be converted first into True Type fonts (see <a href="http://jontangerine.com/log/2008/10/font-face-in-ie-making-web-fonts-work">Jon  Tan&rsquo;s great post on @ font-face</a>). However, there is an alternative, as pointed out by <a href="http://svzsolutions.nl/">Stefan van Zanden </a> called <a href="http://code.google.com/p/ttf2eot/">ttf2eot</a> that does the same without the frustration of WEFT. <del>The last I checked, it seems like it does not output the root strings without which IE 7 and 8 cannot render EOT font</del>. Stefan has a <a href="http://svzsolutions.nl/samples/webfonts/index.html">demo</a> showcasing how the fonts work on most modern browsers.</p> 
<p>EOT in it&rsquo;s current incarnation, needs a URL to be supplied with the original font and the resulting EOT font will only work on those specific websites.</p> 
<p>Recently, some research suggests that <a href="http://lists.w3.org/Archives/Public/www-font/2009AprJun/0047.html">MTX compression has negligible effect on the file sizes of some ClearType fonts</a>, and some other compression algorithms like <a href="http://en.wikipedia.org/wiki/Lempel-Ziv-Markov_chain_algorithm">LZMA</a> seem to work better.</p>
<p>More articulate arguments against EOT are in this excellent <a href="http://www.w3.org/Fonts/Misc/eot-report-2008">Report on Font Embedding</a></p>
<h3>So What Now?</h3>
<p>Many people have suggested entirely new web formats to implement. Some major proposals that have gained prominence:</p>
<ul>
	<li><p><strong>EOT Lite</strong> This does away with the two most hated parts of EOT, compression and respecting the embed flag. So, it ends up like a wrapper around the font itself (<a href="http://readableweb.com/jeffrey-zeldman-questions-the-eot-lite-web-font-format/">Read more about EOT Lite here</a>). The best part is, this will work with existing implementations of EOT in IEs. Not many type foundries are supporting this format though - mainly because of the removal of the recognition of the Embed Flag.</p></li>
	<li><p><strong>webfont</strong> This has gained massive popularity recently. <a href="http://lists.w3.org/Archives/Public/www-font/2009JulSep/0440.html">Webfont was first introduced here</a> and <a href="http://lists.w3.org/Archives/Public/www-font/2009JulSep/0440.html">refined here</a> by <a href="http://www.letterror.com/">Erik Van Blokland</a> and <a href="http://talleming.com/2009/04/21/web-fonts/">Tal Leming</a>. A font of this format will contain two files compressed (proposed to use zip compression): </p>
		<p>1. info.xml<br/>
		2. Font file<br/></p> 
		<p>The xml will have info on the font meta data like: creator, create date, font name, vendor name, vendor url, etc. The most controversial of these is the &ldquo;allow&rdquo; field &mdash; which is the same as an Embed Flag &mdash; in that meta data which is stated as optional, and is proposed that browsers use this information as they wish (either show it in the Page Info area, or explicitly deny fonts from rendering if the Embed Flag prohibits such use).</p></li>
	<li><p><strong>ZOT</strong> has <a href="http://lists.w3.org/Archives/Public/www-font/2009JulSep/0018.html">gained currency recently</a>. The proposal is for a compression format (by <a href="http://www.tug.org/interviews/interview-files/jonathan-kew.html">Jonathan Kew</a>) consists of a ZOTHeader, Tables Directory, and Font Tables. It allows a User Agent (e.g. a browser) to simply download the header and determine the number of tables required, and download only the necessary font tables (by looking up the Tables Directory) of the font to render the text.</p></li>    
	<li><strong>UPDATE on 7th Aug 2009:</strong> Jonathan Kew, Tal Leming, Erik Van Blokland have combined their proposals into <a href="http://lists.w3.org/Archives/Public/www-font/2009JulSep/1238.html">a new WebOTF format</a> that seems to have the support of representatives of most browsers. Seems like this format might just win.</li>
</ul>
<h3>OK. What can I do NOW?</h3>
<p>You can use fonts from the <a href="http://openfontlibrary.org/wiki/Web_font_linking_with_%40font-face">Open Font Library</a>.</p>
<p>You can also use commercial fonts that are aligned with <a href="http://blog.typekit.com/2009/07/21/serving-and-protecting-fonts-on-the-web/">Typekit</a>. Typekit uses javascript to provide some basic protection against downloading these fonts directly. Another service similar to Typekit is <a href="http://kernest.com/">Kernest</a>, some comments in the www-font mailing list seem to suggest it is not ready for prime-time yet. But, you have two options, if you would like to go the javascript route.</p>
<p>Typotheque Font Foundry has <a href="http://www.typotheque.com/news/web_font_service_preview">announced a web font service</a> which will provide both TTF and EOT fonts which are small and fast to load for a price. The service has not started yet. From the discussions on the www-font mailing list, it seems like <a href="http://lists.w3.org/Archives/Public/www-font/2009JulSep/0684.html">Typotheque corrupts the NAME tables with referrer checking</a> which prevents the font from being installed on a computer. I am unable to confirm if this is true. If you have tested their service, do let me know in the comments if it is.</p> 
<p>Subscribe to the <a href="http://lists.w3.org/Archives/Public/www-font/">www-font mailing list</a> and keep yourself updated. Or watch this blog (or <a href="http://twitter.com/nimbupani">my twitter stream</a>) for BREAKING NEWS about Web fonts.</p>
  
<p>This current rage of Font Formats has been compared to the <a href="http://www.cloanto.com/users/mcb/19950127giflzw.html">GIF controversy of yore</a>. But, let&rsquo;s hope this too will lead to <a href="http://en.wikipedia.org/wiki/Portable_Network_Graphics">something great</a>.</p> <p>Hopefully, all this information has still left your brain intact to process other crazy information about font-face that will emerge in the coming days. Whatever it is, the ways and methods of a web designer are on the verge of radical change. Yes we can!</p> 
<p><small>Thanks to <a href="http://www.brucelawson.co.uk/">Bruce Lawson</a>, <a href="http://maxdesign.com.au">Russ Weakley</a> and <a href="http://kliehm.com/">Martin Kliehm</a> for reviewing this article and correcting some facts.</small></p>
