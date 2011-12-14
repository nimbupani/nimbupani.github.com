--- 
layout: post
title: When to use Vendor-Specific Extensions
created: 1262367026
category: "Web Development"
---
<h3>What are vendor-specific extensions?</h3>
<p>There are some CSS properties which are only supported by specific rendering engines, e.g. <code>-webkit-box-shadow</code>, <code>-moz-border-radius</code>, or <code>-o-transition-property</code>. The post <a href="http://nimbupani.com/css-references-for-mainstream-browsers.html" title="CSS References for Mainstream Browsers | Nimbupani Designs">CSS references for Mainstream browsers</a> has  links which list other vendor specific extensions. </p>
	
<p><a href="http://www.css3.info/vendor-specific-extensions-to-css3/">Some people</a> assert these properties exist for testing properties described in draft versions of a future standard, but many of these extensions exist to give special functionality available only on a specific rendering engines (e.g iphone web-apps, android web-apps, etc.) Many people, notoriously <a href="http://forabeautifulweb.com/blog/about/you8217re_living_in_a_fantasy_world/" title="You&#8217;re living in a fantasy world | For A Beautiful Web">Andy Clarke</a>, support using vendor-specific extensions as much as possible without mentioning the caveats.</p>

<h3>When should you use vendor-specific extensions? </h3>
<ul>
	<li><p><strong>If your website is ONLY rendered on a specific browser</strong></p>
	<p>This is not surprising as there are lots of websites that are nothing more than iphone webapps, or those that sell Mac products (or those that support only IE or Opera Mini.) If your website is one of those, use vendor specific extension by all means (while being mindful of the caveat mentioned below.)</p></li>  
	<li><p><strong>If you have access to your website continuously throughout its existence</strong></p>
	<p>The disadvantage of using vendor-specific extensions is that they can be deprecated or their usage can change significantly on the whim of the vendor (I am using "whim" loosely). So, you need to be able to access the website you are using it on, continuously so that you can update it if that occurs.</p></li>
<li>
<p><strong>If it creates subtle enhancements in a browser without significant loss of usability/accessibility in other browsers.</strong></p>
<p>For example, <code>-border-radius</code> is a popular vendor-specific extension, and by not using it, there is not a significant loss to readers of your website. In contrast, <code>-multiple-column-width</code>, when not supported, will render your text in only one column which might hinder usability of the website on browsers that do not support that extension.</p>	
</li>	                                                      
<li><p><strong>If it is being discussed to be supported in future versions of CSS.</strong></p>
<p>Use vendor-specific extensions only if the property exists in a W3C Recommendation or a Working Draft as a supported property (though not necessary if your website needs to work on only one browser). </p></li> 
</ul>                          

<p>For graceful degradation, you can use <a href="http://www.modernizr.com/" title="Modernizr">Modernizr</a> which outputs a list of supported properties as multiple classes on the body element. You can then use these class selectors and declare vendor-specific extensions for them in your CSS file. </p>
     
<p>There is a <a href="http://lists.w3.org/Archives/Public/www-style/2009Dec/0130.html" title="Feature queries from fantasai on 2009-12-09 (www-style@w3.org from December 2009)">debate on the W3C mailing list</a> on detecting support for a property without using JavaScript detection like Modernizr. But, I think it is a long way away from being included in any W3C Working Draft.</p> 
