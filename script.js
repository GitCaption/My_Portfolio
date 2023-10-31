/*============menu icon navbar============*/
let menuIcon = document.querySelector('.bx-menu');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*============home section bg opacity fade=========*/

let sectionhomebg = document.querySelector('.home')
let sectionaboutbg = document.querySelector('.about')
window.addEventListener('scroll', function () {
    sectionhomebg.style.opacity = 1 - +window.pageYOffset / 550 + ''
    sectionhomebg.style.top = +window.pageYOffset + 'px'
    sectionhomebg.style.backgroundPositionY = - +window.pageYOffset / 2 + 'px'

})



/*============scroll section active link============*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });


    /*============sticky navbar============*/

    let header = document.querySelector('.header');
    let navbar = document.querySelector('.navbar');


    header.classList.toggle('sticky', window.scrollY > 10);
    window.addEventListener('scroll', ()=>{
        navbar.classList.toggle('sticky', window.scrollY> 10);
    });

    /*============remove menu icon navbar when click navbar link (scroll)============*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}


/*============darkMode icon light============*/
let darkmodeIcon = document.querySelector('#darkMode-icon');

darkmodeIcon.onclick = () => {
    darkmodeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*============scroll reveal============*/

ScrollReveal({
    reset: true,
    distance: '90px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .contact from', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3,.home-content p, .about-content', { origin: 'right' });