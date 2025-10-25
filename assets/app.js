
// Simple demo switcher + mock tools for the iframe-less quick tests
document.addEventListener('click', (e)=>{
  const t = e.target;
  if(t.matches('[data-scroll]')){
    document.querySelector(t.getAttribute('data-scroll')).scrollIntoView({behavior:'smooth'});
  }
});

