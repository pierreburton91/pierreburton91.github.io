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

navLinks.forEach(function(link, index) {
    link.addEventListener('click', function() {
        var toScroll = sections[index].offsetTop;
        window.scrollTo(0, toScroll);
    });
});

function scrollToContact(message) {
    if (message) {
        textarea.value = message.replace(/_/g, '\n');
    }
    else {
        textarea.value = "";
    }
    navLinks[3].click();
}

services.forEach(function(elem, index) {
    var service = serviceDesc[index],
        name = elem.querySelector('h4').innerHTML,
        imageSrc = elem.querySelector('img').getAttribute('src'),
        description = service.description,
        message = "Bonjour Pierre,__Je serais intéressé(e) par la création d\'"+service.subject+".__Merci de me recontacter !_Cordialement";
    
    var descToUpdate = serviceDescContainer.querySelector('p'),
        buttonToUpdate = serviceDescContainer.querySelector('button');

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

            descToUpdate.innerHTML = description;
            buttonToUpdate.setAttribute('onclick', 'scrollToContact("'+message+'")');
        });
        elem.addEventListener('mouseleave', function() {
            servicesBg.style.animationName = '';
            servicesBg.style.animationDuration = '';
            servicesBg.style.animationFillMode = '';
            servicesBg.style.animationTimingFunction = '';
        });
});