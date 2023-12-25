const nav = document.querySelector('nav');
window.addEventListener('scroll', function(){
  let verticalScroll = window.scrollY;
  if ((verticalScroll) > 100) {
    nav.classList.add('scroll')
  }else{
    nav.classList.remove('scroll')
  }
})





