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

$(document).ready(function() {
    var autoplaySlider = $('#autoplay').lightSlider({
        auto:true,
        item: 1,
        loop: true,
        speed: 1000,
        pause: 3000,
        slideMargin: 1,
        enableDrag: false,
        pauseOnHover: false,
    });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger)

gsap.from('.animate_quote', {
    scrollTrigger: '.animate_quote',
    duration: 1.5,
    opacity: 0.5,
    x: -300,
});

gsap.from('.animate_picture', {
    scrollTrigger: '.animate_picture',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.2
});

gsap.from('.animate_picture2', {
    scrollTrigger: '.animate_picture2',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.2
});

gsap.from('.animate_picture3', {
    scrollTrigger: '.animate_picture3',
    duration: 1,
    opacity: 0,
    x: 150,
    stagger: 0.2
});

gsap.from('.animate_title', {
    scrollTrigger: '.animate_title',
    duration: 0.8,
    opacity: 0,
    y: -150,
});

gsap.from('.animate_title2', {
    scrollTrigger: '.animate_title2',
    duration: 0.8,
    opacity: 0,
    y: 150,
});

gsap.from('.animate_title3', {
    scrollTrigger: '.animate_title3',
    duration: 0.8,
    opacity: 0,
    y: -150,
});

gsap.from('.animate_desc', {
    scrollTrigger: '.animate_desc',
    duration: 0.8,
    opacity: 0,
    x: -300,
    stagger: 0.2
});

gsap.from('.animate_desc2', {
    scrollTrigger: '.animate_desc2',
    duration: 0.8,
    opacity: 0,
    x: -300,
    stagger: 0.2
});

gsap.from('.animate_desc3', {
    scrollTrigger: '.animate_desc3',
    duration: 0.8,
    opacity: 0,
    x: -300,
    stagger: 0.2
});