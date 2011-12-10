--- 
layout: post
title: Sexy CSS3 Buttons
created: 1282103852
category: "Web Development"
---
<p><b>Update:</b> <a href="http://chriseppstein.github.com">Chris Eppstein</a> pointed out the obvious, a neat <a href="http://brandonmathis.com/projects/fancy-buttons/demo/">fancy buttons plugin for Compass</a> that provides simple gradient fancy buttons without using an extra element in the markup.</p>
<p>I do not wear the mantle of Open Web Vigilante lightly. Granted, I may slack off now and then (who doesn't?), I pay serious attention when claims of <a href="http://technology.posterous.com/make-css3-buttons-that-are-extremely-fancy">Extremely Fancy CSS3 Buttons</a> are made.</p> 
<p><a href="http://nimbupani.com/demo/sexycss3buttons/"><img src="http://nimbupani.com/files/post_buttons_png_scaled500.png" alt="post_buttons.png.scaled500.png" border="0" width="500" height="70"></a></p>
<p>Now, now, you might think, at first glance, I should be crying tears of joy at the grace and beauty of the purely CSS buttons, but I do not. Here’s why:</p>

<ol>
  <li>It uses 3 elements to do what essentially should be restricted to 1, the button element.</li>
  <li>It uses a <code>div</code> tag to create a button, which violates my semantic rule book. 
  </li>
  <li>
   The <code>div</code> means all buttons are block elements and will never be flexible and always need to have width set. That does not sound too buttony!
  </li>                                                                   
  <li>The example cites using a span with inline background color. I know everyone is lax about inline CSS, but as a Vigilante I NEVER AM (mostly)!    </li>
  <li>So if you want to center these buttons you cannot, since they are floated block elements.</li>
</ol>

<p>The demo looked ripe for some vigilante action. Here is the re-worked HTML code for a button: </p>

<pre>&lt;a class=&quot;fancy_button&quot; href=&quot;#&quot;&gt;&lt;b&gt;Post&lt;/b&gt;&lt;/a&gt;</pre>

<p>If you are not fixated with the colors, you could drop the <code>b</code> element.</p>

<p>Here is the CSS for rendering the normal state of the button (you can see the full CSS on <a href="http://nimbupani.com/demo/sexycss3buttons/">the Sexy Buttons demo</a>):</p>
<pre>
  .fancy_button { 
    display: inline-block;   
    position: relative; 
    padding: 0.25em 2em;
    border: 1px solid;    
    border-color: transparent transparent rgba(202,202,202,0.27) transparent; 
    -webkit-border-radius: 7px; -moz-border-radius: 7px; border-radius: 7px;  
    -webkit-background-clip: padding-box;
  }
  
   .fancy_button b { 
     display: block; 
     z-index: 2;  /* Necessary to make this top-most element */
     position: relative;  
     text-shadow: rgba(0,0,0,0.45) 0 -1px 0; 
    }   
   
  .fancy_button:before,
  .fancy_button:after {
    position: absolute; 
    width: 100%;
    height: 100%; 
    content: "";  /* Necessary to render these pseudo-elements */
    display: block; 
    -webkit-background-clip: padding-box;    
  } 
  
  .fancy_button:before {  
    top: -4px;
    left: -4px; 
    padding: 4px;       
    background: #086f14; 
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.4)), to(rgba(77,77,77,0.4)));  
    background: -moz-linear-gradient(top, rgba(0,0,0,0.4), rgba(77,77,77,0.4));     
    -webkit-border-radius: 10px; -moz-border-radius: 10px; border-radius: 10px;    
  }

  .fancy_button:after { 
    top: -1px;
    left: -1px;
    border: 1px solid; 
    border-color: rgba(255,255,255,0.7) rgba(0,0,0,0.3) rgba(0,0,0,0.6) rgba(0,0,0,0.3); 
    -webkit-box-shadow: rgba(0,0,0,0.75) 0px 0px 3px; -moz-box-shadow: rgba(0,0,0,0.75) 0px 0px 3px; box-shadow: rgba(0,0,0,0.75) 0px 0px 3px;
    -webkit-border-radius: 7px; -moz-border-radius: 7px; border-radius: 7px;
    background: transparent -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.6)), color-stop(0.5, rgba(255,255,255,0.15)), color-stop(0.5, rgba(255,255,255,0.01)), to(transparent)); 
    background: transparent -moz-linear-gradient(top, rgba(255,255,255,0.6), rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.01) 50%, transparent);
  }                                      
</pre>

<p>Some explanation is warranted:</p> 

<ol>
  <li><a href="http://caniuse.com/#feat=css3-colors">Effectively only IE8 &amp; below need rgb replacements for rgba</a>, so I have moved such degradations to an IE specific selector. </li>
  <li>I dislike the need for an additional b element. The only reason it exists is, otherwise the text will look grey as it will be behind the gradients.  If you have a better solution, do comment!</li>
  <li>This technique uses pseudo-elements (<code>:before</code> and <code>:after</code>), since they are more CSS3 than using divs and spans :). I have also gathered the common styles of these elements together.</li>
  <li><p>IE8 and below get the same simple button treatment:</p><p><img src="http://nimbupani.com/files/postbuttonsie_0.png" alt="postbuttonsie.png" border="0" width="544" height="67"></p></li>
  <li>
  IE9 will render the box-shadow and rgba colors, if not the gradients. If you need to tweak this style, you just have to prefix your selector with <code>.ie9</code> in the CSS (provided you are using <a href="http://paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/">IE conditional comments</a>.</li>
</ol>

<p>This button graphic is a bit too heavy for my taste :) but if this is the look you want, you can <a href="http://nimbupani.com/demo/sexycss3buttons/">consider this</a>!</p>


