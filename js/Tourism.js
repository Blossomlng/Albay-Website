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
gsap.from('.section2', {
    scrollTrigger: '.section2',
    duration: 2,
    opacity: 0,
    y: 50,
    stagger: 0.2
});

gsap.from('.carousel', {
    scrollTrigger: '.carousel',
    duration: 2,
    opacity: 0,
    x: 500,
    stagger: 0.2
});

gsap.from('.carousel2', {
    scrollTrigger: '.carousel2',
    duration: 2,
    opacity: 0,
    x: -500,
    stagger: 0.2
});

gsap.from('.one', {
    scrollTrigger: '.first',
    duration: 3,
    opacity: 0,
    x: -500,
    stagger: 0.2
});
gsap.from('.two', {
    scrollTrigger: '.first',
    duration: 3,
    opacity: 0,
    x: -500,
    stagger: 0.2
});
gsap.from('.three', {
    scrollTrigger: '.first',
    duration: 3,
    opacity: 0,
    x: -500,
    stagger: 0.2
});
gsap.from('.four', {
    scrollTrigger: '.first',
    duration: 3,
    opacity: 0,
    x: 500,
    stagger: 0.2
});
gsap.from('.five', {
    scrollTrigger: '.first',
    duration: 3,
    opacity: 0,
    x: 500,
    stagger: 0.2
});
gsap.from('.one2', {
    scrollTrigger: '.second',
    duration: 3,
    opacity: 0,
    x: -500,
    stagger: 0.2
});
gsap.from('.three2', {
    scrollTrigger: '.second',
    duration: 3,
    opacity: 0,
    x: -500,
    stagger: 0.2
});
gsap.from('.six2', {
    scrollTrigger: '.second',
    duration: 3,
    opacity: 0,
    x: -500,
    stagger: 0.2
});
gsap.from('.two2', {
    scrollTrigger: '.second',
    duration: 3,
    opacity: 0,
    y: 100,
    stagger: 0.2
});
gsap.from('.four2', {
    scrollTrigger: '.second',
    duration: 3,
    opacity: 0,
    y: 100,
    stagger: 0.2
});
gsap.from('.one3', {
    scrollTrigger: '.third',
    duration: 3,
    opacity: 0,
    x: -500,
    stagger: 0.2
});
gsap.from('.two3', {
    scrollTrigger: '.third',
    duration: 3,
    opacity: 0,
    x: 500,
    stagger: 0.2
});
gsap.from('.three3', {
    scrollTrigger: '.third',
    duration: 3,
    opacity: 0,
    x: 500,
    stagger: 0.2
});
gsap.from('.five3', {
    scrollTrigger: '.third',
    duration: 3,
    opacity: 0,
    y: 100,
    stagger: 0.2
});
gsap.from('.one4', {
    scrollTrigger: '.fourth',
    duration: 3,
    opacity: 0,
    x: 500,
    stagger: 0.2
});
gsap.from('.two4', {
    scrollTrigger: '.fourth',
    duration: 3,
    opacity: 0,
    x: -500,
    stagger: 0.2
});
gsap.from('.five4', {
    scrollTrigger: '.fourth',
    duration: 3,
    opacity: 0,
    x: -500,
    stagger: 0.2
});
gsap.from('.six4', {
    scrollTrigger: '.fourth',
    duration: 3,
    opacity: 0,
    x: -500,
    stagger: 0.2
});
gsap.from('.four4', {
    scrollTrigger: '.fourth',
    duration: 3,
    opacity: 0,
    y: 100,
    stagger: 0.2
});
gsap.from('.ContactFormSection', {
    scrollTrigger: '.ContactFormSection',
    duration: 1,
    opacity: 0,
    y: 150,
    stagger: 0.2
});