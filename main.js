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

var typingEnd =false;
function typingStart() {
    if(!typingEnd) {
        var typingBool = false;
        var typingIdx = 0;
        var typingTxt = $("#typing-txt").val();
        typingTxt = typingTxt.split("");
        if(typingBool == false) {
            typingBool = true;

            var tyInt = setInterval(typing, 100);
        }

        function typing() {
            if(typingIdx < typingTxt.length) {
                $("#typing").append(typingTxt[typingIdx]);
                typingIdx++;
            } else {
                clearInterval(tyInt);
                typingEnd = true;
            }
        }
    }
}