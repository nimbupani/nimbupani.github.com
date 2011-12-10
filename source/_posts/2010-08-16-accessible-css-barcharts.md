--- 
layout: post
title: Accessible CSS Barcharts
created: 1282013999
category: "Web Development"
---
<p><b>Update:</b> I am now <a href="http://nimbu.in/accessible-bar-charts/">hosting the bar charts</a> for posterity :)  You can also <a href="http://github.com/nimbupani/table-bar-chart">fork it on Github</a>.</p>
<p><a href="http://nimbu.in/accessible-bar-charts/"><img src="http://nimbupani.com/files/10kbarchart.png" alt="10kbarchart.png" border="0" width="600" height="409"></a></p>

<p>When I worked on the design for <a href="http://html5readiness.com">HTML5Readiness</a>, I felt guilty for not using a table to represent the data. So, when the 10K competition came along and I thought it would be a good idea to come up with an accessible and ready-to-use CSS bar-chart. </p>

<p>I initially thought of asking user for the data and then rendering the chart along with code for the HTML and CSS. But, it did not seem very intuitive (especially expecting the user to imagine the relationship between the data and the graph). I recalled <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/editing.html#attr-contenteditable">contentEditable</a> was now available in almost all browsers and decided to use that to let the users update the chart with names and values they wanted. As soon as the user finishes editing one of the chart values, the Textarea below updates to show the HTML markup they can copy to use on their own website.</p>

<p>It was not a very difficult application to develop (given that I could already use jQuery in addition to my 10K of files). Most of my time was spent thinking of how to update the length of the bars dynamically when the user tabs or moves focus from one <code>contenteditable</code> area to the other. I also inlined the edit and delete icons using data URLs and used CSS3 transitions to position the vertical axis and its label. All the text within the barchart is editable, and the bars alter when the value of one is significantly altered from its original value.</p>

<p>I was pretty pleased with the app: it seemed to work on Opera 10.6,  Safari 5, and Firefox 3.6.8. But, you must have guessed it by now, it did not work on IE9. Why, you ask? IE9 does not allow HTML Table elements to be styled with the <code>display</code> property (here is <a href="https://connect.microsoft.com/IE/feedback/details/556576/html-table-elements-cant-be-styled-using-display?wa=wsignin1.0">the bug report</a>, warning: MSN Passport required to view). The bug has been closed with a note stating it is &ldquo;by design&rdquo;. </p>

<p>No version of IE9 will ever support tables to be styled as anything other than a table. It boggles me that IE 9 team cannot even be bothered to answer why it is &ldquo;by design&rdquo;, given that almost every other browser on the market seems to support it? There are <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/tabular-data.html#the-table-element">no restrictions from the HTML5 standard either</a>.</p>

<p>Anyway, I had to alter the markup, so  a <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/grouping-content.html#the-dl-element">name-value pair</a> seemed to be the best alternative. So, now it works on <a href="http://10k.aneventapart.com/">all the browsers that the contest mandates it should work on</a>!</p>

<p>Some people have reported they are unable to edit the data in Firefox on Linux, which seems strange given that it works on Firefox 3.6 on a Mac and PC. I have no Linux machine to test on, but I hope some of those who are reading this can help me with that!</p>

<p><span class=strike>Meanwhile, if this application seems useful, do <a href="http://10k.aneventapart.com/entry/details/102">vote</a>!</span> The results are out, and I did not win :(</p>

