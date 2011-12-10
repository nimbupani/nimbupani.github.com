--- 
layout: post
title: Creating HTML 5 theme for Drupal 6
created: 1260983389
category: "Web Development"
---
<p>Since I <a href="/web-design.html">write</a> and <a href="http://twitter.com/nimbuin">tweet</a> about HTML5 Koolaid, it is only appropriate that my website also incorporates the new and improved semantic elements of HTML5. I also figured it would be the right time to upgrade to Drupal 6. </p> 
<p>Here is how you can create a theme which uses some of the new elements of HTML5. This is not the <em>only</em> way to do it, but simply my attempt at creating one. Please comment if you know of better ways to do it.</p>  

<h3>Caveats</h3>
<ul><li>The new elements of HTML5 will not render correctly in Firefox 2 and below (you can see how this website renders in Firefox 2 to see the true extent of devastation). Your best bet is to output a class to body element — use that to style the page — if Firefox 2 makes a request, <a href="http://chrisschuld.com/projects/browser-php-detecting-a-users-browser-from-php/" title="Browser.php &#8211; Detecting a user&#8217;s browser from PHP | Chris Schuld's Blog">using PHP Browser Detection</a> (this script will cause crazy results on all browsers, if you enable caching).</li>  
<li>You need <a href="http://remysharp.com/2009/01/07/html5-enabling-script/" title="HTML5 enabling script">Remy Sharp’s HTML 5 enabling script</a> so that IE can recognize new HTML5 elements and apply the CSS correctly.</li></ul>  

<p>Before you start creating a HTML5 Drupal theme, <a href="http://html5doctor.com/designing-a-blog-with-html5/" title="Designing a blog with html5 | HTML5 Doctor">read this post on creating a blog with HTML 5 markup</a>. That should give you all information you need on the markup. Then, start with an existing Drupal 6 theme that you want to convert to HTML5.</p> 

<p>These are the template files I modifed: </p>
<ul>
	<li><code>page.tpl.php</code> - I divided the content into <code>header</code>, <code>footer</code>, <code>section</code> elements. I also used <code>nav</code> to be the container for the <code>primary links</code></li>
	<li><p><code>node.tpl.php</code> - Each node is an <code>article</code>. This is also where you can use the <code>time</code> element to mention the published date of a node: </p>
		<pre>
<code>&lt;time pubdate=&quot;pubdate&quot; datetime =&quot;&lt;?php echo format_date($created,&#x27;custom&#x27;, &#x27;Y-m-d&#x27;); ?&gt;&quot;&gt;
	&lt;?php echo format_date($created,&#x27;small&#x27;) ?&gt;
&lt;/time&gt; </code>
		</pre>				
		</li>
	<li><code>search-result.tpl.php</code> - I am not sure if this is correct, but I have marked up each search result as an <code>article</code>. </li>
	<li><code>search-results.tpl.php</code> - If you need a <a href="http://html5doctor.com/the-section-element/">sectioning element</a> around the search results, this is where you should add it.</li>
	<li><code>comment.tpl.php</code> - I used <code>article</code> to markup each comment. I also used <code>time</code> to render the publication date of a comment:
<pre><code>&lt;time pubdate=&quot;pubdate&quot; datetime =&quot;&lt;?php 
 echo format_date($comment-&gt;timestamp, &#x27;custom&#x27;, &#x27;Y-m-d\TH:i:s&#x27;); 
 $tzone = variable_get(&#x27;date_default_timezone&#x27;); 
 printf(&#x27;%s%02d:%02d&#x27;, ($tzone &lt; 0 ? &#x27;-&#x27; : &#x27;+&#x27;), abs($tzone / 3600), abs($tzone % 3600) / 60);
?&gt;&quot;&gt;
&lt;?php echo format_date($comment-&gt;timestamp, &#x27;small&#x27;)?&gt;
&lt;/time&gt;</code></pre>	
</li>
	<li><code>comment-wrapper.tpl.php</code> - In my theme, all comments are contained within a <code>section</code> which can be specified in this file.</li>
	<li><code>box.tpl.php</code> - I used <code>article</code> as a container for the comment form. This template renders the container for that form.</li>
	<li>Own Module — I had to create a module to use <code>article</code> to wrap the Advanced Search Form. Here is the code I used in the module:
	<pre><code>//nimbupani is the name of the module       
function nimbupani_form_alter(&amp;$form, $form_state, $form_id) {   
  if($form_id == &#x27;search_form&#x27;) {
	$form[&#x27;advanced&#x27;][&#x27;#prefix&#x27;]=&quot;&lt;article&gt;&quot;;
	$form[&#x27;advanced&#x27;][&#x27;#suffix&#x27;]=&quot;&lt;/article&gt;&quot;;		
  }  
}</code>
	</pre>  
	</li>	
</ul>

<p>The api.drupal.org has a <a href="http://api.drupal.org/api/search/6/.tpl.php" title="Search for .tpl.php | Drupal API">full list of all themable template files available to you in Drupal 6</a> if your theme requires more customization. </p>
<p>You can use <a href="http://html5.validator.nu/" title="Validator.nu (X)HTML5 Validator">validator.nu</a> to test your pages. But be warned, the validator is known to lag behind the specification. So, you might get false negatives, if so, ignore them if you know you are confirming to the latest specification.</p>

<h3>Further Work</h3>
<p>This is just scratching the surface, you can also make all form elements to use HTML5 attributes, and also add <a href="http://www.marcozehe.de/2009/10/31/easy-aria-tip-4-landmarks/">ARIA landmarks</a>. These are my focus areas for the next update to my theme.</p>
<p>Meanwhile, if there is any element that is incorrectly used on this site, or if you have any suggestions on how to make the site better, do comment!</p>
 
