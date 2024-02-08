
let burgerBtn = document.querySelector('.burger__container');
let menuBtn = document.querySelector('.header__menu');
let lineOne = document.querySelector('.burger__line1');
let lineTwo = document.querySelector('.burger__line2');
let lineThree = document.querySelector('.burger__line3');
let headerInner = document.querySelector('.header-inner');
let body = document.querySelector('body');
burgerBtn.addEventListener('click',function(){
    menuBtn.classList.toggle('burgerBtn-active');
    burgerBtn.classList.toggle('burgerBtn-active');
    lineOne.classList.toggle('burger__active');
    lineTwo.classList.toggle('burger__active');
    lineThree.classList.toggle('burger__active');
    headerInner.classList.toggle('burger__active');
    body.classList.toggle('burger__active')

});