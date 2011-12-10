--- 
layout: post
title: Content Models in HTML
created: 1270475713
category: "Web Development"
---
<p>So, in the spirit of being the <a href="http://nimbupani.com/font-in-your-face.html">ferret for jargon I don't understand</a>, I went on a quest to understand what the phrase "Content Models" mean. </p>

<h3>WTF are "Content Models"?</h3>
<p>You will regret asking that question, as it is a rabbit hole. But fear not as this post can be your summary of the excitement that awaits you. In short, Content Models are used to define the kind of content that can be found within an element in HTML. Historically, this is defined in the <a href="http://en.wikipedia.org/wiki/Document_Type_Definition">DTD</a> for a SGML-derived language (like XML and HTML 4.01).</p>

<h3>The Story so Far</h3>
<p>In HTML 4.01 specification, every element needs to be defined and contain a content model. For example, a <code>ul</code> element can only contain one or more <code>li</code> elements. An <code>img</code> cannot contain any element within it, so its content model is empty.</p>

<p>Several elements are categorized in HTML 4.01 into <em>block</em> and <em>inline</em>. This is declared in the <a href="http://www.w3.org/TR/REC-html40/sgml/dtd.html#block">HTML 4.01  DTD</a>:</p>

<pre>&lt;!ENTITY % block &quot;P | %heading; | %list; | %preformatted; | DL | DIV | NOSCRIPT | BLOCKQUOTE | FORM | HR | TABLE | FIELDSET | ADDRESS&quot;&gt;and&lt;!ENTITY % inline &quot;#PCDATA | %fontstyle; | %phrase; | %special; | %formctrl;&quot;&gt;</pre>

<p>Each element is then defined in the DTD with what kind of content they can contain. For example, while <code>p</code> is a block element, it can contain only inline elements according to the <a href="http://www.w3.org/TR/REC-html40/struct/text.html#edef-P">DTD</a>:</p>

<pre>&lt;!ELEMENT P - O (%inline;)*            -- paragraph --&gt;</pre>

<p>Some elements (like <a href="http://www.w3.org/TR/REC-html40/struct/text.html#edef-ins"><code>ins</code> or <code>del</code></a>) can function either as block level or inline elements depending on how they are used. </p>

<p>HTML 4.01 defines the content models within a DTD, which is referenced by the Doctype declaration at the beginning of a HTML page. In HTML5, the content models are defined within the spec and not in a DTD (this also means you do not have to specify a Doctype, but not doing so will trigger quirks mode in some browsers, so you are recommended to use the HTML5 Doctype <code>&lt;!doctype html&gt;</code>).</p>


<h3>What's new in HTML5?</h3>

<p>HTML5 does away with block and inline categorization of content. There are now <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/content-models.html#content-models">several categories</a>:</p>

<ul>
<li>Metadata content</li>
<li>Flow content</li>
<li>Sectioning content</li>
<li>Heading content</li>
<li>Phrasing content</li>
<li>Embedded content</li>
<li>Interactive content</li>
</ul>

<p>Each element can belong to one or more categories, and can behave one way or the other depending on the context. Each of them has an expected list of contents. Here is <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/section-index.html#element-content-categories">a summary of which elements belong to which categories</a></p>

<h3>Why is this good to know?</h3>
<p>There is an experimental<a href="http://www.iandevlin.com/blog/2010/01/html5/enabling-the-html5-parser-in-firefox-3-6"> HTML5 parser available on Firefox 3.6</a> onwards and <a href="http://www.opera.com/docs/specs/presto25/#html5">basic HTML 5 parsing available for Opera Presto 2.5 rendering engine</a>. Suffice to say, when all browsers start parsing HTML5, it will be relevant to know which content is being rendered in what context for writing more semantic code.</p>
<p>Browsers have, for long, worked around incorrect implementations of the HTML specification, so the more rigorous/semantic we are with our markup, the easier it is for the browser to render!</p>
<p>Or, you can use this knowledge to wisely nod your head when you are trying to parse the messages in the <a href="http://www.whatwg.org/mailing-list">WHATWG mailing list</a>!</p> 
