/*
* matchMedia() polyfill - test whether a CSS media type or media query applies
* authors: Scott Jehl, Paul Irish, Nicholas Zakas
* Copyright (c) 2011 Scott, Paul and Nicholas.
* Dual MIT/BSD license
*/


window.matchMedia = window.matchMedia || (function(doc, undefined){
  
  var bool,
      docElem  = doc.documentElement,
      refNode  = docElem.firstElementChild || docElem.firstChild,
      // fakeBody required for <FF4 when executed in <head>
      fakeBody = doc.createElement('body'),
      div      = doc.createElement('div');
  
  div.id = 'mq-test-1';
  div.style.cssText = "position:absolute;top:-100em";
  fakeBody.appendChild(div);
  
  return function(q){
    
    div.innerHTML = '&shy;<style media="'+q+'"> #mq-test-1 { width: 42px; }</style>';
    
    docElem.insertBefore(fakeBody, refNode);
    bool = div.offsetWidth == 42;  
    docElem.removeChild(fakeBody);
    
    return { matches: bool, media: q };
  };
  
})(document);



// iOS scaling bug fix
// Rewritten version
// By @mathias, @cheeaun and @jdalton
// Source url: https://gist.github.com/901295
(function(doc) {
  var addEvent = 'addEventListener',
      type = 'gesturestart',
      qsa = 'querySelectorAll',
      qs = 'querySelector',
      scales = [1, 1],
      meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [],
      previousLink = qs in doc ? doc[qs]('.article .previous') : null,
      nextLink = qs in doc ? doc[qs]('.article .next') : null;
  function fix() {
    meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
    doc.removeEventListener(type, fix, true);
  }
  if ((meta = meta[meta.length - 1]) && addEvent in doc) {
    fix();
    scales = [0.25, 1.6];
    doc[addEvent](type, fix, true);
  }
  
  window.onkeyup = function(e) {
    if(e.keyCode == 37 && previousLink) {
      window.location = previousLink.href;
    }
    
    if(e.keyCode == 39 && nextLink) {
      window.location = nextLink.href;      
    }
  };
  
  if(document.body.classList.contains('viz')) {
    if(window.matchMedia("(min-width: 800px)").matches) {
      var iframe = document.createElement('iframe');
      iframe.setAttribute("width", document.body.clientWidth);
      iframe.src="http://nimbupani.com/viz/ebbflow.html";   
      document.body.appendChild(iframe);       
    }
  }
}(document));
