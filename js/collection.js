$(document).ready(function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

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