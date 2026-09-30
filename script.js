const nav=document.getElementById('nav');const menu=document.querySelector('.menu');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>40));
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
