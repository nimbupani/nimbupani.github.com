--- 
layout: post
title: Blogging with Drupal - Part 1
created: 1197123310
category: "Web Development"
---
Drupal is a Content Management System - which means blogging is just a small cog of the big wheel of Drupal. This does make Drupal harder to use for blogging (as compared to <a href="http://wordpress.org/">Wordpress</a>), but with these modules and settings Drupal can be a very good blog workhorse. In fact, it runs this blog too! 
<h3>Install Drupal</h3>
Download and set up Drupal 5.0 while following the <a href="http://drupal.org/getting-started/5">installation instructions</a>. 
<h3>Change Settings</h3>
Change the settings of Drupal by logging in to your administrative dashboard (http://&lt; path to drupal website >/?q=admin).	
<h3>Take the site offline</h3>
<p><strong>URL:</strong> http://&lt; path to drupal website >/?q=admin/settings/site-maintenance</p>
<p>When people are visiting your site, instead of being shown an incomplete and an under construction site, you can take your site offline, this means only the admin can have access to the site and the site will not be visible to anyone else. We will come back to this page once we are done with all the set ups.</p>
<h3>Site Information</h3>
<p><strong>URL:</strong> http://&lt; path to drupal website >/?q=admin/settings/site-information</p>
<p> Change the site name, slogan, mission etc. These can be made to appear on your blog based on the theme you select.
</p>
<p>Also set the <strong>default front page</strong> to "blog/1" so that your blog becomes the index page.</p>	
<h3>Administration Theme</h3>
<p><strong>URL:</strong> http://&lt; path to drupal website >/?q=admin/settings/admin</p>
<p>Change the administration theme to one of <strong>Garland</strong>. It is a robust theme that works with any kind of Drupal administrative interface. This means whenever you visit the admin section of your site, the site will be styled like this theme.</p>
<h3>Install a blog theme</h3>
<p><strong>URL:</strong> http://&lt; path to drupal website >/?q=admin/build/themes</p>
<p>Download a theme from <a href="http://drupal.org/project/Themes">Drupal.org Themes page</a> and upload it to the "themes" folder of your Drupal installation. You can preview themes at the <a href="http://themegarden.org/drupal50/">Drupal Themes Garden page</a> - it is like <a href="http://csszengarden">CSS Zen Garden</a>, but for Drupal themes (and a lot more clunky!). 
</p>
<p>Once you have uploaded the theme, go to the URL mentioned above and select the theme you have uploaded and make that your default theme. Remember, your theme will not be applied to your blog unless you set it as "default" theme.</p>
<h3>Confirm Modules are Running</h3>
<p><strong>URL: </strong> http://&lt; path to drupal website >/?q=admin/build/modules</p>
<p>Make sure the following modules are selected:</p>
<ul>
	<li>Blog</li>
	<li>Blog API</li>
	<li>Comment</li>
	<li>Contact</li>		
	<li>Path</li>
	<li>Menu</li>
	<li>Search</li>
	<li>Statistics</li>
	<li>Taxonomy</li>
</ul>
<p>We will come back to this page in <a href="http://www.nimbupani.com/blog/blogging-with-drupal-part-2.html">part 2</a> to install other modules, once the basic setup is done.</p>
<h3>Settings for your blog</h3>
<p><strong>URL: </strong> http://&lt; path to drupal website >/?q=admin/content/types/blog</p>
<p>You can set in this page whether you want to enable or disable comments for your blog entries.</p>
<p><strong>URL: </strong> http://&lt; path to drupal website >/?q=admin/content/node-settings</p>
<p>Set the number of blog posts you want to be displayed and the length of excerpts for each blog post to be displayed. By default it displays 10 blog posts on the front page and an except that is 600 characters long (you can set it to "unlimited" which effectively displays the whole post).</p>
<h3>Settings for Comments</h3>
<p><strong>URL: </strong> http://&lt; path to drupal website >/?q=admin/content/comment/settings</p>
<p>This is where you setup comments to minimize spam (or remove spam altogether for most bloggers!). In the <strong>Posting Settings</strong>, make sure "Anonymous posters must leave their contact information" is selected, "Preview Commenting" is set to "required". You can also set where you want the comment submission form to be displayed, and how you want the comments to be displayed. </p>
<h3>Setting up Menus</h3>
<p><strong>URL: </strong> http://&lt; path to drupal website >/?q=admin/build/menu</p>
<p>If you would like to put links to other sites, or your contact page, this is the place to create them. Read up on <a href="http://drupal.org/handbook/modules/menu">how to setup and administer menus</a></p>
<h3>Setting up your Contact Page</h3>
<p><strong>URL: </strong> http://&lt; path to drupal website >/?q=admin/build/menu</p>
<p>First, go to http://&lt; path to drupal website >/?q=admin/build/contact/add and add a category for your contact form. Then, click on "Settings" to set what should be shown above the form and set a threshold on how many times the same person can ping you (to prevent spam).</p>
<h3>Setup Categories</h3>
<p><strong>URL: </strong> http://&lt; path to drupal website >/?q=admin/content/comment/settings</p>	
<p>If you have imported your blog from elsewhere, you will already see a "vocabulary". Otherwise, click on "Add Vocabulary", to start creating a container for your blog categories. Even if your "vocabulary" is setup, you can look at the following screenshot, to make your categories behave like tags. If you don’t want your categories like that, just uncheck "Free tagging", and set the hierarchy to "Single/Multiple".</p>
<p> <img src="http://nimbupani.com/blog/files/drupal_category.gif" alt="Drupal Category Configuration" title="Drupal Category Configuration" />
</p>
<p><strong>URL: </strong> http://&lt; path to drupal website >/?q=admin/content/taxonomy</p>		
<p>If you need to add categories, click on "add terms" next to the "vocabulary" that has been setup for your blog in the previous step. If you have set up your vocabulary as "free tagging", then you can create these categories on the fly when you are typing your blog post.</p>	
<p>The intention of this is to show the categories listed in the sidebar, which we will be covering in <a href="http://www.nimbupani.com/blog/blogging-with-drupal-part-2.html">part 2</a>.</p>
<h3>Setup Menus</h3>
<p><strong>URL: </strong> http://&lt; path to drupal website >/?q=admin/build/menu</p>	
<p>Apart from your usual links to posts belonging to certain categories, you would also like to have links to other pages (e.h. contact page) or other websites you like. You can set all of them up in a menu. A menu is a set of links. Once you set up a menu, you can display them as <strong>blocks</strong> (covered below)</p>
<h3>Setup Blocks</h3>
<p><strong>URL: </strong> http://&lt; path to drupal website >/?q=admin/build/block</p>	
<p>Blocks are sets of content in the sidebars of your blog. An example of a block would be a menu list of websites you visit daily. You can select which blocks you want displayed and choose where (left/right sidebar) here. </p>
<p><strong>URL: </strong> http://&lt; path to drupal website >/?q=admin/build/block/add</p>
<p>You can add blocks to your blog (e.g. you want to add your <a href="http://twitter.com/badges/html">twitter widget</a> or Feedburner chicklets). Drupal website has a <a href="http://drupal.org/node/21867">set of snippets you can use to create new blocks</a>.</p>
<p>There ends the first part, we have learned to customize the basics of a Drupal install for blogging, and in <a href="http://www.nimbupani.com/blog/blogging-with-drupal-part-2.html">part 2</a> we shall cover some kick-ass Drupal modules that make blogging with Drupal a breeze. </p>
