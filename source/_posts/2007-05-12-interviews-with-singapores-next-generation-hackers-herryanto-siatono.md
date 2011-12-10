--- 
layout: post
title: " Interviews with Singapore's Next Generation Hackers: Herryanto Siatono."
created: 1179025922
---
<hr>

This is the second interview in the series of interviewing Web 2.0 hackers from Singapore. Today we get to see <a href="http://pluitsolutions.com/about">Herry</a>. Herry is a hacker and a designer. He developed the acclaimed <a href="http://bookjetty.com/">BooJetty</a> a social book-bookmarking site that also mashes up Amazon and Singapore National Library (NLB) catalogue information. He talks about BookJetty, what it is like to be a developer and a designer, and of course, the technical aspects of BookJetty and how he gets a project off ground.

<hr>

<h3>What drives you to create web apps like <a href="http://bookjetty.com">BookJetty</a>?</h3>

It was to solve a problem I had, of having to swap between <a href="http://amazon.com">Amazon.com</a> and <a href="http://vistaweb.nlb.gov.sg/">Singapore NLB online catalogue site</a> -- to check out if a book is worth a read and if it is available in the library.

At that time, I was looking for a pet project to learn more about <a href="http://www.adaptivepath.com/publications/essays/archives/000385.php">AJAX</a>, and BookJetty idea popped into my mind immediately. That was how it got started.

<h3>How much time do you devote to BookJetty?</h3>

On average 2-3 days a week, when I got bored between works for client, and on some evenings and weekends.
 
But at times, work can be so demanding; when I don't even have much time to sleep, I have stay away from BookJetty for a while. 

<h3>What technologies do you use on BookJetty?</h3>

It was originally written on <a href="http://java.sun.com">Java</a>, using <a href="http://www.hibernate.org">Hibernate</a> and <a href="http://www.springframework.org">Spring framework</a>.
But, again, my curiosity for a pet project to learn more about <a href="http://rubyonrails.org">Ruby On Rails</a> (RoR), pushed me to go ahead of this crazy idea of rewriting it from scratch using RoR. Lucky me, it went off smoothly, and the database is on MySQL. 

Memory caching (<a href="http://www.danga.com/memcached/">Memcached</a>) was used to cache and speed up <abbr title="National Library Board">NLB</abbr> response, and to save on the server sessions, I pooled the session IDs.
 
As for the front-end site, the JavaScript libraries, I mainly used <a href="http://www.prototypejs.org/">Prototype</a>, <a href="http://script.aculo.us">Scriptaculous</a> and <a href="http://cross-browser.com">X-Library</a>. <abbr title="Integrated Development Environment">IDE</abbr>, none other than <a href="http://www.radrails.org">RadRails</a>. <a href="http://subversion.tigris.org">Subversion</a> for the version control, and server co-located at <a href="http://www.qala.com.sg">Qala</a>, running on <a href="http://www.ubuntu.com">Ubuntu</a>.
 
<h3>How long did it take for you to get any web app off the ground?</h3>

It's a subjective question, depending on the complexity of the application and the platform you use to develop. Using <abbr title="Ruby on Rails">RoR</abbr> will be faster. :)

A full fledged application with testing and administration site done properly, on an average, would take about 3 months. While a quick-off-the-ground
application, can be done in days to weeks.

<h3>How many people currently use BookJetty?</h3>

Currently there are close to 200 registered users, mainly local users, as BookJetty only links up with Singapore <abbr title="National Library Board">NLB</abbr>, but the actual number of users using it could be more, as people don't need to register to use BookJetty.

<h3>6. What is the plan for the future of BookJetty?</h3>

To keep developing it into a full fledged social book-bookmarking site, and to link up with more libraries, so as to open it up to the world.

<h3>What challenges do you face in developing for BookJetty?</h3>

The biggest challenge I would say the part that links it up with <abbr title="National Library Board">NLB</abbr>. It looks easy on the surface, as it is not just about passing parameters and screen scrapping.

In the backend, there are some sessions involved, thus the sessions have to be managed carefully, as some may have expired too; and due to the asynchronous requests from BookJetty, there is also a need to streamline and improve the query time through caching and session pooling. A lot more work than what I had thought it required.
 
<h3>Looking back, is there anything you would have done differently with BookJetty, given the new technologies now?</h3>

Technologically, I think I am on the right track with <abbr title="Ruby on Rails">RoR</abbr>, it is so much joy to enhance the site right now. 

But as for the execution of BookJetty, I should have planned it for global users from the start, the on-the-fly call number availability check is God-sent, but would be quite a challenge to implement it across many libraries.
 
<h3>What do you think you would be doing next? What do you see in your future as you develop for the web?</h3>

I have just spent a few months working on a project collaboration system for a client, so I am thinking of spending a few more months to wrap it up as a product, and hopefully be able to learn something from this experience.
 
I'm not sure if I know about the future, the web is changing so fast. At one moment, you think this is right, later, as you learn, you think that this is stupid. But, at the end of the day, it's always about how can we be better off with the web, and people will keep pushing the limits of what they can do with the web.

<h3>You indicated in <a href="http://www.pluitsolutions.com/">your blog</a> that you took a sabbatical to learn about new technologies. How did that help? Is there anyway you think you could have done without it?</h3>

Yeah, there is no way I could have done without it. Other than the technical gains, it also gave me a new perspective to what I believe in and what I want to pursue. The one regret I have is, why did I not do it earlier?

<h3>You are also a rare species that designs and codes. How do you see the relationship between the two? Given that designers are always bickering about developers. Do you think sometimes being a developer constrains your design view (especially on the web)?</h3>

I think the line that separates the two is getting thinner. Now that the basic needs of Create, Read, Update and Delete (CRUD) tasks have been fulfilled, we start to look further; we look at how to do things better, faster, easier, and with more joy. 

To push beyond that limit, we need designers with some programming knowledge and programmers who know some design concepts.

Technorati Tags: <a class="performancingtags" href="http://technorati.com/tag/pluitsolutions" rel="tag">pluitsolutions</a>, <a class="performancingtags" href="http://technorati.com/tag/webstandards" rel="tag">webstandards</a>, <a class="performancingtags" href="http://technorati.com/tag/webdesign" rel="tag">webdesign</a>, <a class="performancingtags" href="http://technorati.com/tag/css" rel="tag">css</a>, <a class="performancingtags" href="http://technorati.com/tag/bookjetty" rel="tag">bookjetty</a>, <a class="performancingtags" href="http://technorati.com/tag/rubyonrails" rel="tag">rubyonrails</a>, <a class="performancingtags" href="http://technorati.com/tag/webapps" rel="tag">webapps</a>
