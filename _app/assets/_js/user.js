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

  // Init Tippy tooltips
  tippy.setDefaultProps({
    allowHTML: true,
    arrow: true,
    theme: 'dark',
  });

  const tippySingletonOptions = {
    delay: 500,
    // TODO: doesn't work smooth enough
    // moveTransition: 'transform .4s cubic-bezier(0.22, 1, 0.36, 1) 0s',
  }

  const tagTippies = tippy('.tag');
  tippy.createSingleton(tagTippies, tippySingletonOptions);

  const specLinkTippies = tippy('.of-spec-link');
  tippy.createSingleton(specLinkTippies, tippySingletonOptions);

  const demoTippies = tippy('.demo', {
    onCreate(instance) {
      instance.setProps({
        placement: instance.reference.parentNode.classList.contains('demos-multiline') ? 'left' : 'top'
      })
    },
  });
  tippy.createSingleton(demoTippies, { ...tippySingletonOptions, overrides: ['placement']});
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
