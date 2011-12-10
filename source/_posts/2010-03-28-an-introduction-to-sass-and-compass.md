--- 
layout: post
title: An Introduction to Sass and Compass
created: 1269800407
category: "Web Development"
---
<p><em>This is paraphrased from my presentation at <a href="http://refreshseattle.org">Refresh Seattle</a> on March 25th. You can <a href="/refresh-seattle/">view the presentation</a> or download the <a href="http://github.com/nimbupani/refresh-seattle/">slides from Github</a>.</em></p> 

<p>I stumbled onto Sass last January, when I was struggling with  large style sheets of several websites in various states of development.</p> 

<p>I work on large, high-traffic websites mostly and maintain at least 10 such sites at any given time. A website that I have not worked on for 2 years or more would suddenly require updates, and I would have to re-learn (what I consider) atrocious coding practices of my old self. Sometimes, these websites acquire new designs based on seasonal promotions. It did not help that most of these websites had more than 5000 lines of CSS.</p>

<p>I started looking for solutions to my CSS maintenance woes. I briefly considered <a href="http://en.wikipedia.org/wiki/CSS_framework">CSS frameworks</a>, but these dump a set of properties irrespective of their usage. I also looked at <a href="http://lesscss.org/">LessCSS</a> whose every-rule-is-a-reusable-snippet looked like an even worse maintenance nightmare. Sass looked most promising. I took a chance and am glad to have done so. </p>

<p>Sass stands for Syntactically Awesome Stylesheets. It is written in ruby and has command line tools to convert Sass to CSS, or CSS to Sass. It also includes a “watch” utility that watches a certain folder which contains the Sass files for any changes and automatically compiles updated Sass files to their respective CSS files. </p>

<p>Sass has a different syntax as compared to CSS. Here is a sample Sass file:</p>
<pre>!bordercolor = #000
div.content
  border = 1px "solid" !bordercolor
  h2
     padding: 1px</pre>

<p>This is how the generated CSS looks:</p>

<pre><code>div.content { border: 1px solid #000; }
div.content h2 { padding: 1px; }</code></pre>

<p>Sass is not white-space agnostic, and you need to be careful with the indentation as that decides which parent selector the child selector belongs to. If you would like to learn how to use this in detail, head over to the <a href="http://sass-lang.com/tutorial.html">Official Sass tutorial</a>.</p>

<p>Sass has lots of features, most of which can be found in <a href="http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html">the  reference documentation</a>. My favourite elements of Sass are: <a href="http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#mixins">Mixins</a>, <a href="http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#variables_">Variables</a>, <a href="http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#sass_comments_">Sass comments</a>, <a href="http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#import">@import directive</a>, <a href="http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#functions">Functions</a>, <a href="http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#control_directives">If/For/While directives</a>, and <a href="http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#output_style">Output Style formatting</a>.  Several more are undocumented, or are better explained in the <a href="http://groups.google.com/group/haml">mailing list</a>.</p>

<p><a href="http://compass-style.org">Compass</a> is a framework built on Sass that makes it easier to use it stand alone on non-ruby projects. Several features that have made into the latest releases of Sass were first created in Compass by <a href="http://chriseppstein.github.com/">Chris Eppstein</a>. Compass makes available many <a href="http://wiki.github.com/chriseppstein/compass/supported-frameworks">CSS Frameworks</a> like Blueprint, YUI, and <a href="http://oddbird.net/susy">Susy</a> for use in your Sass files. There is an <a href="http://wiki.github.com/chriseppstein/compass/">hour-long introduction to Compass</a> which is definitely worth your time if you are looking to use Sass/Compass in the long-term.</p>

<p>Recently, <a href="http://nex-3.com">Nathan Weizenbaum</a>, the maintainer of Sass, has released <a href="http://nex-3.com/posts/92-firesass-bridges-the-gap-between-sass-and-firebug">FireSass</a>, a firebug plugin that renders the line number and the Sass filename from which a selected HTML element gains its properties instead of the line number and the CSS filename. This makes debugging your stylesheet lot easier if you use Sass primarily.</p> 

<p>Nathan is also working on getting Sass 3 beta version out live. It will include a new format called <a href="http://groups.google.com/group/compass-users/browse_thread/thread/a935eda5b860a350">SCSS</a> which replicates the CSS syntax (like LessCSS).</p> 

<p>While Sass has a lot of tools, and is quite powerful, it is not necessary that you have to use it. I would recommend you use it only if you:</p>
<ul>
	<li>Have large CSS files that you intend to maintain over a long period of time (in which case, converting them to multiple Sass files is a good idea).
	</li>
	<li>Deal with several websites with markedly different style sheets but would like to create a common library of styles that you can invoke when necessary without writing additional code.</li>
	<li>Write CSS for a living.</li>
</ul>

<p>Sass is not <em>the</em> answer for your CSS ills. You still need to know how to write CSS and your Sass file can be a noodlesoup of unmaintainable nested selectors if you are not mindful. </p>

<p>If you use Textmate, there is a <a href="http://github.com/charlesr/ruby-sass-tmbundle">Ruby Sass Textmate bundle</a> to make it easier to type Sass syntax. There is also a <a href="http://github.com/dougochris/Compass.tmbundle">Compass bundle</a> that lets you look up mixins available in Compass. </p>
