var nav = document.querySelector('nav'),
    navLinks = document.querySelectorAll('.nav__menu ul li'),
    sections = document.querySelectorAll('header, section'),
    textarea = document.querySelector('textarea');

document.addEventListener('scroll', function() {
    var scroll = window.scrollY;
    
    sections.forEach(function(section, index) {
        if (scroll >= (section.offsetTop - 64)) {
            navLinks.forEach(function(link, index) {
                link.classList.remove('active');
            });
            navLinks[index].classList.add('active');
            if(index % 2 == 0) {
                nav.classList.remove('light');
                nav.classList.add('dark');
            } else {
                nav.classList.remove('dark');
                nav.classList.add('light');
            }
        }
    });

    if (scroll > 0) {
        nav.classList.add('scrolled');
    }
    else {
        nav.classList.remove('scrolled');
    }
});

$(document).ready(function(){
/* Animated scroll */
    $('.scrollTo').click(function() {
        var page = $(this).attr('dest');
        var speed = 750; 
        if (page == "#") {
            $('html, body').animate( { scrollTop: 0 }, speed );
        }
        else {
            $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
        }
        $('.nav__hamburger, .nav__menu').removeClass('active');
        return false;
    });

    $('.nav__hamburger').click(function() {
        if ($(window).scrollTop() == 0) {
            $('nav').toggleClass('scrolled');
        }
        $(this).toggleClass('active');
        if ($('.nav__menu').hasClass('active')) {
            $('.nav__menu').removeClass('active');
        } else {
            $('.nav__menu').addClass('active');
        }
    });
});