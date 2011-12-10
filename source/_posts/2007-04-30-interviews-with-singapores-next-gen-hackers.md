--- 
layout: post
title: " Interviews with Singapore's Next Gen Hackers"
created: 1177936248
---
<em>Starting this week, I plan to host an email interview with the developers of cool software from Singapore. This week, I had a conversation with <a href="http://blog.yanime.org/">Choonkeat</a>.  Choonkeat is an action oriented geek who has developed two useful and popular "web 2.0" services: <a href="http://rssfwd.com">rssfwd</a> and more recently, <a href="http://sharedcopy.com">sharedcopy</a>. I emailed Choonkeat to ask some questions on what makes him release projects one after the other and each in a different territory of web 2.0. Here are his answers.</em>

<h3>First you created the <a href="http://rssfwd.com">RSS to email service</a> and now <a href="http://sharedcopy.com">SharedCopy</a>. What makes you create such services? </h3>

Identifying that something is lacking in a program/software, finding a simple solution for it and realising that I can actually do it. This is one of my primary joys as a programmer - that I can fire up a text editor just go do something instead of having to wait for somebody else to make it happen. 

RssFwd started as a tool that I used until <a href="http://www.meereffect.nl/">Taco Oosterkamp</a> contributed with a support request and dropped me a list of constructive suggestions on how I can improve it. Traffic picked up right after that. Yeah, my "helpdesk" literally turned my "business" around!

<h3>How much time do you devote to either of them?</h3>

On average of 3 days a week out of my weekday evenings and weekends. 

<h3>What technologies are you using on sharedcopy, rssfwd? </h3>

<a href="http://blog.yanime.org/articles/2004/11/11/rssfwd-v0-1a">RssFwd was originally written in Perl</a> - the primary scripting language I knew then.  But <a href="http://blog.yanime.org/articles/2004/11/14/rssfwd-v0-2">re-written in Rails 3 days later</a> because I needed the availability of a Web UI but was not able to get Perl running in Apache (one of those days when you can't get anything to work!) and then Rails was there whispering, beckoning me, "script/server... script/server...". Got me at my moment of weakness. I caved in. ("script/server" refers to the built-in ruby web server that comes with Rails and "just works") 

RssFwd consumes various feed formats (RSS, Atom), OPML format for subscriptions, XSLT for transforming that OPML to a neat webpage, processes multi-part emails and various languages. Along the way I learnt some voodoo tricks to ensure HTML emails work in obscure e-mail clients, and also how not to be blacklisted as a spam service. As it happens, the Rails way of handling emails is the easiest I've seen, so that's a bonus. 

SharedCopy on the other hand is a lot of Javascript (DOM and CSS). It is not exactly an AJAX application and I'm only using simpler mechanisms to get things done. e.g. I use bookmarklet and cross-site scripting (XSS) which is something that is more often associated with phishing and other evil activities. Firebug has been spectacularly helpful... and oh, SharedCopy happens to be running on Rails, but that's the nondescript part of it ;-) 

I'm using <a href="http://tech.rufy.com/2006/08/mapreduce-for-ruby-ridiculously-easy.html ">Starfish</a> to power my API callbacks feature

All code gets written using either <a href="http://www.vim.org/">vim</a> or <a href="http://www.eclipse.org/">Eclipse</a>. The projects use <a href="http://subversion.tigris.org/">Subversion</a> for version control and <a href="http://www.mysql.com/">MySQL</a> for databases. The services are VPS hosted on <a href="http://www.spry.com/">Spry</a> and <a href="http://rimuhosting.com/">Rimuhosting</a>.

Primary testing browser is <a href="http://getfirefox.com">Firefox</a>. <a href="http://www.vmware.com/mac">VMWare Fusion</a> is used to test with IE6 and IE7. 

<h3>How long does it take to get a project off the ground?</h3>

Getting things to work from scratch is pretty exhilarating and is usually completed in matter of hours. If it takes any longer, I would've been too lazy to do it anyway. 

But after that, a lot of time goes into learning from actual usage (usually my usage) and evolving the product along. Another big time drainer is the visual aesthetics. I'm not at the stage where apps looks good right off the bat, but I'm working on getting there. For SharedCopy, other than browser compatibility checking, I also had to do something not usually required a webapp - website compatibility checking. 

<h3>How many people currently use sharedcopy, rssfwd?</h3>

SharedCopy is pretty young, so she only has a handful of people kicking tires. RssFwd has about 29k unique and active users. 

<h3>What are the plans for the future for sharedcopy or rssfwd?</h3>

No real plans for both other than "be useful"

For <a href="http://rssfwd.com">Rssfwd</a>, features for the end-users has kinda been frozen for a while now. She does as-advertised - nothing more - and a lot of people love her for that. She could improve in performance and monitoring statistics though. And also she'll continue to be my playground simply because there is real data and traffic to try things out with. 

<a href="http://sharedcopy.com">SharedCopy</a> is more flexible and can probably serve a bigger variety of needs, e.g. as an online bookmark, collaborating tool, quick and dirty diagraming, bug reporting, etc. Still at the stage of evolving her character now. 

<a href="http://sharedcopy.com/public/api">API for callbacks has been just been released, with Basecamp and Twitter</a> being "bundled" as examples with source code, so let's see what uses come out of it. 

<h3>What challenges do you face in developing for sharedcopy or rssfwd.</h3>

A unique challenge of SharedCopy is that the script is hosted in "hostile environment". i.e. the javascript needs to run in somebody else's web page (with their javascript). Usually, as Javascript or CSS authors we can pick our HTML doctype (or at least know for certain) and know how it'll affect the rendering engine - but in this case, I don't have that luxury. 

There is not a lot of literature on getting Javascript working in such an environment, hence a lot of the learning is by fire.

<h3>Looking back, is there anything you would have done different with rssfwd - given the new technologies you are able to access now? </h3>

Polling of content takes up a lot of bandwidth and resources. Adopting a more distributed nature would definitely help, especially if it allows a more casual participation of those resources. How? I don't know yet. 

<h3>What do you think you would be doing next? Wat do you see as you develop for the web?</h3>

I don't know. There's not a lack of ideas, but most of them will not be executed simply because I won't have a need for them. I'm very easily distracted, so I only create applications that I need  as that would at least make me complete the project!

Predictions? I'm not good at it.


Technorati Tags: <a class="performancingtags" href="http://technorati.com/tag/web 2.0" rel="tag">web 2.0</a>, <a class="performancingtags" href="http://technorati.com/tag/singapore" rel="tag">singapore</a>, <a class="performancingtags" href="http://technorati.com/tag/sharedcopy" rel="tag">sharedcopy</a>, <a class="performancingtags" href="http://technorati.com/tag/rssfwd" rel="tag">rssfwd</a>
