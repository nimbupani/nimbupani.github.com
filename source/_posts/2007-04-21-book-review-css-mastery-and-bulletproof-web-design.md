--- 
layout: post
title: " Book Review: CSS Mastery and Bulletproof Web Design"
created: 1177224666
category: "Web Development"
---
Thanks to <a href="http://tribolum.com">Lucian</a> and his awesome web standards library, I got to read <a href="http://www.cssmastery.com/">CSS Mastery</a> and <a href="http://simplebits.com/publications/bulletproof/">Bulletproof Web Design</a>. Here is a short review of the two.

I completed both the books in a day - which doesn't mean the books are thin on content but rather they are both very easy to read. 

<h3>CSS Mastery by Andy Budd with Cameron Moll & Simon Collison</h3>

This is by far the better of the two books - in terms of coverage and organization. Andy Budd gives a very succinct summary of the basics of XHTML, CSS, Visual Formatting Model (in 2 chapters) which covers a lot of details that I had not realised about CSS - especially about positioning. I didn't know that if you use <code>position:relative</code> on an element, it continues to occupy the original space it was supposed to be in - while it is not the case if you use <code>position:absolute</code> , <code>float:left</code>, or <code>float:right</code>. Perhaps, the fact that I hardly use <code>position</code> is also to blame. 

The next chapters each deal with specific aspects of using CSS styling - like background images, lists, forms, layouts etc. What I love about the book is it covers all of them in depth with equal focus on accessibility and flexibility of styling each. There is a dedicated chapter that covers all the different bugs that crop up in <a href="http://www.microsoft.com/windows/ie/default.asp">IE</a> and the fixes for them. In fact, I didn't know the fix for the <a href="http://www.positioniseverything.net/explorer/doubled-margin.html">Double Margin Float Bug</a> for IE. The book shows me a miracle cure by simply using <code>display:inline</code> on the floated element.  Instead of googling around for solutions, all you need is this book by your side to fix your IE 6 woes. 

The final two chapters are by <a href="http://www.colly.com/">Simon Collison</a> and <a href="http://www.cameronmoll.com/">Cameron Moll</a> who take us through a sample page using the techniques we have seen in the book. 

The book is a great compendium of tips and techniques that are found on the web written very simply in a manner that is easy to grasp. 

<h3>Bulletproof Web Design by Dan Cederholm</h3>

I read this book after reading CSS Mastery and in a way was expecting to see the answers to all my CSS troubles (since it was about Bulletproof Web design!). <a href="http://simplebits.com">Dan</a> had started the introduction warning us not to think of it as the ultimate answer to any CSS trouble. Many of the techniques that Dan covers are already covered in CSS Mastery. Dan spends a lot of time on designing with percentage font sizes which as he says are quite confusing and can easily go out of hand on complex designs and sites.  This book is a good introduction to the designers who are looking to convert from tables based designs to tableless layouts that are accessible and easy to maintain. 

For a bulletproof solution to using rounded corners, Dan describes a method that works for static text (or text whose length is known) but does not provide an answer to text whose length is not known - which is more of a common occurrence with the rapid rise of Content Management Systems. As such, this book does not address the issue of designing for sites whose content is always changing and whose width and heights are never known in advance - and that is the major issue that I face in my work. How can I float images (in an image gallery) and expect them to remain floated if the captions become too long and break the float? 

In a way, I had expected that Bulletproof Web Design would be the answer for the problems given by dynamic html and content that is unpredictable. But it was a lot more basic and I didn't find it giving critical insights in that regard. 

Technorati Tags: <a class="performancingtags" href="http://technorati.com/tag/web design" rel="tag">web design</a>, <a class="performancingtags" href="http://technorati.com/tag/css" rel="tag">css</a>, <a class="performancingtags" href="http://technorati.com/tag/css mastery" rel="tag">css mastery</a>, <a class="performancingtags" href="http://technorati.com/tag/bulletproof web design" rel="tag">bulletproof web design</a>
