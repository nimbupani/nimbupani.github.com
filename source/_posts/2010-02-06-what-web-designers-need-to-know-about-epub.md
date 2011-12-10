--- 
layout: post
title: "What Web Designers need to know about EPUB "
created: 1265470732
category: "Web Development"
---
<p>Steve Jobs<a href="http://bits.blogs.nytimes.com/2008/01/15/the-passion-of-steve-jobs/?ex=1358226000&amp;en=dc35254b0fcd5490&amp;ei=5090&amp;partner=rssuserland&amp;emc=rss" title="The Passion of Steve Jobs - Bits Blog - NYTimes.com"> ate his hat</a> when he announced the iBook application for the tablet, but the iBook portends a bright future for web designers too. Wait, what? Books and web designers, how are they even related? One word: EPUB.</p>

<p><a href="http://en.wikipedia.org/wiki/EPUB" title="EPUB - Wikipedia, the free encyclopedia">EPUB</a> is a publishing standard designed for reflowable content which means the book can be viewed on devices of multiple dimensions. It does this by using XHTML/CSS for rendering the book and a set of standards on top of that to store metadata that can be extracted by E-Book readers to render a table of contents and other details. </p>   
<p>EPUB is a collection of 3 specifications:</p>
<ul>                                
	<li>Open Publication Structure (OPS) 2.0, defines what formats are allowed to be used for the content (e.g. XHTML 1.1 and CSS 2).</li>
	<li>Open Packaging Format (OPF) 2.0, describes metadata, and structure of the .epub file in XML</li> 
	<li>OEBPS Container Format (OCF) 1., specifies the directory structure of the EPUB ZIP archive.</li>
</ul>
<p>EPUB has most recently found an advocate in Apple, but is also supported by many stand-alone Book readers like <a href="http://www.lexcycle.com/desktop" title="Stanza Desktop: A Revolution in Reading | Lexcycle">Stanza</a>, <a href="http://www.adobe.com/products/digitaleditions/" title="Adobe - Digital Editions">Adobe Digital Editions</a>, <a href="http://bookworm.oreilly.com/" title="Read ePub ebooks online : Bookworm ePub reader">Bookworm</a>, <a href="http://ebookstore.sony.com/reader/">Sony Reader</a>, and <a href="http://www.epubbooks.com/ebook-readers" title="epubBooks Digital eBook Readers. Read your epub books on an iPhone, Sony Reader, iPod Touch, Blackberry and many other eReaders | Unleash Your Books">more</a>. </p>

<p>Officially, Kindle does not support EPUB, but <a href="http://blog.fsck.com/2009/04/savory.html" title="Savory - Massively Parallel Procrastination">Savory</a> is an application you can download to Kindle, which converts EPUB to Kindle format on the fly.</p>

<h3>What is in it for you, Web Designer?</h3>
<ul>
	<li>Authors are attempting to self-publish e-books, and <a href="http://www.xconomy.com/national/2010/02/05/kindle-conniptions-how-i-published-my-first-e-book/?single_page=true" title="Kindle Conniptions: How I Published My First E-Book | Xconomy">realise they need HTML expertise to do so</a>. With your superior HTML knowledge you would have a great opportunity to win authors as clients.</li>      
	<li>Kindle sales are one of the driving factors of <a href="http://www.informationweek.com/news/telecom/business/showArticle.jhtml?articleID=222600622" title="Amazon Kindle Sales Push Profits Up 71% -- Amazon -- InformationWeek">Amazon's 71% increase in profit since the last financial year</a>.</li>
	<li>Most e-books today are created by automated tools which are, at best, tag soup generators with no concern for design. My guess is publishers who consistently output great e-book designs would do much better in the marketplace. </li>
</ul>   

<h3>How do I get started?</h3>
<ul>
	<li>Both Kindle and EPUB formats are based on HTML. Unfortunately, there are not many online resources for creating a Kindle book, but <a href="http://www.amazon.com/gp/product/1440488886?ie=UTF8&tag=nimbupani-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=1440488886">Kindle Formatting: The Complete Guide To Formatting Books For The Amazon Kindle</a> and its <a href="http://kindleformatting.com/" title="Kindle Formatting">associated website</a> are highly recommended.</li> 
	<li>There are several resources for creating an EPUB book though. Read <a href="http://www.ibm.com/developerworks/edu/x-dw-x-epubtut.html">this in-depth tutorial on creating an EPUB book</a> (registration required). For a light read, read this article on  the <a href="http://www.jedisaber.com/eBooks/tutorial.asp" title=".epub eBooks Tutorial">different methods of automating the creation of an EPUB book</a>.</li>
</ul>

<h3>What about HTML5 &amp; CSS3?</h3>
<p>I know it is cool to talk about HTML5 and CSS3, but you <em>cannot</em> use any of that in an EPUB book.</p> 
<p>EPUB is an open format but no new version of the specifications have been released since 2007 (one of them is dated 2006). XHTML format has, since then, become extinct too. </p>    
<p>There is no public roadmap, nor are the mailing list archives open to non-members (you need to pay USD1000/year to be a member). From the <a href="http://www.daisy.org/epub/project/issues/epubmaint" title="Issues for EPUB Maintenance | EPUB Maintenance">Bug Tracker</a>, it seems like there will be a new version sometime in the future.</p>        

<p>Open Publication Structure officially requires EPUB readers to support SVG, but only <a href="http://infogridpacific.typepad.com/using_epub/2008/12/epub-svg.html">Adobe Digital Editions supports it</a>. EPUB also  supports <a href="http://blog.threepress.org/2009/09/16/how-to-embed-fonts-in-epub-files/">embedded fonts(preferably OTF) using the CSS2 definition of the @font-face rule</a>.</p>    

<p>Open Publication Structure does not talk about <a href="http://blog.threepress.org/2009/11/15/using-html5-video-in-epub/" title="Using HTML5 video in ePub :  Threepress Consulting blog">displaying HTML5 Videos or Flash animations</a> and most EPUB readers do not support them. </p>

<h3>Internationalization</h3>
	<p>Open Publication Structure <a href="http://www.idpf.org/2007/ops/OPS_2.0_final_spec.html#Section1.3.6" title="Open Publication Structure (OPS) 2.0 v1.0">spectacularly fails to make the case for internationalization</a>, and most popular EPUB readers do not support non-western glyphs. The only way you can get around it is by embedding the font required to display international characters within the EPUB archive. </p> 
	<p>Fortunately, <a href="http://www.infibeam.com/Pi" title="Infibeam.com Pi - India's First eBook Reader">EPUB readers sold in India and China</a> seem to have out-of-the box support for non-western fonts. </p>   
	<p>You have even <a href="http://www.daisy.org/epub/issues/epub-needs-support-vertical-directionality-writing" title="EPUB needs support for vertical directionality in writing | EPUB Maintenance">worse luck trying to render languages with vertical script</a> (and most historical texts in Asia are written in them). </p> 
	<p>There is a way to get around it using <a href="http://blogs.adobe.com/digitaleditions/2007/08/bidirectional_text_and_mathml.html" title="Digital Editions: Bidirectional text and MathML">SVG in Adobe Digital Editions</a>. But, as the comments note, this is not good enough. That article was written in 2007, and there is still no sign of internationalization in Adobe Digital Editions.</p>

<h3>How do I keep track of this in case it becomes as cool as HTML5?</h3> 
<ul>
	<li>O'Reilly is a big EPUB supporter and has a <a href="http://labs.oreilly.com/2009/03/epub-resources-and-guides.html" title="EPUB Resources and Guides - O'Reilly Labs">great set of resources for EPUB</a> (you can follow the trail from there onwards).</li>
	<li>You might also want to read <a href="http://www.bleedingcool.com/2010/02/01/uncanny-valleygirl-by-alex-de-campi-9-valentine-sales-epub-how-to-and-ipad/" title="Bleeding Cool Comic Book News and Rumors  &raquo; Uncanny Valleygirl by Alex De Campi #9: Valentine Sales, ePub How-To And iPad">this cartoonist's take on how he created an EPUB book</a> for his <a href="http://www.boingboing.net/2010/01/27/valentine-multilingual-mobile-comic.html" title="Valentine: serialized multilingual device-independent comics Boing Boing">wildly popular comic series, Valentine</a>.</li>
	<li>Here is an <a href="http://dl.dropbox.com/u/952/epub.opml">OPML file of feeds from websites I track for EPUB news</a>. </li>
</ul>
<p>Hopefully this post will spur you to become an E-Book designer. You know where to send royalty cheques in case you become a world-famous one!</p>
