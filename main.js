// for toggle button 

dashes = document.querySelector('.dashes')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightNav = document.querySelector('.rightNav')


dashes.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})