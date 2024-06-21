// More Info
var SeeMore1;
function show_hide1()
{
    if(SeeMore1==1)
        {
            document.getElementById("ContainerSection2-1").style.display="flex";
            $(document).ready(function() {
                var autoplaySlider = $('#autoplay1').lightSlider({
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
            return SeeMore1=0;
        }
    else
        {
            document.getElementById("ContainerSection2-1").style.display="none";
            return SeeMore1=1;
        }    
}

var SeeMore2;
function show_hide2()
{
    if(SeeMore2==1)
        {
            document.getElementById("ContainerSection3-1").style.display="flex";
            $(document).ready(function() {
                var autoplaySlider = $('#autoplay2').lightSlider({
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
            
            return SeeMore2=0;
        }
    else
        {
            document.getElementById("ContainerSection3-1").style.display="none";
            return SeeMore2=1;
        }    
}

var SeeMore3;
function show_hide3()
{
    if(SeeMore3==1)
        {
            document.getElementById("ContainerSection4-1").style.display="flex";
            $(document).ready(function() {
                var autoplaySlider = $('#autoplay3').lightSlider({
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
            
            return SeeMore3=0;
        }
    else
        {
            document.getElementById("ContainerSection4-1").style.display="none";
            return SeeMore3=1;
        }    
}

var SeeMore4;
function show_hide4()
{
    if(SeeMore4==1)
        {
            document.getElementById("ContainerSection5-1").style.display="flex";
            $(document).ready(function() {
                var autoplaySlider = $('#autoplay4').lightSlider({
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
            
            return SeeMore4=0;
        }
    else
        {
            document.getElementById("ContainerSection5-1").style.display="none";
            return SeeMore4=1;
        }    
}

var SeeMore5;
function show_hide5()
{
    if(SeeMore5==1)
        {
            document.getElementById("ContainerSection6-1").style.display="flex";
            $(document).ready(function() {
                var autoplaySlider = $('#autoplay5').lightSlider({
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
            
            return SeeMore5=0;
        }
    else
        {
            document.getElementById("ContainerSection6-1").style.display="none";
            return SeeMore5=1;
        }    
}



// Mobile menu Function

const menu = document.querySelector('#mobile_menu');
const navMenu = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

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
