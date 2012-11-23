--- 
layout: post
title: Declaring Languages in HTML 5
created: 1256624915
category: "Web Development"
---
<p>Web Development is infinitely more troublesome when you have documents in languages other than American English. The onus is on us web developers and server administrators to make sure browsers and search engines can detect the right language. Here is how you can declare the language of your document in HTML 5.</p> 

<h3>What is language declaration?</h3>
<p>This is a way to specify what language a HTML document or a snippet of HTML text is in. Language declaration does not provide information on <a href="http://www.w3.org/TR/i18n-html-tech-lang/#ri20050208.093646470">character encoding and the text direction</a> (right to left or left to right). Those need to be declared separately.</p>  

<h3>Why specify a language?</h3>
<p>Language information can be used for:</p>
<ul><li>Text to speech converters (e.g. speak Canadian french rather than french)</li>
		<li>Selecting the right fonts for display (e.g. use  traditional chinese script instead of the simplified one)</li>
		<li>Selecting the right dictionary for browser spell-checks in forms (use UK English rather than US English)</li>
		<li>Rendering the page correctly — in short deliver the document in its most natural language as possible.</li>
</ul>

<h3>Language processing</h3>
<p>In HTML 5, there are 3 ways to declare the language of a HTML document:</p>
<ul><li><del>As a pragma directive e.g. <code>&lt;meta http-equiv=&quot;content-language&quot; content=&quot;en&quot;&gt;</code></del> (W3C's HTML5 validator now reports the following error: "Using the meta element to specify the document-wide default language is <a href="http://www.w3.org/TR/2011/WD-html-markup-20110113/meta.http-equiv.content-language.html">obsolete</a>. Consider specifying the language on the root element instead.")</li>
	<li><p>As part of header in HTTP response, e.g. below:</p>
<pre>
HTTP/1.1 200 OK
Date: Wed, 05 Nov 2003 10:46:04 GMT
Server: Apache/1.3.28 (Unix) PHP/4.2.3
Content-Location: CSS2-REC.en.html
Vary: negotiate,accept-language,accept-charset
TCN: choice
P3P: policyref=http://www.w3.org/2001/05/P3P/p3p.xml
Cache-Control: max-age=21600
Expires: Wed, 05 Nov 2003 16:46:04 GMT
Last-Modified: Tue, 12 May 1998 22:18:49 GMT
ETag: "3558cac9;36f99e2b"
Accept-Ranges: bytes
Content-Length: 10734
Connection: close
Content-Type: text/html; charset=iso-8859-1
Content-Language: en			
</pre>
	<small>Example from W3C article on <a href="http://www.w3.org/TR/i18n-html-tech-lang/#ri20040808.101452727">Internationalization Best Practices</a></small>
	</li>
<li>As <code>lang</code> attribute on a HTML element e.g. <code>&lt;div lang=&quot;fr&quot;&gt;</code>, or a <code>xml:lang</code> attribute on XML documents like MathML and SVG.</li> </ul>

<p>The first two ways of specifying language is used to identify <a href="http://www.w3.org/TR/i18n-html-tech-lang/#ri20040808.101452727">the intended audience</a> of the HTML document. This information is used in the following ways:</p>
<ul>
	<li>Search Engines use this for determining which document to include in search results (e.g. it will not show a document with content-language set as Chinese if a search is looking for english documents, but most search engines use more than these two to determine which documents to show).</li>
	<li><a href="http://httpd.apache.org/docs/2.0/content-negotiation.html">Content negotiation</a> by Apache servers based on the language preference set by the users on their browsers.</li> 
	<li>Identify the <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/elements.html#attr-lang">default language of a document</a> This concept is new in HTML 5. If you specify only one language using the above two methods (i.e. <code>&lt;html lang=&quot;en&quot;&gt;</code> instead of <code>&lt;meta http-equiv=&quot;content-language&quot; content=&quot;en, fr&quot;&gt;</code>), then the text of the entire document is processed as that language (except for the text that is contained in an element which has another <code>lang</code> attribute, which is processed as the language tag value in <code>lang</code> attribute). </li> 
</ul>
<p>The last method is to explicitly declare a language to be used for text processing by the user agent. Use the <code>lang</code> attribute if you want the browser to process the text in that HTML element in a specific language.</p> 
<p>The language code that comes after <del><code>Content-Language</code> or</del> content in <code>meta http-equiv</code> or in <code>lang</code> attribute need to be from subtags in the IANA language subtag registry. You can read more on <a href="http://www.w3.org/TR/i18n-html-tech-lang/#ri20030218.131140352">choosing language values here</a></p>
<h3>Default Language of a Document</h3>
<p>Unless you explicitly use the lang attribute to define the language of the document, HTML 5 specifies the following inheritance rules to <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/elements.html#the-lang-and-xml:lang-attributes">determine the language of a HTML element</a>: 
	<p>The HTML element has a <code>lang</code> attribute (e.g. <code>&lt;span lang=&quot;en&quot;&gt;</code>), if not &mdash;</p>
	<p>The nearest parent of that element has a lang attribute, if not &mdash;</p>	
	<p><del>The document has a single language tag set through pragma directive (e.g. <code>&lt;meta http-equiv=&quot;content-language&quot; content=&quot;en&quot;&gt;</code>), if not</del> &mdash;
	</p>
	<p>The HTTP header Content-Language contains a single language tag, if not &mdash;</p>
	<p>The document is treated as that of an unknown language.</p>  
<h3>Bottomline</h3> 
<p>This is not the last word on detecting the language of a document, but for the time being, if your document has content that is mostly not English, use the <code>lang</code> attribute on the <code>&lt;html&gt;</code> element to specify the language. If there are elements of the document which use language other than the one specified for the whole document, use <code>lang</code> attribute for each such element.</p>
