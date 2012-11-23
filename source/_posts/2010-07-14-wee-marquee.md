--- 
layout: post
title: Wee! Marquee
created: 1279122870
category: "Web Development"
---
<p><a href="http://nimbu.in/weemarquee/"><img src="http://nimbupani.com/files/e2b1e0a3cfb12b559ed9657f79a8f02f.png" alt="e2b1e0a3cfb12b559ed9657f79a8f02f.png" border="0" width="615" height="47"></a></p>

<p>I am <a href="http://nimbupani.com/search/node/ecmascript%20OR%20%22javascript%20n00b%22">learning JavaScript</a> and I detoured into learning jQuery. My intention is to learn jQuery by developing plugins :D This way, it would be a practical understanding of how to use jQuery and the experts among you might help me out by pointing out what could be made better.</p>

<p>The first plugin I created replicates the much despised marquee effect. Thanks to <a href="http://twitter.com">Twitter homepage</a>, marquee is all the rage these days. Twitter marquee looks good because the width of the text in the marquee is longer than the marquee viewport (and the scroll is continuous). But when you use a CMS, you can never be certain of the width of the text that scrolls in the marquee. Sometimes, it is just a single line of text that is smaller than the marquee viewport, and at other times it is longer than the marquee viewport.</p>

<p>So, this plugin accommodates for both cases. If the width of all the elements that scroll are less than the width of the marquee, then it uses the normal marquee behavior.</p> 

<p>You might ask me why I did not use webkit's marquee element. This is because <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/obsolete.html">marquee is officially obsolete</a>. I have no intention of bringing it back just because webkit supports it (<a href="http://itpastorn.blogspot.com/2010/07/no-browser-supports-html5-yet-part-1.html">webkit fanboys should read this rant</a>)!</p> 

<p>There are also a bunch of options for you: adjust the width of the marquee view port, slow down or speed up the marquee, . You can even use your own class name for each instance to change how the fade looks.</p> 

<p>If this all sounds <a href="http://www.google.com/dictionary?source=translation&hl=en&q=sinnlos&langpair=de|en">sinnlos</a>, go see the <a href="http://nimbu.in/weemarquee/">demo page now</a>. If you are a kind person who is also an expert in jQuery do comment on how I can improve it. Also, my <a href="http://en.wikipedia.org/wiki/D%C3%A6mon_(His_Dark_Materials)">dæmon</a>, Mr.Claws hides within that page, click away and find him!</p>
