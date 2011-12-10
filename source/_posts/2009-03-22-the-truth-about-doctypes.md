--- 
layout: post
title: The Truth about Doctypes
created: 1237759092
category: "Web Development"
---
<p>I knew I had to declare a Doctype but just didn&rsquo;t know why. I recently had to work with html files without Doctype and didn&rsquo;t even realise that the IE errors I was coming across was because of the triggering of quirks mode. Today I read in depth about Doctypes and I burn in shame to know how many bugs could simply be resolved by declaring a Doctype. So, here is what I found out about the Damned Doctypes.</p>
<h3>IN THE BEGINNING</h3>
<p>Long long time ago in the age of no standards, people wrote HTML with reckless abandon which resulted in tag soups and atrocious styling. Browsers were no better and tried to &ldquo;fix&rdquo; the errors in CSS declarations and generally did not obey any standard. </p>
<h3>ENTER DOCTYPE</h3>
<p>In 1995 the first signs of standardisation came in the form of HTML 2.0 HTML specification (note that there was no HTML 1.0) which first introduced the use of Doctype &ldquo;To identify information as an HTML document conforming to this specification, each document must start with &hellip; document type declarations.&rdquo;</p>
<p>At end of December 1997, HTML 4.0 was released which specified 3 different specifications. A HTML document can choose which one to follow, by indicating with the Doctype: A Strict specification (which excludes deprecated elements and frames), a Transitional specification (which excludes only frames), and a Frameset specification (which allows just about anything!).</p> 
<h3>INVENTION OF DOCTYPE SWITCHING</h3>
<p>With the 3 flavours of HTML 4.0, browsers had the burden of having to display non-confirming HTML like it used to before (as many old websites would break if the browsers changed the CSS and HTML implementation to match the standards) as well as new HTML documents produced to confirm to the specifications.</p> 
<p><a href="http://en.wikipedia.org/wiki/Tantek_Çelik">Tantek Çelik</a>, first implemented the innovative Doctype Switching while working on Internet Explorer 5 for Mac. The idea was this, if the Doctype specifies one of the modern specifications, the browser will render the HTML in &ldquo;standards mode&rdquo; and if not, the browser will render the HTML in &ldquo;quirks mode&rdquo;. Soon, all other browsers adopted it.</p> 

<p>There is a 3rd mode called &ldquo;Almost Standards Mode&rdquo; which only differs from &ldquo;Standards Mode&rdquo; in the implementation of vertical sizing of table cells (IE 6 and 7 only render this mode and never the standards mode).</p> 
<h3>QUIRKS MODE</h3>
<p>When a browser renders a document in quirks mode, it interprets the CSS and HTML like older versions of the browser allowing for nonstandard code and workarounds. The most affected is the CSS of the HTML document which gets interpreted differently in this mode.</p> 
<p>There is no standard on which Doctype will trigger quirks mode, each browser has its own list of Doctypes that will trigger the quirks mode (<a href="http://en.wikipedia.org/wiki/Quirks_mode#Comparison_of_document_types">see this chart</a>).</p>
<p>For IE 6, 7 and 8, the Doctype declaration should be the very first line of the HTML document, otherwise it defaults to quirks mode (An XML declaration before an XHTML Doctype or even having a HTML comment above the Doctype declaration will trigger quirks mode). In IE 7 and 8, having an XML declaration as the first line of the HTML document will no longer trigger quirks mode.</p>  
<p>Here is how valid CSS declarations get misinterpreted in IE 6, 7 and 8, when they are in quirks mode:</p>
<ul>
<li>The Box Model is rendered incorrectly (padding is applied within the declared width of an element instead of being added to the declared width of an element).</li>	
<li>The dimensions of a block level element changes if the content of the element does not fit the declared dimensions (e.g. If a paragraph which has a <code>height:200px;</code> specified will expand in IE 6 and 7 in quirks mode if the actual text content is longer than that declared height).</li>
<li>The default <code>margin-left</code> and <code>margin-right</code> of a floated element becomes 3px in IE. </li>
<li><code>margin:0 auto</code> does not center elements.</li>
<li>Font properties are not inherited from parent elements to tables.</li>
</ul>
 
<p>Other browsers have their own set of weird behaviors in quirks mode. </p>

<h3>FUN TIMES WITH IE 8</h3>
<p>As IE 6 and IE 7 &ldquo;standards&rdquo; mode did not fully confirm to the specifications, many websites had &ldquo;hacks&rdquo; to make them &ldquo;look good&rdquo; in &ldquo;standards mode&rdquo;. These websites will all appear &ldquo;broken&rdquo; in IE 8 when that comes along (since it complies more to standards than before), so here we go AGAIN down the road of Doctype switching.</p> 
<p>So, now IE 8 has at least 4 modes, quirks mode, IE 7 standards mode, IE 8 almost standards mode and IE 8 standards mode.</p>
<p>Now IE 8 wants to introduce a NEW switching mechanism by using the <code>&lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=8&quot; /&gt;</code> declaration to make sure it uses the IE 8 standards mode to render. If this meta declaration does not exist, it will use other various sources to determine which mode to render, most likely defaulting to IE 7 standards mode.</p> 
<h3>SO THE POINT IS</h3>
<p>Just use the damned Doctype to make sure browsers don&rsquo;t default to quirks mode with your HTML documents. You are safe in using:</p>
<ul>
	<li>
		<span class="strike"><code>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;</code>		</span>
	</li>
	<li>
		<span class=strike><code>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot; &quot;http://www.w3.org/TR/html4/loose.dtd&quot;&gt;</code> (except it triggers quirks mode in Konqueror 3.2, matters only if you know and care about that browser). 		</span>
	</li>
	<li>
		<span class=strike><code>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.1//EN&quot; &quot;http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd&quot;&gt; </code> (without the XML prolog)		</span>
	</li>
<li><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#the-doctype">Just use <code>&lt;!doctype html&gt;</code></a></li>
</ul>
<p>I hope this is of some use to you when you go about coding your HTML pages. Remember the damned Doctype!</p>
<h3>REFERENCE</h3>
1. <a href="http://www.quirksmode.org/css/quirksmode.html">CSS - Quirks mode and strict mode</a>

2. <a href="http://hsivonen.iki.fi/doctype/">Activating Browser Modes with Doctype</a>

[UPDATED: I edited the information about Doctype switching with inputs from <a href="http://www.maxdesign.com.au/">Russ Weakley</a>.] 
