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
  
  window.onkeypress = function(e) {
    if(e.keyCode == 37 && previousLink) {
      previousLink.click();
    }
    
    if(e.keyCode == 39 && nextLink) {
      nextLink.click();
    }
  };
}(document));