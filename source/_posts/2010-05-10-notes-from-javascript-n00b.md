--- 
layout: post
title: Notes from a JavaScript n00b
created: 1273522727
category: "Web Development"
---
<p>So, apparently I have been sleeping while all designers worth their salt have been diving into JavaScript like it is <a href="http://en.wikipedia.org/wiki/2012_phenomenon">2012</a>. While I have been a very early evangelist of jQuery, I knew only enough to get me a solution but nothing in depth of whats, ifs, and whys of JavsScript. So, a month ago, I decided to spend a Saturday watching the <a href="http://video.yahoo.com/watch/111593/1710507">JavaScript, the programming language lectures by Douglas Crockford</a>. If you are in the same boat as I am and want to be able to write JavaScript (or even if you are using jQuery or other frameworks), this will be the best 6 hours you will spend.</p> 

<h3>Caveats</h3>

<p>You need to know the jargon of a programming language (not HTML), e.g. type, objects, arrays, etc. I think you might have a hard time understanding JavaScript if you are used to Java, or PHP. Thankfully, I don't remember my life as a programmer, so it made understanding the lectures easy.</p>

<p>The lectures are actually only 1.5 hours long. I mentioned 6 hours because, I (thanks to prodding from <a href="http://deepak.jois.name">Deepak</a>) paused the video every minute to try out what Douglas was talking about on Firebug Console, and trying out other "what-if" cases that he did not mention.</p> 

<h3>Are you ready?</h3>

<p>These notes might sound a lot like the <a href="http://neverseenlost.wordpress.com/">description of Lost by someone who has never seen it</a>, which means, it might at least be entertaining. From what I have learnt, it seems <a href="http://nimbupani.com/dom-ecmascript-and-other-puzzles.html">JavaScript</a> is an irrational language much like you and me, which causes much grief to programmers.</p> 
<p>Without further ado, here are my notes on JavaScript:</p>
  
<ol>
	<li>There is only one type for a number, and that is a double.</li>
	<li>There is only one String type, and does not have a type of Char like some other languages (Java)</li>
	<li><code>Math.floor()</code> and <code>parseInt()</code> do almost the same thing, which is to return an integer value based on what gets passed into them, but <code>Math.floor("10f")</code> returns <code>NaN</code> ("Not a Number") but <code>parseInt("10f")</code> will return <code>10</code>.</li>	
	<li>JavaScript Strings are UCS-2 encoded which is almost all of UTF-8 (but excludes some new characters, and something called <a href="http://msdn.microsoft.com/en-us/library/ew7hbz7k(VS.71).aspx">surrogate pairs</a>).
	</li>
	<li>JavaScript has many "unknown" values: <code>NaN</code>, <code>null</code>, <code>undefined</code>. </li>
	<li><code>NaN</code> cannot be compared with or equated to. E.g. the comparison <code>NaN === NaN</code> evaluatesto <code>false</code>. </li>	
	<li><code>null</code> is an object (one of the schizophrenic aspects of JavaScript).
	</li>     
	<li><code>undefined</code> is the default value of any variable that has not yet been assigned a value (as you would have realised when you bang your keyboard in frustration at "Object undefined" errors).
	</li>                                               
	<li>Setting any variable to <code>undefined</code> is equivalent to deleting it.</li>
	<li>JavaScript statements can be "truthy" or "falsy"</li>
	<li>"falsy" statements are those that evaluate to <code>null</code>/<code>undefined</code>/<code>NaN</code>/<code>""</code>/<code>false</code> (bool)/<code>0</code> (int)
	</li>                               
	<li>Rest of the statements are true including those that evaluate to <code>"0"</code> (string)/ <code>"false"</code> (string).
	</li>
	<li><p>The easiest way to convert a string to number is to put a "+" (unary operator) before it. E.g.</p> 
<pre><code>a = +"42" 
b = a + 5 // b = 47

a = "42"
b = a + 5 // b = 425
</code></pre>
	</li>
	<li><p>The comparison operators <code>==</code> and <code>===</code> are different. <code>==</code> can do type coercion which means if the two values being compared are of different types (e.g. String and Int), it can convert one to the other (I am not clear on what gets converted to what), and compare the values. <code>===</code> does not do that. E.g.</p>
	<pre><code>43 == "43" // evaluates to true
43 === "43" // evaluates to false</code></pre>
	</li>
	<li><p><code>!</code> returns boolean true, if the associated expression is falsy. e.g.</p> <pre><code>(!(43 === "43")) // true</code></pre> 
	</li>                   
	<li><p><code>!!</code> returns the boolean equivalent of the truthy/falsy nature of the expression associated with it. e.g.</p> <pre><code>!!(43 === "43") // false</code></pre> 
	<p>So, in this way, even if your expression evaluates to <code>null</code>, <code>undefined</code> or <code>NaN</code>, you can use this operator to only use the boolean equivalent than these unknown values.</p>
	</li>
	<li>
		Switch statements use "===" comparison 
	</li>                                    
	<li>Declare a variable with <code>var</code> before it (e.g. <code>var variablename</code>), so that its scope is local to where it was declared. Otherwise the variable will be available globally (and susceptible to accidental modifications)</li>  
	<li>A variable declared in a function is available throughout the function and not just within blocks (e.g. a variable declared in if/switch statements of a function is also available for other operations in the same function).
	</li>                                                                    
	<li><p>You can define a function in two ways:</p>
		<pre><code>1. var a = function() {} 
2. var a = new function() {} 
</code></pre>
		<p>#1 implies the function returns undefined value unless there is a return statement.</p>
		<p>#2 implies the function returns an object if there is no return statement (so it acts as a <a href="http://en.wikipedia.org/wiki/Constructor_(object-oriented_programming)">constructor</a>).</p>		
	</li>              
	<li>An object contains "name: value" pairs, the value can be another object. The value is referred using <code>object.name</code> or <code>object[name]</code>. The name can contain any character but, if you use a name like <code>sd#</code> you cannot refer to its value in this manner <code>a.sd#</code> you can only use <code>a["sd#"]</code> </li>                                                                         
	<li><p>Objects are passed by reference, so they cannot be compared to check if they contain same name/value pairs. E.g. </p>
<pre><code>a = {b:1, c:2};
p = {b:1, c:2};

a == p; // false

p = a;  // name: value pairs of p lost, p points to a

 a == p; // true</code>
</pre>
	<p>So, when you compare two objects, you really are comparing if they are both pointing to the same location.</p>
	</li>
	<li>Arrays inherit from Objects but have additional properties and functions.</li>
	<li>Array length property returns the largest integer index + 1 e.g:
<pre><code>a[0] = "bobo"; 
a[5] = "dada"; 
console.log(a.length); // results in 6 not 2
</code></pre>		
</li>
<li><p>Arrays can have functions too: </p>
<pre><code>var a = [0, 1, 2];
a.functioname = function() {}		
</code>
</pre>
	</li>      
	<li>
<p>If you delete an item from an array, it does not alter the length of the array.</p>		
	</li>   
	<li>
<code>typeOf(variableName)</code> returns Object as the type for an array (so you cannot confirm if that variable points to an array), use <code>variableName.constructor === Array</code> to check if the variable is an array.		
	</li>
</ol>     

<p>I am pretty sure I must have passed out at this stage after all this knowledge gain. Nevertheless, I am very curious about JavaScript and hoping to learn more from the <a href="http://video.yahoo.com/watch/111585/1027823">messiah</a>. </p>
<p>P.S. I am sorry if it was not as entertaining as the Never Seen Lost blog posts.</p>
