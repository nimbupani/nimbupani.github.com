--- 
layout: post
title: Theme nodes with closed comments in Drupal 6
created: 1263160013
category: "Web Development"
---
<p>I use <a href="http://drupal.org/project/commentcloser">Comment Closer</a> to close comments on old posts to reduce spam on my blog. I wanted visitors to know immediately if a post was no longer accepting comments, and give them alternative means of contacting me about the post. You can see it in action in these two old posts: <a href="http://nimbupani.com/is-the-future-of-communication-twitter.html">post with comments</a>, <a href="http://nimbupani.com/my-first-entry-to-css-gallery-site.html">post with no comment</a>. Here is how I did this in Drupal 6:</p>
<ul>
	<li>
 	 <h3>Posts with no comment</h3>
		<p>Use the following in <code>node.tpl.php</code> file in your Drupal theme: </p> 
<pre><code>
&lt;?php if (($page != 0) &amp;&amp; isset($node-&gt;comment_count) &amp;&amp; $node-&gt;comment_count &lt; 1) { ?&gt;	
	&lt;?php if($node-&gt;comment == 0 || $node-&gt;comment == 1) { ?&gt;
	// Enter HTML content you want to render for posts
	// that are closed with no comment.
	&lt;?php else { ?&gt;
	// Enter HTML content you want to render for posts
	// that are open for new comments but have none.
	&lt;?php } 
} ?&gt; </code></pre> 	
	</li> 
	<li>
		<h3>Posts with comments</h3>
		<p>In <code>comment-wrapper.tpl.php</code>, use the following: </p>
		<pre><code>
&lt;?php if($node-&gt;comment == 0 || $node-&gt;comment == 1) { ?&gt;
	// Enter HTML content you want to render to inform the visitor
	// that new comments are no longer accepted.
&lt;?php } ?&gt;  </code></pre>
	</li>
</ul>  
<p>We need to edit both <code>comment-wrapper.tpl.php</code> and <code>node.tpl.php</code> as <code>comment-wrapper.tpl.php</code> (despite its name) will NOT be rendered if a node has no comments. </p>
