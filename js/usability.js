
let burger = document.querySelector('.burger__content');
let menu = document.querySelector('.header__list');
let lineOne = document.querySelector('.burger__line1');
let lineTwo = document.querySelector('.burger__line2');
let lineThree = document.querySelector('.burger__line3');
let body = document.querySelector('body');
let headerInner = document.querySelector('.header-inner');

burger.addEventListener('click', function(){
    menu.classList.toggle('burger__active');
    burger.classList.toggle('burger__active');
    lineOne.classList.toggle('burger__active');
    lineTwo.classList.toggle('burger__active');
    lineThree.classList.toggle('burger__active');
    body.classList.toggle('burger__active');
    headerInner.classList.toggle('burger__active');

});
wow = new WOW(
    {
        boxClass: 'wow',      // default
        animateClass: 'animate__animated', // default
        offset: 0,          // default
        mobile: true,       // default
        live: true        // default
    }
)
wow.init();