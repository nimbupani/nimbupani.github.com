--- 
layout: post
title: Current Color in CSS
created: 1296155712
category: "Web Development"
---
<p>In the interest of documenting useless trivia about CSS3, here is something that I re-discovered thanks to <a href="http://twitter.com/ultror">nlogax</a>: <code>currentcolor</code> (<a href="http://jsfiddle.net/2ysAr/show/">example</a>).</p>

<p>Borders always render with the current color when a border color is not specified, but, till recently, there was no equivalent term for that use – now we do: <code>currentcolor</code>.</p>

<p>In CSS3, you can use this value to <a href="http://www.w3.org/TR/css3-color/#currentcolor">indicate you want to use the value of color for other properties</a> that accept a color value: borders, box shadows, outlines, or backgrounds.</p> 

<p>This value was <a href="http://www.opera.com/docs/specs/presto23/#css">first supported by Opera in 2009</a>, since then, Firefox 3.5+, Chrome 1+, and Safari 4+. IE 9 yet does not support this though.</p>

<p>Now to find some practical use for this!</p>
