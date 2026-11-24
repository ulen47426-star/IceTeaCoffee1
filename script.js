function route(){
  var h=location.hash.slice(1);
  var view=(h==='menu'||h=='photo' )? h:'home' ;

  document.querySelectorAll('[data-view]').forEach(function(el){
    el.hidden=el.dataset.view!==view;
  });
  if(h==='menu'||h=='photo') {window.scrollTo(0,0);}
  else if(h&&h!=='top'){
    var t=document.getElementById(h);
    if(t)t.scrollIntoView();
  }
  else{window.scrollTo(0,0);}
}
function openMap(){
  window.open("https://www.google.com/maps/place/%E1%9E%80%E1%9F%92%E1%9E%9A%E1%9E%BC%E1%9E%85%E1%9E%86%E1%9F%92%E1%9E%98%E1%9E%B6%E1%9E%85%E1%9F%86%E1%9E%80%E1%9E%B6%E1%9E%9A%E1%9E%9F%E1%9F%92%E1%9E%9A%E1%9F%82/@11.0453452,104.7828573,18.06z/data=!4m6!3m5!1s0x31097788301396d7:0x23013feb207504d4!8m2!3d11.045545!4d104.78213!16s%2Fg%2F11gv0x1c1k?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D")
}
window.addEventListener('hashchange',route);
route();