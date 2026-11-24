(function(){
  var env = document.getElementById('env');
  var landing = document.getElementById('landing');
  var seal = document.getElementById('seal');
  var opened = false;
  document.body.style.overflow = 'hidden';

  function open(){
    if(opened) return; opened = true;
    env.classList.add('open');
    setTimeout(function(){
      landing.classList.add('done');
      document.body.style.overflow = '';
      window.scrollTo(0,0);
    }, 2600);
  }
  seal.addEventListener('click', open);
  env.addEventListener('click', open);
})();