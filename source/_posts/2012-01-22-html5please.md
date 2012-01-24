---
layout: post
title: "html5please"
date: 2012-01-22 17:11
comments: true
category: "Web Development"
---
[![](http://cache.gyazo.com/c5d6f648394681c59d93c487b8347cf5.png)](http://html5please.us)

More than a year ago, in my very first talk at Web Directions on [Active Web Development](http://www.slideshare.net/nimbupani/active-web-development), I had this slide: 

![](http://cache.gyazo.com/64c191910d79e1ec04e253caa7a74482.png)

The intention was that within organizations web developers would work to keep an updated list of html5 features that they would adopt or not. However, [Paul Irish](http://paulirish.com) and I thought it would be useful if there were a global set of recommendations that web developers could consult and tap on when they are deciding on how to use features. This was the seed for the creation of [HTML5 Please](http://html5please.us). 

[When can I use](http://caniuse.com) and [Modernizr](http://modernizr.com) do a great job in informing the users of available features and how to feature detect them. The [Modernizr polyfill wikipage](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills) also does a good job of listing all the available polyfills. What we felt missing was the glue that bound all this information together, to tell the user what the best tool for the job was: either on its own, or with a polyfill or a sensible fallback. 

With HTML5 Please, you can just search for a feature that you are looking to use and find out how to do so. If you think our recommendation is incorrect, you can edit the recommendation for each feature and send a pull request (like this [example](https://github.com/h5bp/html5please/blob/master/posts/border-image.md)).


### The Setup
Initially, this data was in a JSON file that was manipulated in node to generate the static html. Soon, it became obvious that JSON would be a big pile of mess when many people _manually_ update it.  Also, it was clear we needed a build system, which is where [Tim Branyen](http://twitter.com/tbranyen) stepped in to help creating one using node and backbone that would combine markdown posts into a single HTML page. 

It was also obvious that we needed a good system to create these markdown posts so that each of the tags that are used in the 'Explore features' section are not created accidentally (e.g. prevent creating a tag called `polyfill` instead of `polyfills`). To do this, [Deepak Jois](http://twitter.com/vyom) created a simple shell script that accepts a feature name, its associated tags, its kind, and then creates a markdown file with these details and opens it in your editor. 

We also wanted a way for users to help us make the content better. I added a link to the markdown source on github for each feature which the reader only needs to fork, edit and send pull request for (all over in two clicks!).   


### The Front End
I was unsure of how to proceed with the design. This is how it appeared in the beginning: 

![](http://cache.gyazo.com/4e9fa43b13017085aa1647e1955a36d6.png)

Over the last month, I tweaked the design majorly to more or less match what you see today. I also wanted to use Sass more, which is why the source stylesheet is all Sass.


It was awesome to work with Paul, Tim, Deepak, [Connor](http://twitter.com/connor), [Brian Blakely](http://twitter.com/brianblakely), [Addy Osmani](http://twitter.com/addyosmani) &amp; [many more](https://github.com/h5bp/html5please/contributors) to create this site. Please [let us know on Github](https://github.com/h5bp/html5please/issues/) if you find issues or if you have ideas on how it could be better! 
