---
layout: post
title: "Html5please API"
date: 2012-02-26 17:24
comments: true
category: "Web Development" 
---

[![](http://cache.gyazo.com/88b8a0680005a6f09584510034f2b847.png)](http://api.html5please.com)

Some time ago, I noticed that many [webGL demos](http://static.echonest.com/MidemMusicMachine/index.html) had a nice browser prompt:

![](http://cache.gyazo.com/57a9e37c0c425c458978f0ce335bd18f.png)

If your browser did not support webGL, you got a little link to [get.webgl.org](http://get.webgl.org) which uses UA detection to tell you what browser to view webGL with. If there was a newer version of your browser that supported webGL, then it would link to that browser. If not, it would link to all the other browsers that support webGL:

![getWebGL messaging](http://cache.gyazo.com/f0a80983ca4e1a8e1cebb72a66077b33.png)

Instead of forcing people to choose a browser arbitrarily due to a developer's whims and fancies, it provides you with an optimal recommendation based on your (viewer's) defaults. 

I wanted to see if we could do so with all the other HTML5 features. This way, there would be less of "download webkit browsers now" and more smart browser recommendations based on actual feature support. 

You also won't have to see antiquated messaging like "Download Opera 9.5" or "Download Chrome 8", but get an up-to-date browser support information depending on the features that are requested:

![Screenshot of browser support message](http://cache.gyazo.com/f49245b9418ab7069cf754436b079ea3.png)

If a newer version of your browser supports the required features, it would ask you to view the page in that browser and not in random other browsers:

![Screenshow of newer browser message](http://cache.gyazo.com/45d07becc1f74d9c9544a120821652cd.png)

I broached the idea [here](https://github.com/paulirish/lazyweb-requests/issues/39) and then less than a month ago, [Jonathan Neal](http://twitter.com/jon_neal) produced a full working implementation of how such a service would look like. I worked with Jon, [Alexis Deveria](http://twitter.com/fyrd), [Paul Irish](http://twitter.com/paul_irish), [Hans Christian Reinl](http://twitter.com/drublic), [Aaron Layton](http://twitter.com/aaronlayton) and [many more](https://github.com/h5bp/html5please-api/contributors) to create what is now [HTML5Please API](http://api.html5please.com). 

In brief, this service looks up the data used to render [When can I use](http://caniuse.com) tables and match it to the user's UA. Depending on the match, and the required features, it would either tell the user that they have a browser that is missing critical features required on the page or it would get out of the way and not render anything. 

Here is how it looks like on a browser that supports all the required features:
![A page on a browser supporting Drag and Drop](http://h5bp.github.com/html5please-api/site/with-support.png) 

Here is how it looks like when a browser does not:
![A page on a browser that does not support Drag and Drop](http://h5bp.github.com/html5please-api/site/without-support.png)

Even if the service fails to return anything (say network failure), there is no terrible disruption, the user can use the site as it is. 

Ideally, you would want to provide all critical actions on the user's browser based on what is available. If you absolutely must need certain features to enhance the experience, you can use this service to let the user know which browsers would offer that. 

[Simurai](http://twitter.com/simurai) has some creative uses of this service in his projects [Carveme](http://lab.simurai.com/carveme/) and [Flash Light](http://lab.simurai.com/flashlight/). What more, this API has even been [integrated into an IRC bot](https://github.com/gf3/protobot/blob/master/protobot.js#L447)! 

The [Wiki pages](https://github.com/h5bp/html5please-api/wiki/) have much more in-depth information on all the possible options you can use with this API. 

Let us know your suggestions and bug reports on the [Github Issue Tracker](http://github.com/h5bp/html5please-api/issues/).

