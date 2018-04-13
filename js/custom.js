
$(document).ready(function(){


var burger = document.querySelector(".header__nav__burger"),
    closemenu = document.querySelector(".modal__leftmenu__close"),
    menu = document.querySelector(".modal__leftmenu"),
    video = document.querySelector(".modal__video"),
    wachvideo = document.querySelector(".welcome__text__videobutton"),
    closevideo = document.querySelector(".modal__video__close"),
    header = document.querySelector("#header"),    
    toggle_plan = document.querySelector("#choseplan__form"),
    busines_plan = document.querySelector("#comerce_plan_toggle"),
    individual_plan = document.querySelector("#individual_plan_toggle"),
    individual_box = document.getElementById("#yourplan__individual__box"),
    busines_box = document.getElementById("#yourplan__company__box"), 
    ind__box__right = document.getElementById("#ind__box__right"),    
    ind__box__left = document.querySelector("#ind__box__left"),
    bus__box__right = document.getElementById("#bus__box__right"),    
    bus__box__left = document.getElementById("#bus__box__left");



    burger.addEventListener("click", function(event){ 
        menu.classList.remove("hiden");
        event.preventDefault();
    });
    closemenu.addEventListener("click", function(event) { 
        menu.classList.add("hiden");
        event.preventDefault();
    });
    wachvideo.addEventListener("click", function(event) {
        video.classList.remove("hiden");
        event.preventDefault();
    });
    closevideo.addEventListener("click", function(event) {
        video.classList.add("hiden");    
        event.preventDefault();
    });
    bus__box__left.addEventListener("click", function(event) {
        this.classList.add("yourplan__plan__box-active");
        bus__box__right.classList.remove("yourplan__plan__box-active");
    });
    bus__box__right.addEventListener("click", function(event) {

        this.classList.add("yourplan__plan__box-active");
        bus__box__left.classList.remove("yourplan__plan__box-active");
    });
    ind__box__left.addEventListener("click", function(event) {
        this.classList.add("yourplan__plan__box-active");
        ind__box__right.classList.remove("yourplan__plan__box-active");
    });
    ind__box__right.addEventListener("click", function(event) {

        this.classList.add("yourplan__plan__box-active");
        ind__box__left.classList.remove("yourplan__plan__box-active");
    });







toggle_plan.addEventListener("click", function(){
    var plan = individual_plan.checked;
    if(plan){
        busines_box.classList.add('hiden');
        individual_box.classList.remove('hiden');
    }
    else{ 
        busines_box.classList.remove('hiden');
        individual_box.classList.add('hiden');
    }
});



    $(window).scroll(function(){
        if($(window).scrollTop() > 150){
            header.classList.add("header__active");
        }
        else{    
            header.classList.remove("header__active");
        }

    });
    $('.comments__slider').slick({
        dots: true,
        autoplay: true,
        arrows: true,
    });
});