--- 
layout: post
title: The Long Road from XHTML to HTML
created: 1240114531
category: "Web Development"
---
<h3>XHTML - A New Hope!</h3>
<p>I started developing websites in 2003. At that time, XHTML was the flavour of the season (or rather the official W3C recommendation to move forward from HTML 4.x) and <a href="http://deepak.jois.name">Deepak</a> introduced me to the world of web design with XHTML and CSS. It was even <a href="http://www.alistapart.com/articles/betterliving/">written about favourably</a> by the <a href="http://zeldman.com">Godfather of Web Design</a>. The reasons that were given to adopt XHTML were these:</p>
<ol>
	<li>XHTML had a smaller set of rules (since it is based off XML).</li>
	<li>Using XHTML will make your document well formed (not the tag soup HTML allows you to write).</li>
	<li>XHTML will be future compatible.</li>
	<li>XHTML lets you integrate content from other markup languages with XML namespaces (like SVG and MathML) </li>
	<li>You can use standard XML tools to work with your XHTML documents.</li>
</ol>
<p>This was in 2000-2003. With the gift of hindsight we know now that XML was not the future. The biggest disadvantage to using XHTML being, any user agent (e.g. the browser) when it comes across an unescaped ampersand (&amp;) in a URL or a mismatched character encoding in a trackback message, would cause the entire page to fail, and so most of today's public web applications can't safely be incorporated in a true XHTML page.</p>
<p>Internet Explorer has never supported XHTML (<a href="http://realtech.burningbird.net/standards/ie8-standards-mode-by-default/">not even IE 8</a>) making all arguments about standards compliance go down the drain. <a href="http://www.webdevout.net/articles/beware-of-xhtml#content_type">XHTML is not HTML compliant if it is served as content type <code>text/html</code></a> (read more on <a href="http://www.hixie.ch/advocacy/xhtml">why sending XHTML as text/html is harmful</a>). Moreover, XHTML 2 is not compatible with XHTML 1.1, which throws the future compatibility argument out of the window. Others had doubts over XHTML and XHTML 2.0 in particular (<a href="http://www.webdevout.net/articles/beware-of-xhtml">1</a>, <a href="http://www.b-list.org/weblog/2008/jun/18/html/" title="Why HTML">2</a>, <a href="http://meyerweb.com/eric/thoughts/2003a.html#t20030114" title="Eric's Archived Thoughts">3</a>, <a href="http://www.alistapart.com/articles/xhtml/" title="A List Apart: Articles: Rated XHTML">4</a>, <a href="http://diveintomark.org/archives/2003/01/13/semantic_obsolescence" title="Semantic obsolescence [dive into mark]">5</a>) which paved the way for <a href="http://www.whatwg.org/specs/web-apps/current-work/">HTML 5</a>.</p>
<h3>HTML Strikes Back!</h3>
<p>HTML 5 takes an evolutionary path with focus on backwards compatibility along with some innovations. HTML 5 aims to replace XHTML 1.0 and HTML 4.0. HTML 5 and XHTML 2 are opposites in a way, as support for HTML 5 does not imply support for XHTML 2 (browsers need to support these separately).</p>
<p>HTML 5 defines 2 syntaxes - HTML syntax (which is compatible with HTML 4 and XHTML 1 documents (served as <code>text/html</code>)) and XML syntax which needs to be served as <code>application/xhtml+xml</code>. Even better, HTML syntax of HTML 5 allows MathML and SVG elements to be used inside a HTML document (reducing the need to use XML at all). </p>
<p>With HTML 5, you can continue using XHTML closing for empty elements (e.g. &lt;br/&gt;) and <a href="http://wiki.whatwg.org/wiki/FAQ#Should_I_close_empty_elements_with_.2F.3E_or_.3E.3F">it will still be acceptable in HTML syntax</a>.</p>
<p>HTML 5 defines different rules for user agents and authors. The user agents are required to be backwards compatible, but the authors are required not to use "deprecated" elements for HTML 5 conformance.</p>
<p>Safari, Opera, Firefox have openly declared support for HTML 5 (and Internet Explorer is on the team to draft the HTML 5 standard). XHTML 2 does not have any browser support and <a href="http://webkit.org/blog/89/html-standards-process-returning-from-the-grave/">Safari has explicitly opted out of drafting XHTML 2. </a></p>
<p>Mike Malone has written a <a href="http://immike.net/blog/2008/02/06/xhtml-2-vs-html-5/">great review of XHTML 2 vs. HTML 5</a> and <a href="http://www.digital-web.com/articles/html5_xhtml2_and_the_future_of_the_web/">it seems like HTML 5 will win this war.</a></p>
<p>Personally, I gave up on XHTML when I learnt to be more forgiving (and less of a pedant) about HTML documents (it is not their fault!). This blog though, is ironically XHTML 1.0 Strict.</p>
<h3>What should you do?</h3>
<p>If you are new to web design or working on large portals, my suggestion would be to use HTML 4 rather than XHTML. You <em>can</em> code well-formed HTML with HTML 4 and you don't need XHTML to whip you into shape to do that. Better still, use HTML 5 - without using the newly introduced elements (as they are not supported universally).</p>
<h3>Read More</h3>
<ul>
	<li><a href="http://dev.w3.org/html5/html4-differences/">Differences between HTML 5 and HTML 4</a></li>
	<li><a href="http://wiki.whatwg.org/wiki/FAQ">HTML 5 FAQ</a></li>	
</ul>

<p><em>UPDATE:</em> Dave Shea talks about why <a href="http://mezzoblue.com/archives/2009/04/20/switched/">he is switching to HTML 4.01</a>
