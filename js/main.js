$(document).ready(function(){

    $('#owl1').owlCarousel({

        loop:true,

        autoplay:true,
        autoplayTimeout:6000,

        margin:0,

        nav:true,

        responsive:{

            0:{

                items:1

            }

        }
        

    });

});


$('.con > .sub_page > .go_instagram > ul > .cell').click(function(){
    $('.con > .sub_page > .go_instagram > .pop-up-bg').css('display', 'block');
    
    if ($(this).hasClass('pic1')) {
        $('.con > .sub_page > .go_instagram > .insta1').css('display','block');
    }
    if ($(this).hasClass('pic2')) {
        $('.con > .sub_page > .go_instagram > .insta2').css('display','block');
    }
    if ($(this).hasClass('pic3')) {
        $('.con > .sub_page > .go_instagram > .insta3').css('display','block');
    }
    if ($(this).hasClass('pic4')) {
        $('.con > .sub_page > .go_instagram > .insta4').css('display','block');
    }
    if ($(this).hasClass('pic5')) {
        $('.con > .sub_page > .go_instagram > .insta5').css('display','block');
    }
    if ($(this).hasClass('pic6')) {
        $('.con > .sub_page > .go_instagram > .insta6').css('display','block');
    }


})

$('.con > .sub_page > .go_instagram > .pop-up > i').click(function(){
    $('.con > .sub_page > .go_instagram > .pop-up-bg').css('display', 'none');
    $('.con > .sub_page > .go_instagram > .pop-up').css('display','none');
})


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


/* 햄버거버튼 */

$('.menu-trigger').click(function(){
    $(this).toggleClass('active');
    if ($('.con>.top-bar>.logo-box>a').hasClass('active')) {
        $('.con>.top-bar>.menu-bar').css('display','block');
    }
    else {
        $('.con>.top-bar>.menu-bar').css('display','none');
    }
    event.preventDefault();
    event.stopPropagation();   
});