var menu_burger = document.querySelector('.menu-burger');
var close = document.querySelector('.x');
var burger = document.querySelector('.burger');



function displayMenu() {
    menu_burger.classList.toggle('visible');
    burger.classList.toggle('invisible');
}

//events on click
burger.addEventListener('click', displayMenu);
close.addEventListener('click', displayMenu);