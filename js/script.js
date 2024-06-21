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
        item: 3,
        auto: true,
        speed: 1000,
        pause: 2000,
        pauseOnHover: false,
        enableDrag: false,
        onSliderLoad: function() {
            $('#slider').removeClass('cS-hidden');
        } 
    });  
});

$(document).ready(function() {
    $('#autoplay').lightSlider({
        loop:true,
        item: 1,
        auto: true,
        speed: 1000,
        pause: 2000,
        pauseOnHover: false,
        enableDrag: false,
        onSliderLoad: function() {
            $('#autoplay').removeClass('cS-hidden');
        } 
    });  
});


// GSAP Animations
gsap.registerPlugin(ScrollTrigger)

gsap.from('.animate_hero', {
    duration: 0.8,
    opacity: 0,
    x: 150,
    stagger: 0.3
});

gsap.from('.animate_quote', {
    scrollTrigger: '.animate_quote',
    duration: 0.8,
    opacity: 0,
    x: -300,
    stagger: 0.2
});

gsap.from('.animate_icon', {
    scrollTrigger: '.animate_icon',
    duration: 1,
    opacity: 1,
    x: -300,
});

gsap.from('.animate_content', {
    scrollTrigger: '.animate_content',
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.2
});

gsap.from('.animate_lodging', {
    scrollTrigger: '.animate_intro',
    duration: 1,
    opacity: 0
});

gsap.from('.animate_intro', {
    scrollTrigger: '.animate_intro',
    duration: 0.8,
    opacity: 0,
    y: -150,
});


gsap.from('.animate_button', {
    scrollTrigger: '.animate_button',
    duration: 0.8,
    opacity: 0,
    y: -150,
});

gsap.from('.animate_text', {
    scrollTrigger: '.animate_text',
    duration: 0.6,
    opacity: 0,
    x: -150,
    stagger: 0.2
});

gsap.from('.animate_text2', {
    scrollTrigger: '.animate_text2',
    duration: 0.6,
    opacity: 0,
    x: -150,
    stagger: 0.2
});

gsap.from('.animate_card', {
    scrollTrigger: '.animate_card',
    duration: 0.7,
    opacity: 1,
    x: -250,
});

gsap.from('.animate_card2', {
    scrollTrigger: '.animate_card2',
    duration: 1,
    opacity: 0,
    y: -250,
});

gsap.from('.animate_card3', {
    scrollTrigger: '.animate_card3',
    duration: 0.8,
    opacity: 1,
    x: -250,
});

gsap.from('.animate_card4', {
    scrollTrigger: '.animate_card4',
    duration: 0.9,
    opacity: 1,
    x: 100,
});

gsap.from('.animate_products', {
    scrollTrigger: '.animate_products',
    duration: 1,
    opacity: 0,
    y: -200,
    stagger: 0.5
});