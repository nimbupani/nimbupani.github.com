--- 
layout: post
title: Blogging with Drupal - Part 2
created: 1197194019
category: "Web Development"
---
<p>In the <a href="http://www.nimbupani.com/blog/blogging-with-drupal-part-1.html">first part</a>, we learned to setup comments, categories, and the basics for blogging with Drupal. Now we install the modules that make Drupal a powerful blogging tool.</p>
<h4>Extra Modules for Blogging Nirvana</h4>
<p><strong>URL: </strong> http://&lt; path to drupal website >/?q=admin/build/modules</p>
<p>Drupal's powers become manifold with its diverse modules. For blogging, these are the most important ones:</p>
<ul>
<li><a href="http://drupal.org/project/seo_checklist">SEO Checklist</a> - This is actually a checklist of modules you need to make your blog SEO Optimized. Install all the modules that this module suggests you to (the links to the modules are provided in the checklist). Specifically the <a href="http://drupal.org/project/pathauto">pathauto module</a> which allows you to customize urls for each type of content.</li>
<li><a href="http://drupal.org/project/views">Views</a> - Generate different sets of content. The most important use for this module is the ability to generate the list of popular blog entries. Of course, this module gives you an unlimited ability to arrange content in any way you would like. Read the <a href="http://drupal.org/handbook/modules/views">Views documentation</a> to understand its full power.</li>
<li>
<a href="http://drupal.org/project/image">Image</a> - Ability to upload images to your blog entries and create image galleries. <a href="http://drupal.org/handbook/modules/image">Learn about how to set up the Image module</a>
</li>
<li>	
<a href="http://drupal.org/project/commentmail">Comment Mail</a> - Sends you an email whenever anybody posts a comment on your blog. 
</li>
<li>
<a href="http://drupal.org/project/comment_notify">Comment Notify</a> - Allows comment writers on your blog to choose to receive follow up comments, by email, to the post they posted their comment on. They can disable receiving the comments in the link setup in the first email they receive.
</li>
<li>
<a href="http://drupal.org/project/poormanscron">Poormanscron</a> - Runs Drupal's cron operations (which are required for your search functionality to function properly, for one). 
</li>
<li>
<a href="http://drupal.org/project/print">Print</a> - Adds a "Printer Friendly Version" link to your blog entries. Settings include if you want the user's printer to be launched when it is clicked, uploading your own print <abbr title="Cascading Style Sheets">CSS</abbr> to format how the blog entries should look like when printed, etc. Another powerful setting here is that it allows for the linked urls in your blog entry (which do not show generally) to be collated and listed at the bottom of each printed page. Click on <a href="http://www.nimbupani.com/blog/print/node/564">Printer-friendly version</a> for this entry to check out how it works. 
</li>
<li>
	<a href="http://drupal.org/project/relatedlinks">Related Links</a> - Below this entry, you can see a collection of blog entries that are related to it. This is enabled by this module. You can set the Related Links manually or have it be generated automatically by matching the categories to which the entry belongs. 
</li>
<li><a href="http://drupal.org/project/tagadelic">Tagadelic</a> - Displays your categories with varying font sizes according to how often they get used.</li>
<li><a href="http://drupal.org/project/month">Monthly Archive</a> - Displays monthly archives of blog posts. Thanks to <a href="http://www.proxiss.de/">Rainer</a> for the prodding!</li>
<li>
<a href="http://drupal.org/project/typogrify">Typogrify</a> - Makes your text typographically refined. 
</li>
<li>
<a href="http://drupal.org/project/codefilter">Code Filter</a> (Optional) - If you would be posting bits of code on your blog, then this module is for you. 
</li>
<li>
	<a href="http://drupal.org/project/widgeditor">Widgeditor</a> - A <abbr title="What You See Is What You Get">WYSIWYG</abbr> editor for your blog entry. Its light and uses <a href="http://jquery.com">jQuery</a> (comes bundled with Drupal 5). You can choose to enable it for even the comment submission forms. 
</li>
<li>
	<a href="http://drupal.org/project/spam">Spam</a> - While forcing comments to be previewed before getting published, pushes back most of the spammers. You might want to install this powerful spam detection and elimination module to completely eliminate spam. 
</li>
<li>
	<a href="http://drupal.org/project/gotcha">Gotcha</a> - This captures the spam that you could receive from your Contact Page. Requires the Spam module mentioned above.
</li>
</ul>
<h4>Alternate Ways of Posting to your Site</h4>
<p><strong>URL: </strong> http://&lt; path_to_drupal_website >/?q=admin/settings/blogapi</p>
<p>Firefox has a popular blogging extension called <a href="http://www.scribefire.com/">ScribeFire</a> (previously called Performancing). With the Drupal Blog API, you can set up Scribe Fire to post blog entries to your blog using scribe fire. The limitation being, if you have free tagging, you cant use it (rather need to select from the list available and not create a category newly) and you cant schedule your posts. Of course, you can’t use the <a href="http://drupal.org/project/scheduler">Drupal Scheduler Module</a> too.</p>
<p>Click on "Manually Configure" to add your Drupal blog to Scribefire, and in the field where you enter the <strong>Server API URL</strong>, enter http://&lt; path to your drupal website >/xmlrpc.php.</p>
<p>For other editors, check out <a href="http://drupal.org/node/6269">Alternative Ways to Enter Content</a></p>
<p>If you would like to submit your blog posts by email, then check out the <a href="http://drupal.org/project/mailhandler">Mailhandler</a> module.</p>
<h4>Learn more about Drupal</h4>
<ul>
	<li><a href="http://www.minezone.org/blog/2007/11/01/45-screencasts-to-get-you-kicking-ass-with-drupal/">45 Screencasts to Get You Kicking Ass with Drupal</a></li>
	<li><a href="http://www.drupalbook.com/">Pro Drupal Development - the book</a></li>
	<li><a href="http://mashable.com/2007/10/04/drupal-3-column-themes/">20 Great 3-column Drupal Themes</a></li>
	<li><a href="http://baheyeldin.com/technology/drupal/resources-for-using-google-adsense-with-drupal.html">Resources for using Google Adsense with Drupal</a></li>
	<li><a href="http://mydrupalblog.lhmdesign.com/topic/drupal-theming">My Drupal Blog</a> (basics of theming), <a href="http://www.nicklewis.org/technology/drupal-and-civicspace/drupal-tutorials">Nick Lewis: The Blog</a> (advanced topics of theming).</li>
	<li><a href="http://www.whydrupal.com/">Why Drupal Blog</a> and <a href="http://theartlab.net/podcast/drupal-school">Drupal School (no longer updated)</a>, covers some basic but useful information on Drupal</li>
	<li><a href="http://www.kentbye.com/files/drupal_modules_all.html">A list of ALL Drupal modules as of 9th Nov 07.</a></li>
</ul>

