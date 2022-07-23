'use strict';

const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

$(document).ready(function($) {
    $(".scroll_move").click(function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:$(this,hash).offset().top}, 500);
    });
});