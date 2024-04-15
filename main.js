/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
        navToggle = document.getElementById('nav-toggle');
        navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    const linkAction = () => {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu');
    };

    navLinks.forEach(n => n.addEventListener('click', linkAction));
});

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50 ? header.classList.add('blur-header')
                         : header.classList.remove('blur-header');
};

window.addEventListener('scroll', blurHeader);
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350
                ? scrollUp.classList.add('show-scroll')
                : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distace: '60px',
    duration: 3000,
    delay: 400,

})
sr.reveal(`.home__data, .explore__data, .explore__user, .footer__container`)
sr.reveal(`.home__card`, {delay:500, distance:'100px', inteval: 100})
sr.reveal(`.about__data, .join__image`,  {origin:'right', delay: 1000})
sr.reveal(`.about__image, .join__data`, {origin:'left', delay: 1000})
sr.reveal(`.popular__card`, { delay:1500})