---
layout: post
title: "CSS Object Model"
date: 2012-06-18 10:48
comments: true
category: "Web Development"
---

Until [Test the Web Forward](http://testthewebforward.org) I had just a vague idea of what CSS Object Model does. So, it was awesome to hear from and learn about the [CSS Object Model](http://dev.w3.org/csswg/cssom/) from the spec co-editor [Glenn Adams](https://twitter.com/gasubic/). 

## What it is

The CSS Object Model specification provides APIs that allow you to query and manipulate styles once the browser reads and understands the stylesheets and inline styles that are used on the page that is being rendered. An older specification that standardizes this was called DOM Level 2 Style Specification. It was the first specification that provided ability to access and manipulate styles via JavaScript using the DOM API. 

The fragmented history of the web sadly means most of these APIs do not quite work the way they are intended to in many browsers. Glenn wrote in to state what the goals of the current specs are, which include:

- Fully specify behavior that was left unstated, vague, or ambiguous in DOM-2 Style spec.
- Remove functionality specified in DOM-2 Style that is not widely implemented and not perceived as necessary.
- Add functionality not specified in DOM-2 Style that has been widely implemented and is viewed as sufficiently important.

The APIs from the specification that have been implemented so far offer the abilitiy to query rules specified in the stylesheets or a text representation of the styles in a stylesheet or the inline styles of an element within the rendered page. For example, you can get the value of `margin` of an element by using `getComputedStyle('element,optional pseudoElement').margin`. You can also get the full style declaration that applies to an element as a string by using `getComputedStyle('element,optional pseudoElement').cssText`.


## The `CSSStyleDeclaration` Object

The `getComputedStyle` method retuns what is known as a `CSSStyleDeclaration` object. It enumerates all style properties (& values). This is the object that is returned whenever you query for style information using:

- `document.styleSheet[0].cssRules[0].style`

- `Element.style`

- `document.getOverrideStyle` (unimplemented in most browsers, but would be useful for [getting/setting hover, and other pseudo-classes](http://stackoverflow.com/questions/9798210/is-there-any-way-to-reset-after-before-css-rules-for-an-element)).

- `window.getComputedStyle`
 
The returned object itself can be changed (it is _mutable_ which means you can set a style property like `Element.style.margin = "20px"`) in all cases except the last. If you try to change a property of the object returned by `window.getComputedStyle(Element)`, you would get an exception. 


## CSS Rules

Rules within stylesheets have an object model too. There are 6 kinds of [CSS rules](http://nimbupani.com/css-vocabulary.html) that could apply:

- Style rules (e.g `h1 {}` or `#main a {color: red; }`)
- @import rules (e.g. `@import url(main.css)`)
- Page rules (e.g. `@page :first {color: red; }`)
- @font-face rules (e.g. `@font-face {}`)
- Namespace rules (e.g. `@namespace svg http://svg.org`)
- Media rules (e.g. `@media (min-width: 200px)`)

Not only that but you can even access the individual selectors that you specified in your style sheet. The values for properties in selectors are also serialised. How these values are serialised has also been documented in the specification. For example, if an element has a style property set (inline or set from within a stylesheet) like so `margin: 20px 20px 20px 20px;`, the specification states that when you access the style using `cssText` it should return `margin: 20px;`. 

## Testing CSS Values

The above serialization of CSS values seemed trivial and I thought would be a good test to start with. So, I wrote a [small test](https://dl.dropbox.com/u/952/ttwf/index.html). The results were interesting:

- Firefox & IE 9 were the only browsers that returned the expected value of `"margin: 20px"`
- Chrome returned `"margin: 20px; "` (note the whitespace after the semi-colon)
- Opera bizarrely returns `"margin-top: 20px; margin-bottom: 20px; margin-left: 20px; margin-right: 20px"` (also note the missing last semi-colon).
- Safari returned `"margin-top: 20px; margin-right: 20px; margin-bottom: 20px; margin-left: 20px; "` (note the space after the last semi-colon).

Imagine the frustration of someone trying to write a CSS Style editor and wanting to show CSS style rules correctly! Glenn tells me that radical differences like these exist because the original DOM 2 Style spec did not document the serialization rules (he also pointed to this [thread that discusses which properties get serialized or not](http://lists.w3.org/Archives/Public/www-style/2012Jan/1122.html)). 


Hopefully, because of Test the Web Forward, we can have more such tests in the future to ensure all browsers implement these APIs and specifications correctly. There are many other APIs available in the CSS OM. Interestingly, I was made aware of the longest property name (proprietary though) in existence: <del>`-webkit-match-nearest-mail-blockquote-color`</del> (thanks to [Andreas Kling](http://twitter.com/awesomekling) this is [no longer the case](http://trac.webkit.org/changeset/120735), it is now `-webkit-border-bottom-right-radius`) (I wonder what is the shortest?). 

If you are interested in writing and contributing CSS tests, first [make an account](https://test.csswg.org/shepherd/register/) (please do make sure to check the box for 'Request Repository Write Access') and then follow along with [this presentation](http://adobe.github.com/web-platform/presentations/test-the-web-forward-tutorial/index.html) by [Jacob Goldstein](http://twitter.com/JacobG415) & [Rebecca Hauck](http://twitter.com/RebeccaHauck). 

_Many thanks to Glenn Adams & Paul Irish for reviewing this post._
