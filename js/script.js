//slider

var slider = tns({
    container: '.slider-slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    navPosition: 'bottom', 
  });

//menu 
const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        
        menuItem = document.querySelectorAll('.menu__item');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
    hamburger.classList.toggle('hamburger_active');
});



menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });
});

