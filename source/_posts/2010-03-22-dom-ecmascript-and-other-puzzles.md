--- 
layout: post
title: DOM, ECMAScript and other puzzles
created: 1269269326
category: "Web Development"
---
<p>I have for a long time pretended to know exactly what <abbr title="Document Object Model">DOM</abbr>, ECMAScript, JScript, DHTML, etc. mean, just to sound cool, but took this weekend to read up on what they mean and how they are related.</p> 

<p>This is how the <a href="http://www.w3.org/TR/DOM-Level-2-Core/introduction.html">DOM specification</a> defines a DOM:</p>

<blockquote><p>The Document Object Model (DOM) is an application programming interface (API) for valid HTML and well-formed XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.</p></blockquote>

<p>In other words, DOM is a standard way to let programming languages interact with HTML/XML documents. W3C provides, what is called, language bindings, for Java, and ECMAScript. This means, the functionalities defined in the DOM specification have been implemented in these languages.</p>

<p><a href"http://en.wikipedia.org/wiki/ECMAScript">ECMAScript</a> is a standardization of the cave-men scripting languages - Netscape’s <a href="http://en.wikipedia.org/wiki/JavaScript">JavaScript</a>, and Microsoft’s <a href="http://en.wikipedia.org/wiki/JScript">JScript</a> so that all browsers can understand instructions written using ECMAScript. Now, there are three major &ldquo;dialects&rdquo; of ECMAScript: JavaScript (Firefox/Chrome/Safari), JScript (IE), and ActionScript (Adobe Flash/Flex). These are called dialects as they support code written before standardisation and provide some features not available in ECMAScript or other dialects. </p>

<p>A browser provides an implementation of the DOM interfaces that allows ECMAScript (or supported dialects) to interact with the DOM of a HTML/XML document. So, most decent browsers release conformance statements to say which ECMAScript Standard each version of their browser supports. </p>

<p>The DOM of a HTML page has a &ldquo;tree-like&rdquo; structure when visualized. It is important to note that the DOM does not represent the content of the HTML but only represents objects through which the content can be accessed. These objects are modelled after the markup that exists on the HTML page. The relationships, functions, behaviors and attributes of these objects are identified by the DOM.</p> 

That is it! You typically do not need to know about DOM interfaces if you work primarily with a JavaScript library. But if you are interested, Quirksmode has a <a href="http://www.quirksmode.org/dom/intro.html">great introduction to DOM</a>. 
