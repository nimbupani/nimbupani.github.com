--- 
layout: post
title: Some CSS Transition hacks
created: 1305701187
category: "Web Development"
---
<p>I am speaking at <a href="http://unplugged11.webdirections.org/program/design#creative-css3">some</a> <a href="http://2011.texasjavascript.com/">events</a> which means I have to write a few demos. You can find some <a href="http://nimbu.in/unplugged/demos/">here</a>, and I am in the process of creating more. While doing so, I have come across two new (to me), ways of applying transitions.  This only works for the conditions stated here, and you should think carefully before trying to expand these to be used elsewhere.</p>

<h2>Fake Transitions on Gradients</h2>
<p>As you know, no browser supports transitions in CSS gradients (yet). But, we have two tools to fake this: transitions that work on background colors, and multiple backgrounds. Given transitions can interpolate colors, we simply transition the background color and apply a gradient image on top of it which fades to transparent value (giving the illusion of an transitioning gradient). </p><p>Here is a demo:</p>
<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/nimbu/zuNbj/embedded/result,css"></iframe>
<h3>Caveat</h3>
<ul><li>This works great on simple gradients. You probably do not want to use this with multiple backgrounds as it would be a terrible pain to manage the right backgrounds to change.</li></ul>

<h2>Animate elements with just font-size</h2>
<p>Transitions can be applied on CSS transforms, so if you wish to scale an element on hover, it would be a matter of applying the right prefixed transition on the right prefixed transform and writing the vendor-prefixed scale transform 5 times on hover.</p> 
<p>I am lazy, and I like to avoid typing if I can. So, given we can use <code>em</code> as a unit for width, height, line-height and border-radius would be something we can take advantage of. What this unit means is each of these properties are now relative to the <code>font-size</code> we set on the element.</p>
<p>Now all we need to do is transition the font-size, and we get bonus transitions on width, height, line-height and border-radius! Now you can be carefully choose which elements should use em units depending on which properties (that use em unit values) you want transitioned.</p>
<p>Don't be so quick to gloat though. Webkit does not transition width, height, line-height if you only transition the font-size, so you would need to set <code>-webkit-transition: all 1s;</code> to get it to work on webkit.</p>

<iframe style="width: 100%; height: 300px" src="http://jsfiddle.net/nimbu/86kET/embedded/result,css"></iframe>
<h3>Caveats</h3>
<ul>
<li>The element expands in area - unlike a scale transform which expands without nudging other elements out of the way. This means elements adjacent to this element will move unless they are all positioned absolutely. You can also position the element to which transition is being applied absolutely so as to not impact rest of them.</li>
<li>This only works for properties you want to transform that accept length units. </li>
<li>If you do not want the text within the transformed element to also transform, using this method would be easier. When using transforms, you would need to reset the transform on the wrapper around the text so as to prevent text from transforming. In the above demo, the blue disc has considerably more rules and declarations to prevent scaling of text as compared to transforming the font size.</li>
</ul>
<p>If you know of a snappier way to do these, please fork the fiddles and link to your forks in the comments.</p>
