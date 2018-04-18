var nav = document.querySelector('nav'),
    navLinks = document.querySelectorAll('.nav__menu ul li'),
    sections = document.querySelectorAll('header, section'),
    servicesBg = document.querySelector('.services-background'),
    services = document.querySelectorAll('.service-item'),
    serviceDesc = [
        {description: 'Soyez vu sur internet avec un site vitrine.<br>Mettez en avant votre marque, vos produits ou vos services !', subject: 'un site vitrine'},
        {description: 'Vendez vos produits sur internet et augmentez votre visibilité et vos revenus grâce à un site e-commerce.<br>Ce dernier sera fait sur mesure pour votre business.', subject: 'un site e-commerce'},
        {description: 'Un blog est le meilleur de moyen de s\'exprimer sur internet.<br>Partagez vos idées, vos découvertes ou tout ce qui vous chante dans un univers à votre image.', subject: 'un blog'},
        {description: 'Donnez vie à votre projet grâce aux technologies qu\'offre le web.<br>C\'est un moyen rapide et facile pour atteindre votre cible.' , subject: 'une application web'},
        {description: 'Profitez de la puissance et des fonctionnalités qu\'offrent les périphériques en créant votre application native<br>pour ordinateurs ou dispositifs mobiles.', subject: 'une application native'},
        {description: 'Soyez vu sur internet avec un site vitrine.<br>Mettez en avant votre marque, vos produits ou vos services !', subject: 'un site vitrine'},
        {description: 'Vendez vos produits sur internet et augmentez votre visibilité et vos revenus grâce à un site e-commerce.<br>Ce dernier sera fait sur mesure pour votre business.', subject: 'un site e-commerce'},
        {description: 'Un blog est le meilleur de moyen de s\'exprimer sur internet.<br>Partagez vos idées, vos découvertes ou tout ce qui vous chante dans un univers à votre image.', subject: 'un blog'},
        {description: 'Donnez vie à votre projet grâce aux technologies qu\'offre le web.<br>C\'est un moyen rapide et facile pour atteindre votre cible.' , subject: 'une application web'},
        {description: 'Profitez de la puissance et des fonctionnalités qu\'offrent les périphériques en créant votre application native<br>pour ordinateurs ou dispositifs mobiles.', subject: 'une application native'}
    ],
    serviceDescContainer = document.querySelector('.service-description'),
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

services.forEach(function(elem, index) {
    var service = serviceDesc[index],
        name = elem.querySelector('h4').innerHTML,
        description = service.description,
        imageSrc = elem.querySelector('img').getAttribute('src'),
        message = "Bonjour Pierre,__Je serais intéressé(e) par la création d\'"+service.subject+".__Merci de me recontacter !_Cordialement";
    
        elem.addEventListener('mouseover', function() {
            services.forEach(function(e, i) {
                e.classList.remove('active');
            })
            elem.classList.add('active');
            servicesBg.style.backgroundImage = "url("+imageSrc+")";
            servicesBg.style.animationName = "slide";
            servicesBg.style.animationDuration = '0.3s';
            servicesBg.style.animationFillMode = 'forwards';
            servicesBg.style.animationTimingFunction = 'ease';

            updateServiceDesc(description, message);
        });
        elem.addEventListener('mouseleave', function() {
            servicesBg.style.animationName = '';
            servicesBg.style.animationDuration = '';
            servicesBg.style.animationFillMode = '';
            servicesBg.style.animationTimingFunction = '';
        });
});

function updateServiceDesc(desc, message) {
    var descToUpdate = serviceDescContainer.querySelector('p'),
        buttonToUpdate = serviceDescContainer.querySelector('button');
    
    descToUpdate.innerHTML = desc;
    buttonToUpdate.setAttribute('message', ''+message+'');
}

$(document).ready(function(){
/* Animated scroll */
    $('.scrollTo').click(function() {
        var page = $(this).attr('dest');
        var speed = 750; 
        if (page == "#") {
            $('html, body').animate( { scrollTop: 0 }, speed );
        }
        else {
            if ($(this).attr('message') != undefined) {
                var text = $(this).attr('message').replace(/_/g, '\n');
                $('textarea').val(text);
            }
            else {
                $('textarea').val('');
            }
            $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
        }
        return false;
    });
});