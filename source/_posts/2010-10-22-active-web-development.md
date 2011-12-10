--- 
layout: post
title: Active Web Development
created: 1287817001
category: "Web Development"
---
<p>I recently <a href="http://south10.webdirections.org/program/w3c#active-web-development">gave a talk at Sydney's Web Directions South</a> on being more active as a web developer. These are the slides:</p>
<div style="width:425px" id="__ss_5438688"><object id="__sse5438688" width="425" height="355"><param name="movie" value="http://static.slidesharecdn.com/swf/ssplayer2.swf?doc=presentation-101013215252-phpapp01&stripped_title=active-web-development&userName=nimbupani" /><param name="allowFullScreen" value="true"/><param name="allowScriptAccess" value="always"/><embed name="__sse5438688" src="http://static.slidesharecdn.com/swf/ssplayer2.swf?doc=presentation-101013215252-phpapp01&stripped_title=active-web-development&userName=nimbupani" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="425" height="355"></embed></object></div><p><em>Update:</em> The audio for <a href="http://www.webdirections.org/resources/divya-manian-active-web-development/">this talk</a> is now available <a href="http://webdirections.org/podcasts/WD10/wds10-Divya-Manian.mp3">here.</a></a>
<p>This talk came about from an article I wrote for WebStyleMag called <a href="http://webstylemag.com/web-development-with-curiosity">Web Development with Curiosity.</a></p>
<p>It is also a personal story. In 2003, I discovered creating websites with CSS and HTML. It was a great time of exploration but it did not last long. In 2008, I was frustrated and bored with web development as I thought I knew all that was to know at that time.</p> 
<p>Luckily for me, the <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/">first draft of HTML5</a> was released in 2008, and while reading it, I thought it would be a good idea to do an objective assessment of what I knew and how glad I am that I did that! </p>
<p>I opened one of my recent projects and started reading the code, to make sure I understood every code I wrote. I stumbled on the very first line: Why was I using a doctype? </p>
<p>In 2008, I did not have an answer! I also did not know why I was using XHTML doctype either. I knew there was a good reason to do so, but did not know exactly why. As you can tell, my confidence in my abilities burst like a balloon.</p> 
<p>How did it happen that someone who learnt about web development in 2003 so quickly lost that knowledge? There were several reasons, but the main one being Outsourced Learning. It works this way: </p>
<p>I wake up in the morning, do my morning rituals, and then start reading articles from websites I track for web development. Stop to skim through an interesting article and bookmark it on <a href="http://delicious.com/nimbupani">delicious</a>. Those bookmarks remain there, never to be used again. When time comes for their use, instead of looking into my bookmarks, I look for a solution on Google and use whatever comes up first (irrespective of how robust that solution is).</p> 
<p>This is <em>Outsourced Learning</em> because, at best what I can do with this information is to gossip about latest techniques and demos that I come across. It does not give me any insight and expertise that I would get by practicing the technology.</p> 
<p>I was under the illusion that by outsourcing my learning I was somehow still learning. But, as my assessment showed, I clearly wasn't.</p> 
<p>How can we make sure that we continue to learn instead of using stale knowledge? In the last 2 years, these two have worked for me:</p>
<ul><li>Create a Constitution</li> 
<li>Creating Learning Rituals</li></ul>
<h3>Constitution</h3>
<p>By constitution I mean creating a support chart like so:</p>
<table>
  <thead>
    <tr>
      <th>Features</th>
      <th>Bling</th>
      <th>Needs Fallback</th>
      <th>Cannot Use</th>
    </tr>
  </thead>          
  <tbody>
    <tr>
      <td>Border Radius</td>
      <td>X</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Box Shadow</td>
      <td>X</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>HTML5 Forms</td>
      <td>-</td>
      <td>X - HTML5Widgets</td>
      <td>-</td>
    </tr>       
    <tr>
      <td>Web Workers</td>
      <td>-</td>
      <td>-</td>
      <td>X</td>
    </tr>  
    <tr>
      <td>Web Sockets</td>
      <td>-</td>
      <td>-</td>
      <td>X</td>
    </tr>
  </tbody>
</table>

<p>Categorize each new feature you come across into one of these 3 categories:</p>
<ul>
  <li><em>Bling:</em> You will use this feature, and you will not provide a fallback for browsers that do not support it.</li>
  <li><em>Needs Fallback:</em> You will use this feature, but you will provide fallback for browsers that do not support it.</li>
  <li><em>Cannot Use Now:</em> You will not use this feature for the time being for different reasons:
  <ul>
    <li>Lack of browser support</li>
    <li>Feature is too unstable</li>
    <li>Feature requires more than browser support (e.g. websockets require server-side support). </li>
  </ul>
  </li>
</ul>

<p>Make sure you mark which fallback you will use for each feature you put in the "needs fallback" category. <a href="http://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills">Modernizr Wiki maintains an exhaustive set of fallbacks for new features.</a></p>
<p>The best part of this is not to create it, but to actively maintain it. I would recommend you glance through your Constitution at least once a month, as features may require reclassification based on support from new browsers, or may require new fallback solutions. Also, this will keep your awareness of new features up-to-date. </p> 
<h3>Create learning rituals</h3>
<p>When you create and follow through with your learning rituals, learning about web development will become like second nature to you. It is no longer a chore, or a tiring activity, but something you just do. There are 3 ways to go about this:</p>
<ul>
  <li>Deliberate Practice</li>
  <li>Passive Learning</li>
  <li>Participation</li>
</ul>
<h3>Deliberate Practice</h3>
<p>I would recommend you set aside 2 hours of your week to practice web development (apart from your work schedule). This is not negotiable.</p>
<h3>Passive Learning</h3>
<ul>
  <li>Refer to the <a href="http://www.delicious.com/nimbupani/activewebdevelopment">Official Browser documentation</a> when a particular feature does not work as per standard. </li>
  <li>Refer to the <a href="http://www.w3.org/2009/cheatsheet/">W3C Cheat Sheet</a> if you want to look up a syntax for a property.</li>
  <li>Read these documents. It is worth your time:
  <ul>
    <li><a href="http://w3.org/TR/html5-diff/">Differences between HTML4 and HTML5</a></li>
    <li><a href="http://dev.w3.org/TR/html-markup/">HTML5 The Markup Language</a></li>    
    <li><a href="http://w3.org/TR/html-polyglot/">Using XHTML in HTML5</a></li>
    <li><a href="http://w3.org/TR/css3-selectors/#selectors">CS3 Selectors</a></li>
  </ul>
  </li>
</ul>
<h3>Participate</h3>
<p>The advantage of participating in online/offline activities on web development is that it is a two-way process. If you slack on your learning process, constant reminders from your communities will keep you updated on what you have missed so when you are ready to get back into the game, you do not have a black hole to start from. You already know what specifically you have to catch up to (not some voodoo called "HTML5" but specific sections in standards like "Websocket API" or "Webfonts").</p> 
<p>I recommend the following for participation:</p>
<ul>
  <li>Mailing Lists</li>
  <li>Filing browser bug reports</li>
  <li>Browser communities</li>
  <li>Writing and sharing demos.</li>
</ul>
<h3>Mailing Lists</h3>
<p>If you write HTML and CSS, subscribing to these mailing lists is mandatory:</p>
<ul>
  <li><a href="http://lists.w3.org/Archives/Public/www-style/">www-style</a>: This is where you track how browsers are implementing CSS specs. This is also where you ask for features in CSS. </li>
  <li><a href="http://www.whatwg.org/mailing-list">whatwg</a>: Browser developers frequently discuss new features. This is also where you can give feedback on the specs.</li>
  <li><a href="http://tech.groups.yahoo.com/group/mobile-web/">mobile web</a>: Recent mailing list exclusively for developing for mobile devices. Developing for mobile devices is a whole new level of torture that these warriors will help you overcome.</li>
</ul>
<p>These mailing lists do get overwhelming. So, do not try to be on top of each and every thread. I usually, pick up an email thread, and spend 30 minutes or so to understand completely what that thread is discussing (and occasionally contribute to it). </p>
<h3>Browser Bug Reports</h3>
<p>It is almost an impossible task to check how each feature works in combination with other features. Browser developers do try, but miss a lot of use cases. So, I would think it is mandatory for developers to submit a bug report if they find a browser that renders a feature inconsistent with the description in the specification. Read <a href="http://ejohn.org/blog/a-web-developers-responsibility/">John Resig&rsquo;s post on a Web Developer's Responsibility</a> to understand how to write and where to file bug reports.</p> 
<h3>Communities:</h3>
<p>Almost all browsers have places where they discuss and describe Open Web Standards. Subscribe and comment on their posts! </p>
<h3>Writing and Sharing Demos:</h3>
<p>I mentioned deliberate practice. But before you get started, you would have to get your practice tools set-up. </p>
<ul>
  <li>Get a sandbox where you can practice without worrying if your demos are going to take your homepage/blog down. I use <a href="http://www.dropbox.com/home">dropbox</a>. You can use whatever you are comfortable with. </li>
  <li>Use a template to start your demos (try <a href="http://html5boilerplate.com">HTML5 Boilerplate</a>). If you start writing code from scratch, your focus deflects from the features themselves to writing the support structure. Then again, make sure you use a template that is up-to-date and not something stale.</li>
  <li>Finally, start writing demos! Here are some ways to think about these demos:
  <ul>
    <li>What is the most annoying use-case at work? How can you make it less annoying?</li>
    <li>Is there a repeated pattern you can replace with the new features of HTML5/CSS3 or other Open Web Standards?</li>
    <li>How fancy can you get with form elements without using graphics?</li>
    <li>Do you use arrow graphics in your web application? If so, how about using only CSS to do these graphics?   </li>
  </ul>
  </li>
</ul>
<p>Once you have your demo, it is time to evaluate it!</p>
<ul>
  <li>Test it on all browsers that your audience would use (or the audience for the websites in your workplace would). How does it render on browsers that support the required features? How does it render on all other browsers? </li>
  <li>Does it use a lot of CPU cycles (usually you would know this by the increased noise from the fans in your computer when you run your demo). </li>
  <li>Does it slow down your browser (test this by scrolling or resizing the browser window)?</li>
  <li>What fallback solutions do you need to render the demo correctly on all browsers? </li>
  <li>Finally does your Constitution require an update based on the demo? </li>
</ul>
<h3>Share </h3>
<ul>
  <li>Put up the code on <a href="http://github.com">Github</a> (ask a friend how to do this, if you do not know already). Get people to comment and critique it.</li>
  <li>By sharing your code, you will learn more simply by having others ask questions on what you did. Even better when someone points you to a simpler solution. </li>
  <li>If you are working with a few other web developers, meet once a month at work to discuss either the constitution or what is new in Open Web Standards.</li>
  <li>You could even meet to autopsy demos. <a href="http://html5demos.com/">Choose a demo</a> and change the parameters. Disable JavaScript and see how it works. Analyse its performance. How does it work when you combine it with some other feature? Are there other ways to accomplish the same demo? What are the fallbacks the demo uses? Can you use something else? </li>
</ul>
<h3>Continue Outsourced Learning</h3>
<p>While you are doing all this, do <a href="http://paulirish.com/2010/front-end-development-feeds-to-follow/">continue with reading articles on Web Development</a>. But do remember to be wary of any claims articles make. Everyone has biases which they may or may not be aware of.</p> 
<p>Always test and evaluate any demo before you accept the assertions as facts. </p>
<h3>Designers</h3>
<p>If you are a web designer, I have news for you. It used to be that, it was sufficient to know HTML/CSS to be a web designer.</p>
<p>Alas, the new APIs that are available for HTML5 provide a lot of interactive features that can only be accessed through JavaScript. <a href="http://video.yahoo.com/watch/111593/1710507">Learn JavaScript.</a></p>
<p>Do subscribe to the mailing lists I mentioned earlier, and be vocal about what you want from the standards bodies. If you have friends who have the same concerns as you, encourage them to voice it in the mailing lists. Browsers and standards bodies are actively looking to help web designers and developers for feature-requests and the more people who advocate it, the less it would seem like an isolated voice in the dark.</p>
<p>Finally, live long and prosper!  </p>    
