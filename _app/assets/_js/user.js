// Custom user scripts
// TypeKit fonts
(function(d) {
  var config = {
    kitId: 'yfh1rhp',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

// Tooltips
document.addEventListener('DOMContentLoaded', function(){
  var tags = document.querySelectorAll('.tag, .of-spec-link, .demo');
  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    tippy(tag, {
      placement: tag.parentNode.classList.contains('demos-multiline') ? 'left' : 'top',
      arrow: true,
      flip: true,
      arrowType: 'sharp',
      distance: 18,
      theme: 'dark',
      animation: false,
      duration: 0,
      delay: 0
    });
  }
});

// Gumshoe
var spy = new Gumshoe('.feature-list a', {
  offset: 50,
  reflow: true
});
document.addEventListener('gumshoeActivate', function(event) {
  var id = event.detail.content.id;
  console.log(id);
  
  window.history.replaceState(
    'data', 'title', location.origin + location.pathname + '#' + id
  );
}, false);
