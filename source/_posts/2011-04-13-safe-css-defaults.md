--- 
layout: post
title: Safe CSS Defaults
created: 1302749753
category: "Web Development"
---
<p>You know those nights when you race towards a deadline, banging out the CSS as fast as you can, there comes a moment when you pause…wondering what keyword would get rid of that z-index on that anchor, then you make the best guess you can, and type:</p>

<pre><code>z-index: none;</code></pre>

<p>Then go on in life, as it “renders” like you wanted it, it works, no big deal. </p>

<p>But it is. Specifying incorrect values might inject behaviour that you did not expect. It is quite possible that the currently incorrect value might be, in the future, used for a valid value which would distort the design you so carefully did (and how often do we revisit a client’s website to update? :).</p>

<h3>Initial Values</h3>
<p>The spec defines a value that will be the <em>initial</em> value for a property when it is not declared in any stylesheets - either the user agent stylesheet (look at <a href="http://www.iecss.com/">iecss.com</a> for stylesheets of IE, <a href="http://www.iecss.com/opera-10.51.css">Opera</a>, <a href="http://www.iecss.com/firefox-3.6.3.css">Firefox</a>, <a href="http://www.iecss.com/webkit-r61376.css">Webkit</a>) or the ones you write.</p>

<p>Now, user agents assign values to CSS properties too. For example, when you do not declare margins on <code>h1</code>, the user agents have an initial value for margins. IE sets this to be <code>14pt</code>, Firefox, Opera sets this to <code>0.67em</code>, etc. This is not defined by the specifications and there is no keyword to obtain the values set by user agents.</p>

<p>Initial values are different from inherited values. All properties accept a keyword <code>inherit</code>. When you use the keyword <code>inherit</code> on a property, the browser applies the value that it finds on its parent element. On <code>html</code> element if you use the value <code>inherit</code>, it applies the initial value. </p>

<h3>Good News!</h3>
<p><a href="http://leaverou.me">Lea Verou</a> alerted me to the CSS3 keyword <a href="http://www.w3.org/TR/css3-values/#keywords"><code>initial</code> which will set the CSS3 property to the initial value as defined in the spec</a>. Sadly, the only browsers that supports this seems to be <a href="http://jsfiddle.net/nimbu/CgRAZ/10/show/">Firefox</a> (with a <code>-moz-</code> prefix) and Webkit's Safari and Chrome (yay!).</p>

<p>So until full support lands on all browsers for this amazing keyword and we don't have to support browsers that do not recognize that keyword, here are some of the ways you can reset some CSS properties to their initial values:</p>

<table>
  <thead>
    <tr>
      <th>
        Property
      </th>
      <th>
        Value
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/css3-background/#background">background</a>
      </td>
      <td>
        transparent (<code>transparent</code> stands for <a href="http://www.w3.org/TR/css3-color/#transparent-def">rgba(0, 0, 0, 0)</a>) or <code>none</code> or <code>0 0</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/css3-background/#ltborder-widthgt">border</a>
      </td>
      <td>
        none or 0
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/css3-background/#border-image-source">border-image</a>
      </td>
      <td>
        none
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/css3-background/#the-border-radius">border-radius</a>
      </td>
      <td>
        0
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/css3-background/#the-box-shadow">box-shadow</a>
      </td>
      <td>
       none
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/css3-box/#clear">clear</a>
      </td>
      <td>
        none
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/css3-color/#foreground">color</a>
      </td>
      <td>
        No value, so best option is to use <code>inherit</code> to cascade from a parent element's color value.
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/css3-content/#content">content</a>
      </td>
      <td>
        normal
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/css3-box/#display">display</a>
      </td>
      <td>
        inline
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/css3-box/#the-lsquo1">float</a>
      </td>
      <td>
        none
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/2011/WD-css3-fonts-20110324/#descdef-font-style">font</a>
      </td>
      <td>
        normal
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/css3-box/#height">height</a>
      </td>
      <td>
        auto
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/2011/WD-css3-text-20110215/#letter-spacing0">letter-spacing</a>
      </td>
      <td>
        normal
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/css3-linebox/#InlineBoxHeight">line-height</a>
      </td>
      <td>
        normal
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/css3-box/#max-width">max-width</a>
      </td>
      <td>
        none
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/css3-box/#max-width">max-height</a>
      </td>
      <td>
        none
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/css3-box/#min-height">min-width</a>
      </td>
      <td>
        0
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/css3-box/#min-height">min-height</a>
      </td>
      <td>
        0
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/css3-color/#opacity">opacity</a>
      </td>
      <td>
        1
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/css3-box/#overflow0">overflow</a>
      </td>
      <td>
        visible
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/2006/WD-css3-page-20061010/#page-break-inside">page-break-inside</a>
      </td>
      <td>
        auto
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/CSS2/visuren.html#propdef-position">position</a>
      </td>
      <td>
        static (not <code>relative</code>)
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/2011/WD-css3-text-20110215/#text-shadow">text-shadow</a>
      </td>
      <td>
        none
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/2011/WD-css3-text-20110215/#text-transform">text-transform</a>
      </td>
      <td>
        none
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/css3-2d-transforms/#transform-property">transform</a>
      </td>
      <td>
        none
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/css3-transitions/#the-transition-property-property-">transition</a>
      </td>
      <td>
        none
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/CSS21/visudet.html#propdef-vertical-align">vertical-align</a>
      </td>
      <td>
        baseline
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/css3-box/#visibility">visibility</a>
      </td>
      <td>
        visible
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/CSS2/text.html#white-space-prop">white-space</a>
      </td>
      <td>
        normal
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/css3-box/#width">width</a>
      </td>
      <td>
        auto
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/2011/WD-css3-text-20110215/#word-spacing0">word-spacing</a>
      </td>
      <td>
        normal
      </td>
    </tr>
    <tr>
      <td>
        <a href="http://www.w3.org/TR/CSS2/visuren.html#z-index">z-index</a>
      </td>
      <td>
        auto (not <code>none</code> or <code>0</code>)
      </td>
    </tr>
  </tbody>
</table>
<p><small>Thanks to <a href="http://css-tricks.com">Chris Coyier</a>, <a href="http://www.xanthir.com/blog/">Tab Atkins</a>, <a href="http://leaverou.me">Lea Verou</a>, and <a href="http://nicolasgallagher.com">Nicolas Gallagher</a> for feedback on this post!</small></p>
