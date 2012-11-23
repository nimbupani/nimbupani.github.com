--- 
layout: post
title: Blogging with Drupal 6 - Part 1
created: 1267201727
category: "Web Development"
---
<p>As you might infer from <a href="http://snapbird.org/nimbuin/timeline/drupal">my tweets</a>, I have a love-hate relationship with Drupal. I want to document here what I gathered in my quest to move my blog to Drupal 6, to spare you some of the <span class="strike">back</span> path-breaking work.</p>

<p>I hope to cover what I learnt about Drupal 6 migration, modules, and design in 3 posts. I assume you have a blog running Drupal 5 and you know the meaning of a <a href="http://en.wikipedia.org/wiki/Web_server">Web Server</a> or a Database. </p> 

<p>In this post, I want to talk about setting up a staging server.  Bloggers are tempted to use their live sites to experiment with migrating or testing modules. You are most vulnerable when you do this, as you can even wipe out your entire database by installing a rogue module. </p>

<p>Hence, the most important thing you should do as a Drupal blogger is to set up a local staging server where you can test your migration to Drupal 6. Once you are satisfied, you need to repeat the same steps for migrating the live content to Drupal 6.</p>

<p>If you are looking to migrate from Wordpress or other CMS, here is <a href="http://drupal.org/handbook/migrating">how to migrate content</a>.</p>

<ul>
	<li><h3>Set up Staging Server</h3>
		<p>Before we begin the migration, we need to setup Drupal 6 on a Staging server. It would be best if your Staging server can reflect the server where your website is hosted as much as possible. Follow these <a href="http://drupal.org/getting-started/6/install/download">instructions to set up Drupal 6 on your machine</a>.</p></li>                                                            
	<li>
		<h3>Migrate Content to the Staging Server</h3>
		<ol>
			<li>This is the nasty bit. If you are importing from Drupal 5, you are in luck as <a href="http://drupal.org/project/backup_migrate">Backup and Migrate module</a>  can do the donkey work for you.
				<ol>
					<li>Install Backup and Migrate on your live site</li>					
					<li>Put your site in Off-line mode (Admin > settings > Site Maintenance)</li>					
					<li>Turn off clean URLs, disable optional modules (e.g. Views, Image, TinyMCE, etc.), and switch to a default theme. If your frontpage is a View (as mine was), set it to the default node.</li>
 			 <li>Go to the Admin settings for Backup and Migrate, and export your database as a downloadable file. </li> 							
			<li>Turn back on all the modules (make sure your settings are still correct), clean URLs and revert to your theme. Finally take your site back online. </li> 			
				</ol> 
				</li>
			<li><a href="http://codex.wordpress.org/Restoring_Your_Database_From_Backup">Import the database from the above step</a> into your local Database Management System (usually MySQL). 
			</li> 
			<li>Open the Drupal 6 <code>update.php</code> in a browser to upgrade the imported database.</li>
		</ol> 		
	</li>  
	<li>
		<h3>Install Modules</h3> 		
		<p>The trick to have pain free upgrades is to depend as less as possible on external modules. Unfortunately, the curse of infinite modules almost always hits every Drupal Administrator. Recently Drupal has introduced a pledge system, which module maintainers use to declare their support for the upcoming Drupal release. But, it is still not a good solution.</p>
		<p>To look at it positively, it gives you opportunity to fine-tune the user experience on your site. If a module does not have a future release, it is most likely because of poor demand, which means you shouldn't be using it anyway. </p>
		<p>I will cover some of the interesting modules for blogging in my next post. </p>
	</li>
	<li>
		<h3>Update Theme</h3>
		<p>There are <a href="http://drupal.org/project/themes?filters=drupal_core:87&amp;solrsort=sis_project_release_usage%20desc" title="Themes | drupal.org">several themes available for Drupal 6</a>, which you can use immediately. I hope to cover some of the pitfalls of writing a theme for Drupal 6 in a future post in this series.</p>		
	</li>
	<li>
		<h3>Test Local Staging</h3>
		<p>Use this opportunity to test your <a href="http://en.wikipedia.org/wiki/Rewrite_engine">URL Rewrites</a> <strong>if</strong> your local staging uses the same web server as your host. If this move involves moving your blog from a sub-folder to the main directory (like mine did), it helps to write and test URL Rewrites on this local staging server. </p>
		<p>If you are moving from another CMS system to Drupal, you should ensure the paths redirect seamlessly or are retained. Two modules that can help you here are <a href="http://drupal.org/project/pathauto">Path Auto</a> and <a href="http://drupal.org/project/globalredirect">Global Redirect</a>.</p>
	</li>                                                  
	<li><h3>Migrate the live site</h3><p>Practise, practise, practice. Typically you might not have caching systems to handle your blog downtime, so make sure you are well-versed in the migration process (all the above steps) so that you can do them with the least downtime possible. I repeated all the steps above six or seven times on my local staging server, before I found the courage to do it on my live site.</p>
		<p>It still took me two hours.</p></li>
	<li>
		<h3>Backup Regularly</h3>
		<p><a href="http://news.ycombinator.com/item?id=990323">Coding Horror's catastrophic failure</a> just underscores how you need to take up backup in your hands and not simply trust your hosting provider.</p>
		<p>With Drupal 6, Backup and Migrate Module can be used to schedule regular backup of your Drupal database. Unfortunately you can only backup to a location that hosts your Drupal files. You should download these files every day/week (depending on how frequently you update the site), so that you are truly safe from catastrophic failure (and back up your local machine!)</p>
		<p>If you like tinkering with the site theme as I do, you should use a <a href="http://en.wikipedia.org/wiki/Revision_control" title="Revision control - Wikipedia, the free encyclopedia">Versioning System</a> so that you can go back to changes done in case you don't like your latest update. You can put the site files on your local staging server in version control, but your hosting provider will typically not provide that facility for your use (which means you may have to update the live site manually).</p>
	<p>There is a reason for this backup madness, which is to be prepared when disaster strikes. Of course, this is assuming you care enough about your blog, if you didn't, you won't be reading this anyway!</p>
	</li>
</ul>
<p>In the next post, I will cover some of the modules I have found useful in Drupal 6, and talk about modules I had to lose from Drupal 5 and how I coped with that loss.</p>
