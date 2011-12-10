--- 
layout: post
title: "Kindle: The Power Reading Device"
created: 1289533473
---
<p>Over the last few years, a lot of magazines have started publishing long-form content online (mostly from their archives). Thanks to these, I would invariably be sitting in front of my laptop late at night - trying to read in a posture that was comfortable (and failing). </p>
<p>I also like to read at every opportunity I get. The limited battery life & distractions from multi-tasking make that a chore. </p>
<p>I wanted a reading device that was: </p>
<ul>
<li>Easy to use with one hand.</li>
<li>Not impacted by stains or strains. </li>
<li>Not hard on the eyes</li>
<li>Big enough to make reading of articles comfortable, but not too big to be unwieldily. </li>
<li>Able to access the web.</li>  
</ul>
<p>Luckily for me, the Kindle satisfies all these conditions! The killer feature is the <a href="http://en.wikipedia.org/wiki/Electronic_paper">Electronic Ink Display</a> which makes it a pleasant reading experience while also making the battery last longer (it goes on for at least 5 or 6 days without using the internet, and 2 if you use internet exhaustively).</p> 
<h3>3G or Not to 3G</h3>
<p>The <a href="http://www.amazon.com/gp/product/B003FSUDM4?ie=UTF8&tag=nimbupani-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=B003FSUDM4">Kindle 3G</a> costs about USD 50 more but is worth every cent. It offers lifetime free 3G - not just for downloading books but also for browsing the internet through their experimental browser! Here is <a href="http://kindleworld.blogspot.com/2010/10/global-kindle-3g-web-browsing-where.html">more information on worldwide 3G coverage</a>. In a country where 3G is supported &amp; it is not available, it converts to an EDGE or GPRS connection, which works just as fine &mdash; just not as fast. Unfortunately you can only have one window open (no multiple tabs) so it is not useful for anything other than checking email, Facebook, or Twitter (&amp; not clicking on the links!)</p> 
<p>Another nice feature of the browser is the &ldquo;Article Mode&rdquo; which does what readability does to a page on the Kindle browser. So, you may not even have to do the conversion mentioned below, if you are connected over 3G. But the lack of multiple windows or tabs makes using the browser not an easy task.</p>
<h3>Read Online Offline</h3>
<p>What seals the deal, is the Kindle&rsquo;s conversion service. Kindle offers a free email service to which you can send documents, which it will convert into a Kindle-friendly format &amp; deliver to your Kindle whenever Wi-Fi is available.</p>
<p>To do this, set up your Kindle email (and set the email addresses it can receive documents from). Then send your documents to &lt;that id&gt;@free.kindle.com</p>
<p><a href="http://vyom.org">Deepak</a> found an easy way to forward long-form articles on the web to the Kindle with least effort on the Mac. You need to make sure your Mail.app can send emails.  </p><p><em>Update:</em> Some people suggested I look into <a href="http://blog.instapaper.com/post/340418615">Instapaper Digest</a>. I have and I prefer this because Amazon charges per delivery of each digest (it can easily add up to at least USD50/yr) and you do not have much control over the format of the content. </p>

<p>Here are the steps:</p>
<ol>
<li><p>Download <a href="http://nimbupani.com/downloads/Mail_Kindle.workflow.zip">this workflow</a>, unzip, and save it in Macintosh HD > Library > PDF Services:</p><p><img src="http://nimbupani.com/files/save_workflow.png" alt="save_workflow.png" border="0" width="600" height="347" /></p></li>  
<li>Open it in Automator.</li>
<li><p>Edit the &lsquo;New Mail Message&rsquo; and type in your free Kindle email address (&lt;your id&gt;@free.kindle.com) and set the right account from Mail.app to send from, like so:</p>
<p><img src="http://nimbupani.com/files/automator.png" alt="automator.png" border="0" width="600" height="493" /></p>
<p>
</li> 
<li>Save it.</li>  
<li>Open your browser.</li> 
<li>Save the <a href="http://lab.arc90.com/experiments/readability/">Readability bookmarklet</a> to your Personal bar.</li>  
</ol>
<p>To use it, just:</p>
<ol>
<li>Go to a page which contains the article you want to send to your kindle, and click the Readability Bookmarklet.</li>
<li>Click the print icon on the left. </li>
<li><p>Click the PDF option and select &ldquo;Mail to Kindle&rdquo; like this:</p><p><img src="http://nimbupani.com/files/mailkindle_0.png" alt="mailkindle.png" border="0" width="600" height="421" /><small><br>(I prefer the name Kindy.)</small></p></li>
<li>Ta-da!</li>
</ol>
<h3>Convert existing eBooks to Kindle-friendly versions</h3>
<p>Amazon's email-based converter <a href="http://www.amazon.com/gp/help/customer/display.html/ref=hp_k3land_trans_pdocs?nodeId=200505520#email">can only handle this much</a>. If you have other documents you wish to convert to a Kindle-friendly format, <a href="http://www.amazon.com/gp/feature.html?ie=UTF8&docId=1000234621">download the KindleGen converter</a>. This is a command-line based tool, follow these steps carefully: </p>
<ol><li>Download the <a href="http://www.amazon.com/gp/feature.html?ie=UTF8&docId=1000234621">zip file</a> to your desktop.</li>
<li>Unzip it.</li>
<li>Copy the files you want to convert to your desktop.</li>
<li>Open the Terminal application.</li>
<li><p>Type the following in the Terminal window:</p>
<p><code>cd ~/Desktop/KindleGen</code></p></li>
<li><p>Press the Enter key and then type:</p>
<p><code>./KindleGen ../&lt;full-name-of-book-to-convert&gt;</code></p></li> 
<li>Press Enter and the KindleGen will put the Kindle-compatible book on the desktop too.</li></ol> 
<p>Now you can connect your Kindle via USB &amp; copy the Kindle-compatible files. </p>
<h3>The Annoying Bits</h3>
<p>There is a bit of a learning curve with the Kindle. It is not as trivial as opening an iPad and swiping away. There are things that are annoying: </p>
<ul>
<li><em>Keyboard:</em> It is good for typing text, but breaks down if you have to take notes with the book in landscape mode (you would have to keep tilting it back to type them), or are typing a password or even just typing numbers and letters together. </li>
<li><em>Scrolling:</em> The Kindle is in a desperate need of a touch screen. Scrolling is a pain and horizontal scrolling even more so. </li>
<li><em>Organization:</em> The books can only be organized into folders (no sub-folders), and you cannot bulk update books. There are no smart folders as well to move any new document into a particular folder based on filters. I suspect the keyboard-based interface prevents anything other than basic UI.</li>  
</ul>                                                                                           
<p>I am yet to try Kindle's MP3 player though (the iPod shuffle has proven to be more useful here). </p>
<p>Don't even try watching anything animated on the Kindle, the E-ink display takes quite long to refresh and you cannot see anything animated at the slow rate it refreshes.</p>
<p>The Kindle portends a future when you can carry your library with you! It is not there yet, but I think the Kindle has the right form-factor and features to make that real. If you have a few Kindle tricks up your sleeve, do write in the comments.</p>
