$(document).ready(function () {


	var speed = 1000;
	var ease = 'easeOutExpo';
	var $wrap_div = $('#wrap>div');

	match_height();
	$(window).on('resize', match_height);

	function match_height() {
		var ht = $(window).height();
		$wrap_div.height(ht);
	};

	$wrap_div.on("mousewheel", function (event, delta) {
		event.preventDefault();

		//마우스 휠을 올렸을때	
		if (delta > 0) {
			console.log('up');
			var prev_target = $(this).prev().offset().top;
			$('html,body').stop().animate({
				'scrollTop': prev_target
			}, speed, ease);

			//마우스 휠을 내렸을때	 
		} else if (delta < 0) {
			console.log('down');
			var next_target = $(this).next().offset().top;
			$('html,body').stop().animate({
				'scrollTop': next_target
			}, speed, ease);
		}
	});

		/*scroll event*/
		$('.con>.sub-bar>ul>.box1>a').click(function () {

			var offset = $('#box1').offset();
	
			$('html').animate({
				scrollTop: offset.top
			}, 300);
	
		});
	
		$('.con>.sub-bar>ul>.box2>a').click(function () {
	
			var offset = $('#box2').offset();
	
			$('html').animate({
				scrollTop: offset.top
			}, 300);
	
		});
		$('.con>.sub-bar>ul>.box3>a').click(function () {
	
			var offset = $('#box3').offset();
	
			$('html').animate({
				scrollTop: offset.top
			}, 300);
	
		});
		$('.con>.sub-bar>ul>.box4>a').click(function () {
	
			var offset = $('#box4').offset();
	
			$('html').animate({
				scrollTop: offset.top
			}, 300);
	
		});
		$('.con>.sub-bar>ul>.box5>a').click(function () {
	
			var offset = $('#box5').offset();
	
			$('html').animate({
				scrollTop: offset.top
			}, 300);
	
		});
	

	/*비디오페이지*/
	$('#wrap > #box1 > .bg_video > .text-box').css('transform', 'translateY(-50%)');
	$('#wrap > #box1 > a').css('transform', 'translateY(-90%)');

	/*swiper*/
	var swiper = new Swiper('.first', {
		slidesPerView: 1,
		spaceBetween: 10,
		// init: false,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			1024: {
				slidesPerView: 5,
				spaceBetween: 50,
			},
		}

	});

	/*box3*/
	var swiper = new Swiper('.second', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	/*box5*/
	/*팝업*/
	var swiper = new Swiper('.third', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	$('#box5>span').click(function () {
		$('#box5>.box5_popup').css('display', 'block');
	})


	$('#box5>.box5_popup>.swiper-container>span').click(function () {
		$('#box5>.box5_popup').css('display', 'none');
	})

})