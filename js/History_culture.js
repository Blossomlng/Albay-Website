const menu = document.querySelector('#mobile_menu');
const navMenu = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

// Mobile menu Function
function mobileMenu() {
    menu.classList.toggle('is-active');
    navMenu.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Close Mobile menu
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.remove('is-active');
        navMenu.classList.remove('active');
    }
};

navMenu.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);


// Enable lightslider script on document
$(document).ready(function() {
    $('#slider').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#slider').removeClass('cS-hidden');
        } 
    });
});



// GSAP Animations
gsap.registerPlugin(ScrollTrigger)


gsap.from('.section2', {
    scrollTrigger: '.section2',
    duration: 3,
    opacity: 0,
    x: -150,
    stagger: 0.3
});

gsap.from('.section3', {
    scrollTrigger: '.section3',
    duration: 3,
    opacity: 0,
    y: -300,
    stagger: 0.2
});


gsap.from('.sub1', {
    scrollTrigger: '.sub1',
    duration: 3,
    opacity: 1,
    x: -500,
});

gsap.from('.sub2', {
    scrollTrigger: '.sub2',
    duration: 3,
    opacity: 0,
    x: 500,
    stagger: 0.2
});

gsap.from('.sub3', {
    scrollTrigger: '.sub3',
    duration: 3,
    opacity: 0,
    x: -500,
    stagger: 0.2
});

gsap.from('.ContactFormSection', {
    scrollTrigger: '.ContactFormSection',
    duration: 3,
    opacity: 0,
    y: 150,
    stagger: 0.2
});

gsap.from('.culsection2', {
    scrollTrigger: '.section2',
    duration: 3,
    opacity: 0,
    x: -150,
    stagger: 0.3
});

gsap.from('.culsection3', {
    scrollTrigger: '.culsection3',
    duration: 3,
    opacity: 0,
    y: -300,
    stagger: 0.2
});

gsap.from('.culsub1', {
    scrollTrigger: '.culsub1',
    duration: 3,
    opacity: 1,
    x: -500,
});

gsap.from('.culsub2', {
    scrollTrigger: '.culsub2',
    duration: 3,
    opacity: 0,
    x: 500,
    stagger: 0.2
});

gsap.from('.culsub3', {
    scrollTrigger: '.culsub3',
    duration: 3,
    opacity: 0,
    x: -500,
    stagger: 0.2
});
gsap.from('.culsection5', {
    scrollTrigger: '.culsection5',
    duration: 3,
    opacity: 0,
    y: -90,
    stagger: 0.2
});

gsap.from('.culsub4', {
    scrollTrigger: '.culsub4',
    duration: 3,
    opacity: 1,
    x: -500,
});

gsap.from('.culsub5', {
    scrollTrigger: '.culsub5',
    duration: 3,
    opacity: 0,
    x: 500,
    stagger: 0.2
});

gsap.from('.culsub6', {
    scrollTrigger: '.culsub6',
    duration: 3,
    opacity: 0,
    x: -500,
    stagger: 0.2
});