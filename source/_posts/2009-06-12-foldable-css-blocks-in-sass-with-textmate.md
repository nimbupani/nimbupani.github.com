--- 
layout: post
title: Foldable CSS blocks in SASS with Textmate
created: 1244871865
category: "Web Development"
---
<p>I recently started using <a href="http://haml.hamptoncatlin.com/docs/rdoc/classes/Sass.html">SASS</a> for my CSS development (thanks to <a href="http://deepak.jois.name">Deepak</a>). SASS is a meta-language that makes developing CSS really easy - provided you master the syntax. There is a very good <a href="http://github.com/chriseppstein/sass-textmate-bundle/tree/master">textmate bundle</a> which makes it really simple to use on a mac. I will write more about how it has proven useful, but this post is to resolve a problem of developing CSS with SASS.</p>
<p>SASS identifies child selectors using indentation. For example:</p>
<pre>
	#parent
		:font-weight bold
		
		#child
			:font-weight normal				
</pre>

would translate into CSS as:

<pre>
	#parent { font-weight:bold; }
	#parent #child { font-weight:normal;}
</pre>

<p>When I have about 10 child (or sub-child) elements within each parent, tracking down the parent can become tricky. This is where folding CSS groups come in handy:</p>
<img src="/blog/files/sass-folded.png" alt="Folded CSS Group in action" />
<h3>How did I do it?</h3>
<p>First, I found this post on creating <a href="http://css-tricks.com/forums/viewtopic.php?f=8&t=2783&p=13197">foldable CSS groups in textmate</a></p>
<p>Here are the steps:</p>
<ul>
	<li>Go to Bundles>Bundle Editor>Edit Languages.</li>
	<li>Select the SASS > SASS file on the left column.</li>
	<li>Now you should see the language grammar file for SASS, starting with the line &ldquo;{ scopeName = "source.css"&rdquo;
	find the line &ldquo;foldingStartMarker = " (line 4)</li>
	<li>Edit it to:<br/>
		<pre>
 foldingStartMarker = '// START |^#|^\*|^\b|^\.';
		</pre>
	</li>
	<li>Edit the foldingEndMarker to:<br/>
		<pre>
 foldingStopMarker = '// END |^#|^\*|^\b|^\.';
		</pre>
	</li>
</ul>
<p>Tada! Your folding groups are ready! But it is not easy to type in &ldquo;// START&rdquo; and &ldquo;// END&rdquo; every time. So, you can create a snippet to automate it for you:</p>
<ul>
	<li>Go to Bundles>Bundle Editor>Edit Snippets...</li>
	<li>Select SASS in the left column and click on the &ldquo;+&rdquo; icon at the bottom of the left column. Name it as you like. </li>
	<li>Put this snippet on the right column with the snippet name, you created in the previous step, selected.<br/>
		<pre>
	// START ${1:name}
	${0:$TM_SELECTED_TEXT}
	// END ${1:name}			
		</pre>
	</li>
	<li>Finally, assign a shortcut (Activation Trigger) that you can type and press tab so that you get access to the above (I used the characters &ldquo;fld&rdquo;).</li>	
</ul>
<p>I have created an issue to add this to the sass-textmate-bundle on Github. <a href="http://github.com/seaofclouds/sass-textmate-bundle/issues#issue/2">Please vote for it, if you would like to see this feature in the bundle.</a></p>
<p>Thanks to <a href="http://twitter.com/chriseppstein">Chris Eppstein</a> for nudging me to blog about it!</p>
