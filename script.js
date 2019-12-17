const burger = document.querySelector('.burger'); 
const navLinks = document.querySelector('.nav-links')


burger.addEventListener('click' , showNav); 

function showNav(){
    navLinks.classList.toggle('active-nav')
}