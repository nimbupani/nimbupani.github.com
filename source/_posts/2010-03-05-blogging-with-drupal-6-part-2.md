--- 
layout: post
title: Blogging with Drupal 6 - Part 2
created: 1267801468
category: "Web Development"
---
<p>In the first post of this series I <a href="http://nimbupani.com/blogging-with-drupal-6-part-1.html">covered migrating and backing up content in Drupal 6</a>. Today it will be Drupal 6 modules.</p>

<p>Drupal is most efficient and maintainable without any optional modules. But, alas, we need modules to get a blog running smoothly. There are <a href="http://drupal.org/project/Modules">hundreds of modules available for Drupal</a>, which makes it tempting to install anything that seems interesting. Cure yourself of that temptation. Do not install a module unless absolutely necessary, and turn on caching.</p>                

<p>I have been burned enough times that I always consider these two questions before even attempting to try one:</p>

<ol><li><h4>Will they be available for future Drupal versions?</h4><p>Drupal releases a new version with slightly different codebase every year (at least), and it is always recommended that you upgrade. Sometimes, the modules you have installed in your existing version of Drupal will not be available for the new versions, which makes us think twice about upgrading.</p><p>My rule of thumb is to always find modules that will be available at least for the upcoming Drupal version.</p></li>

<li><h4>Do they contain security vulnerabilities?</h4> <p>There are hundreds of modules and many of them use insecure code, which might make your site vulnerable to security exploits.</p></li></ol>  
<p>Here are some ways to find answers for these questions:</p>
<ul><li>Use <a href="http://drupal.org/project/usage">popular Drupal modules</a> only (warning page might take a long time to load). If a module is popular, it is more likely to be supported in the future versions. </li>
<li>Use modules that pledge support for Drupal 7. Modules that have "#D7CX" should be releasing a version for Drupal 7 when a stable version of Drupal 7 is released. </li> 
<li>Use modules that have history (modules that have been in existence for at least 3 Drupal releases). You can check that from the earliest version number that is available for download.</li>
<li>Use only stable releases for the module on your live site, if this is not possible, test out the unstable releases (alpha, beta versions) on your staging server before using them on your site.</li>
</ul>   

<p>There will always be something that is not available as a module, in which case, you can either <a href="http://drupal.org/node/51169" title="Hiring a Drupal site developer | drupal.org">hire someone to create a module for you</a>, or drop that idea and look for something else.</p> 

<p>With all these caveats, here are some of the Drupal 6 modules that are useful for blogging:</p>

<h3>Basic</h3>

<ul><li><h4>Poormanscron</h4>
If you have no idea what a cron means or how to set it up (or cannot set it up due to host restrictions), this module is for you. <a href="http://drupal.org/project/poormanscron">Download</a>
</li>
<li><h4>Views</h4>
The new Views is a bit intimidating at first. Be careful not to include your Views tables when exporting your Drupal 5 database. 
Drupal 6 views has a lot of default views available (much more than in Drupal 5), including the one that bloggers most covet—monthly archives. <a href="http://drupal.org/project/views">Download</a></li>
<li><h4>Google Analytics</h4>
You can always simply set up Google Analytics in the footer of your template, but this module does two additional things:

<ul><li>Cache Tracking Code file locally: So, that is one less page request for your page. </li>

<li>Track Internal Search: If you are using Drupal's Search form on your site, this module will also track that and report to Google Analytics.</li></ul> 

<a href="http://drupal.org/project/google_analytics">Download</a></li>
</ul>

<h3>Feedburner</h3>
<p>Feedburner gives a universal RSS feed URL. Subscribers to your feedburner feed will not have to do anything if you move your CMS from Wordpress to Drupal or even to another domain (previously, they would have to manually subscribe from your new website). </p><p>This module returns Feedburner URLs instead of the standard Drupal feed URLs in all places where your Drupal feed URLs are referenced. I use this to return Feedburner links to my subcategories too, like <a href="http://feeds.feedburner.com/nimbu">Web Design</a> and <a href="http://feeds.feedburner.com/nimbu-books">Book Reviews</a>. Of course, there is always the danger of Feedburner going down, but I think this service is worth that risk. <a href="http://drupal.org/project/feedburner">Download</a></p>
 
<h3>SEO</h3>
<p>The following modules make it easy for Search Engines and Search Engine users to find content on your site.</p>

<ul>
	<li><h4>Path Auto</h4>
	<p>Drupal has a default URL for each node which looks like "/node/35".  This module creates an alias (e.g. "blog/new-post.html") for a default URL based on some keywords, date, title, category, etc.</p><p> If you have used path auto in Drupal 5, continue with same settings. If you are converting to Drupal from another CMS, and want to retain your URLs, Path Auto has enough variables to continue generating the URLs you had.</p> </li>	
	<li><h4>Global Redirect</h4>
	<p>Path Auto only creates another URL which will point to the same content as the default URL. This poses a problem as Search Engines can index both these URLs as two separate web pages. Someone might link using the default URL instead of the URL you have specified in Path Auto. Ihis is easily prevented by using Global Redirect Module. This module detects if an alias exists, and if so, permanently redirects the incoming URL to the alias. This way, Search Engines will make note of the new location for the default URL, and any incoming URL will also be redirect to the correct alias. <a href="http://drupal.org/project/pathauto">Download</a></p>
	</li>
	<li>
		<h4>Nodewords</h4>
		<p>This is quite useful in clearly stating what your post is about for Search Engine users. Nodewords also lets you use the abstract instead of typing in custom description for each post. <a href="http://drupal.org/project/nodewords">Download</a></p>		
	</li>                                                                  
	<li><h4>Search 404</h4>
	<p>If you used descriptive URLs before and do not think those need to be 301 redirected. I used to be on Movable Type in 2003, and I still get hits for URLs formed by Movable Type. This module is supposed to extract keywords from the URL and do a search for it and render the search results instead of a typical 404 page. It does not work as advertised for me, but hopefully you will have better luck. <a href="http://drupal.org/project/search404">Download</a></p>
	</li>	
</ul>

<h3>Comments</h3>
<ul>
	 <li><h4>Comment Closer</h4><p>For the life of me, I cannot get it to work on my site. But it is supposed to close comments on posts that are older than a specified time period. Most comment spam hit older posts and this is a good way to stop them. <a href="http://drupal.org/project/commentcloser">Download</a></p>
	</li>                         
	<li><h4>Comment Notify</h4>
	<p>The little checkbox that asks you if you want to subscribe to follow-up comments on this blog post is available thanks to this module. <a href="http://drupal.org/project/comment_notify">Download</a></p></li>
	<li><h4>Gravatar</h4>
	<p>If you want to display of the avatars of people who leave comments, this is a good module. While it is advertised to work only for authenticated users, it works very well for anonymous ones too. <a href="http://drupal.org/project/gravatar">Download</a></p>
 </li>
<li><h4>Mollom</h4>
<p>Mollom makes it really hard to comment (I am consoling myself that this is why I don't get any on my site!), but is an effective deterrent to comment spam. <a href="http://drupal.org/project/mollom">Download</a></p>
</li>
<li><h4>widgEditor</h4>
<p>I cannot think of any reason why any other WYSIWYG editor needs to be in existence. <a href="http://drupal.org/project/widgeditor">Download</a></p>
</li>
</ul>
<h3>Maintenance</h3>

<p>No CMS is maintenance free. Here are somethings you can do, to ensure your site runs smoothly:</p>

<ul>
	<li><h4>Turn on updates</h4><p>You need to turn on the Update Status module at <code>/admin/modules</code>. A list of updates available will be at <code>/admin/reports/updates</code>. You can also set it to email you when an update is ready for Drupal core or installed modules. Typically there are updates at least every 2 months.</p> </li>

	<li><h4>Backup</h4> <p>Backup and Migrate module backs up your database on a predetermined schedule. The trouble is it backs up to the same space where your Drupal files are located which defeats the purpose of a backup. If you have a desktop machine at home that is on most of the day, you can schedule a cron job that grabs the backed up database and saves it locally on your machine (which you are hopefully backing up!) <a href="http://drupal.org/project/backup_migrate">Download</a></p></li>	
</ul>

<p>That&rsquo;s it! Do you have any good Drupal 6 modules that you have found useful for blogging?</p>
