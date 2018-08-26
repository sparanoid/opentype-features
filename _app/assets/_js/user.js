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
  var tags = document.querySelectorAll('.tag, abbr, .of-spec-link, .demo > span');
  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    tippy(tag, {
      placement: tag.parentNode.classList.contains('demo-multiline') ? 'left' : 'top',
      arrow: true,
      arrowType: 'sharp',
      arrowTransform: 'scale(0.7)',
      offset: '0, 8',
      theme: 'dark',
      animation: false,
      duration: 0,
      delay: 0
    });
  }
});
