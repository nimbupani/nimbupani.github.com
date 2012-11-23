--- 
layout: post
title: Spacing Out on CSS Namespaces
created: 1273159760
category: "Web Development"
---
<p>One of my favourite past times is opening up a random email from the <a href="http://lists.w3.org/Archives/Public/www-style/">CSS mailing list</a> and going down a rabbit hole. On one rainy day, I found myself staring at the specifications for <a href="http://www.w3.org/TR/css3-namespace/#intro">CSS Namespaces module</a>. </p> 

<h3>Namespaces</h3>

<p>As Wikipedia defines it, a <a href="http://en.wikipedia.org/wiki/XML_namespace">namespace</a> provides a list of uniquely identifiable elements and attributes in an XML document. Here is how you would define the namespace of an XHTML document:</p>

<pre><code>&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot;&gt;</code></pre>

<p>The URL in the code above is simply the name of that namespace and does not refer to an actual location online. Browsers do not use or process URL. It is just an easy way to understand what that namespace is referring to when someone is reading the source code of the document. </p>
  
<h3>CSS Namespaces</h3>
<p>In 2007, Bert Bos <a href="http://xhtml.com/en/css/conversation-with-css-3-team/">explained why CSS Namespaces were introduced</a>:

<blockquote><p>The Namespaces module is very small, very simple, and probably rarely needed, but just because it is simple, it doesn't cost much to add it to CSS. Indeed, many browsers have supported it for a long time already.</p>

<p>The only thing it defines is how to declare an XML Namespace prefix in CSS. That is needed if you want to use selectors that only match elements in a certain namespace. </p></blockquote>

<p>For example, SVG shares some common elements (e.g. <code>&lt;a&gt;</code>) and <a href="http://www.w3.org/TR/SVG/styling.html#PropertiesFromCSS2">CSS properties</a> with HTML with XML and HTML. If you are using the same stylesheet for both HTML and SVG documents, then it is best to separate out the styles for SVG and HTML to prevent any overlap.</p>
<h3>Usage</h3>
<ol>
	<li><p>Declare your XHTML doctype and define a namespace:</p>

	<pre><code>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Strict//EN&quot;  
&quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd&quot;&gt;  
&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot; xml:lang=&quot;en&quot; lang=&quot;en&quot;&gt;</code></pre>
	</li> 
	<li><p>In your style sheet, declare the default namespace for the CSS rules:</p> 
		<pre><code>@namespace "http://www.w3.org/1999/xhtml"; 
@namespace svg "http://www.w3.org/2000/svg"; </code>
		</pre>
	</li>
	<li><p>Use the rules specific to each namespace. If you have declared the above namespaces, you can scope CSS rules to only apply to SVG elements which have the same namespace as above:</p><pre><code>svg|a { color: white; } </code></pre><p>All the other rules will be applied to HTML elements by default. </p></li>
</ol>

<h3>Using it with HTML 5</h3>
<p><a href="http://hsivonen.iki.fi/html5-parser-improvements/">HTML5 allows inline SVG and MathML</a>, which means you can style HTML, inline SVG and MathML elements using the same stylesheet.</p>
	
	
<p>The advantage of HTML5 parsing is that, HTML5 parsers should <a href="http://wiki.whatwg.org/wiki/HTML_vs._XHTML#Syntax_and_Parsing">implicitly assign namespaces to known vocabularies (so far SVG, XML, and MathML)</a>, if the document is <a href="http://wiki.whatwg.org/wiki/HTML_vs._XHTML">HTML</a> (and <em>not</em> XHTML). This means, you do not have to use <code>xmlns</code> to explicitly specify the namespace for SVG or MathML elements in your HTML5 document.</p>

<p>The bad news is, only <a href="http://nightly.mozilla.org/">Firefox nightly builds</a> with <code>html5.enabled = true</code> set on <code>about:config</code> parse and recognize inline SVG or MathML.</p>

<p>Here is a <a href="http://nimbupani.com/demo/namespaces/index.html">demo of using CSS Namespaces for a HTML5 page with inline SVG</a> (mind you, it only works on Firefox nightlies with html5 parser enabled). If you are one of the 99.9% of the population that does not use Firefox nightlies, this is how it is supposed to look:</p>

<p><img src="http://nimbupani.com/files/css3namespace-screenshot.png" alt="screenshot of css3 namespaces demo"></p>
<p>The dinosaur on the left is an inline SVG image which uses styles defined in the SVG namespace. <p>

<p>As the spec mentions, it is not often you will find use for it.     Though,  <a href="http://www.iecss.com/firefox-3.6.3.css">Firefox user agent style sheet</a> uses namespaces to separate the default styles for web pages from those for Firefox UI (which uses <a href="http://en.wikipedia.org/wiki/XUL">XUL</a>).</p>
