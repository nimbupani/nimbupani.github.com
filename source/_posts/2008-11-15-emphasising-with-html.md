--- 
layout: post
title: Emphasising with HTML
created: 1226811021
category: "Web Development"
---
<p><strong>Update:</strong> I had given a wrong example of the <code>cite</code> element. It is corrected now. </p>
<p>There are several ways to quote/emphasise using <abbr title="Hyper Text Markup Language">HTML</abbr>, you can use the <code>&lt;q&gt;</code>, <code>&lt;blockquote&gt;</code>, <code>&lt;cite&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;pre&gt;</code>, <code>&lt;code&gt;</code> and there are subscripts <code>&lt;sub&gt;</code> and superscripts <code>&lt;sup&gt;</code>. </p>
<h3>What does each mean?</h3>
<br/>
<dl>
	<dt>Quote</dt>
	<dd><p>Quote is used for short quotes within paragraphs.</p> 
		<p>Example</p>
		<pre>
<code>&lt;q&gt;All men and women are equal&lt;/q&gt;</code>
		</pre>
		<p>Opera, Safari and Firefox display quotes with double-quotes automatically. Internet Explorer does not render any quotes for text marked as quote. <a href="http://willcode4beer.com/tips.jsp?set=fixIEQuotes">Here is a way to display quotes in Internet Explorer</a></p></dd>
		<dt>Blockquote</dt>
		<dd><p>Blockquotes are used to mark up long quotations which may run into a few paragraphs. Ideally, you use a <code>&lt;p&gt;</code> to mark up a paragraph within a <code>&lt;blockquote&gt;</code> (even if there is only one paragraph).</p>
		<p><a href="http://www.w3.org/TR/html4/struct/text.html#h-9.2.2">The Specs</a> state: </p>
			<blockquote>
				<p>Note. We recommend that style sheet implementations provide a mechanism for inserting quotation marks before and after a quotation delimited by BLOCKQUOTE in a manner appropriate to the current language context and the degree of nesting of quotations.</p>
			<p>However, as some authors have used BLOCKQUOTE merely as a mechanism to indent text, in order to preserve the intention of the authors, user agents should not insert quotation marks in the default style.</p>
			</blockquote>
			<p>Monc.se has an <a href="http://www.monc.se/kitchen/129/rendering-quotes-with-css">excellent article on quotes with a special section on blockquotes</a> that helps to understand how to insert quotation marks using stylesheets for <code>blockquote</code>.</p>
		</dd>
		<dt>Cite</dt>
		<dd>
			<p>Contains a citation or a reference to other sources. <a href="http://www.w3.org/MarkUp/html-spec/html-spec_5.html#SEC5.7.1.1">The HTML 5 spec</a> states that <code>cite</code> is to indicate the title of a book or other citation. For example:</p>
			<pre>
As &lt;cite&gt;The White Mughals &lt;/cite&gt; states, 
&lt;q&gt;A moment&#x27;s insight is sometimes worth a life&#x27;s experience.&lt;/q&gt;
			</pre>
		</dd>
		<dt>em, strong</dt>
		<dd>
			<p><code>&lt;em&gt;</code> is used to indicate emphasis, while <code>&lt;strong&gt;</code> indicates stronger emphasis.</p>
		</dd>
		<dt>Code</dt>
		<dd>
			<p>To indicate a fragment of HTML or other programming instances. For example:</p>
			<pre>
&lt;code&gt;&lt;link type=&quot;image/x-icon&quot; href=&quot;/blog/files/nimbupani_favicon.ico&quot; rel=&quot;shortcut icon&quot;/&gt;&lt;/code&gt;
			</pre>
			<p>Code does not display the content in a fixed width font and requires <abbr title="Cascading Style Sheets">CSS</abbr> styling for it to do so. You also need to convert the angle brackets and other coding symbols into their respective HTML entities before they can be displayed without interfering with the HTML elements within the page.</p>
		</dd>
		<dt>Pre</dt>
		<dd>
			<p>The <code><a href="http://www.w3.org/TR/REC-html40/struct/text.html#edef-PRE">Pre</a></code> notifies the browsers that the text within that element is "preformatted" which means browsers can:</p>
			<ul>
				<li>leave the white space within the text intact.</li>
				<li>render the text with a fixed width font (like courier).</li>
				<li>disable automatic word wrap.</li>
			</ul>
			<p><code>pre</code> also requires the symbols of programming be converted into their respective HTML entities before they can be displayed as they would interfere with the other HTML elements within the page.</p>
		</dd>
		<dt>Superscripts and Subscripts</dt>
		<dd>
			<p><code>&lt;sup&gt;</code>, and <code>&lt;sub&gt;</code> are used to represent superscripts and subscripts. Some people recommend that, since it is for presentational use, to use CSS for them. <a href="http://www.personal.psu.edu/ejp10/blogs/tlt/2007/02/beware-css-for-superscriptsubc.html">This article</a> states why it is better to use unicode rather than <abbr title="Cascading Style Sheets">CSS</abbr> to replace them.</p>
		</dd>
</dl>
