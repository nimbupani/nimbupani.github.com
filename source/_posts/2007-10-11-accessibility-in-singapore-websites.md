--- 
layout: post
title: " Accessibility in Singapore websites"
created: 1192118434
---
Accessibility has been in the news lately - with <a href="http://www.456bereastreet.com/archive/200710/update_on_the_target_accessibility_lawsuit/">Target's accessiblity lawsuit being given the class-action status.</a> Now, lets take a look at what was missing in Target's website that caused the complaint in the first place (summarized from the <a href="http://www.dralegal.org/downloads/cases/target/nfb_v_target_complaint.pdf">official <abbr title ="National Federation of the Blind">NFB</abbr> Vs Target legal docs</a>):
<ul><li>lack of alt-text on graphics</li><li>inaccessible image maps</li><li>the lack of adequate prompting and labeling</li><li>the denial of keyboard access</li><li>the requirement that transactions be performed solely with a mouse</li><li>lack of navigational links</li></ul>

<p>In Singapore, accessibility services seems to be provided majorly by <a href="http://designafa.com/pages/clients.asp">Designafa</a> - especially for government websites. Lets see how well these are managed by their own website:</p>

 <dl>
<dt><em>lack of alt-text on graphics</em></dt>
<dd>
<p>The first thing that strikes you is that the navigation links are separated by images that have no alt text. Moreover, you have the fluffy rounded corners images with no alt text as well. The problem is not that there is no alt text, but the very existence of these images. If they are not required for screen reading why are they present - impeeding the screenreaders? They should be background images using css. Alas, as the site structure shows, they had not thought about using css and webstandards.</p> 
<p>The next thing I notice is that the image says "Key to successful web (sic) Accessibility & Usability" while the alt text says "Accessibility for all, Making your website Accessible". If the image does nothing but display text as an "image" then the least that should occur is that the text matches that on the image.</p> 
<p>Another interesting alt text is this "Commemorating International Day of Disable Persons 2006" for the image that says "Forum on E-Accessibility in Singapore" and the date that is mentioned in the image is 22 June <em>2007</em>.</p>
</dd>
<dt><em>inaccessible image maps</em></dt>
<p>The site doesnt use any image maps thankfully. </p> 
</dd>
<dt><em>the lack of adequate prompting and labeling</em></dt>
<dd>
    This is definitely missing in the form on the <a href="http://www.designafa.com/pages/contactus.asp">contact page</a>. Labels are wrapped around the input elements without a "label". The fields are also filled but use javascript to erase it once clicked - I am not sure how that works well with screen readers, but I dont think it is that accessible.  
</dd>
<dt><em>the denial of keyboard access</em></dt>
<dd>They have provided excessive keyboard access. Given that they have ordered the tab indexes as well as providing access keys for navigation links as well as other links (including blank ones for labels). The very idea of changing tab index from the natural order  itself is murky waters. The idea of access keys have got <a href="http://www.wats.ca/show.php?contentid=32">negative reactions</a> <a href="http://www.accessify.com/2005/11/trouble-with-accesskeys.php">from the accessibility community</a> (<a href="http://www.mezzoblue.com/archives/2003/12/29/i_do_not_use/">Dave Shea's comment</a>) (<a href="http://www.456bereastreet.com/archive/200601/giving_the_user_control_over_accesskeys/">alternative suggestions</a>).
</dd>
<dt><em>the requirement that transactions be performed solely with a mouse</em></dt>
<dd>This again is taken care of with "onkeypress" and other inline javascripts. But for usability, the submit button is not focussed when tabbed to or even when focussed with the mouse - so u never know when the "submit" button is active or not.</dd>
<dt><em>lack of navigational links</em></dt>
<dd>This is clearly present, but their "skip to content" link goes to the content below the announcement of the latest event.</dd>
</dl>

The idea is not to criticize their work, but to showcase what has been missed in this race to get accessibility certifications. Having an overdose of access keys or incorrect alt texts is definitely not accessible but it does not get detected in any of the automatic tests (which the website seems to clear). 

Given that they consult the government on accessibility - I think they should have some of these things resolved. If you go to the <a href="http://www.pmo.gov.sg/">Prime Minister's Office website</a>, the headings are actually encapsulated in &lt;font&gt; tags - so the screen reader wont know it is a heading - which if you were able to see the website you would be able to. You might notice the unusual number of &lt;br/ &gt;s are well. 

The Ministry of Community Development, Youth and Sports has a "increase text size" widget slapped on the top as well. Here is what <a href="http://www.456bereastreet.com/archive/200709/scrap_text_resize_widgets_and_teach_people_how_to_resize_text/">Roger Johansson has to say about these text resize widgets</a>:

<blockquote>
<p>
Something that always bugs me is when somebody slaps a text resize widget on their site and calls it "accessible". Job done. Maybe that is a bit unfair since there are many sites that actually are accessible that have a text resize widget, but my non-scientific guess is that a majority of sites that have a feature like that are a long way from being accessible and use a text resizing widget as a band-aid instead of addressing the underlying problem.
</p>
</blockquote>

It is great that we have a committed organization for providing accessibility to singaporeans but the current usage of accessibility techniques in their client websites as well as their own seems like they haven't caught up with the latest accessibility techniques as well as discarding those that are deprecated. While the websites pass the automatic tests, they still are not accessible as well as they could be to a disabled person.
