let oScroll = $(document).scrollTop();

function intLogo(oScroll) {
	if (oScroll > 0) {
		$('.header').addClass("header-active");
	} else {
		$('.header').removeClass("header-active");
	}
}
intLogo(oScroll);
// 

$(window).scroll(function(e) {
	let oScroll = $(document).scrollTop();
	// console.log(oScroll);
	intLogo(oScroll);

});


// 移动端
function clearTouch(el, oStyle) {
	$(el).css('overflow', oStyle);
	$(el).on("touchmove", function(e) {
		e.preventDefault;
	})
}

$('.navbar').click(function() {
	$('.burger-bg').removeClass('burger-bg-active');
	clearTouch("body", "hidden")
})


$('.close-burger').click(function() {
	$('.burger-bg').addClass('burger-bg-active');
	clearTouch("body", "auto")
})




$('.burger-nav-lists>li').click(function(e) {
	if ($(this).find('.burger-nav-f1').length > 0) {
		if ($(this).find('.burger-nav-f1').css('display') == 'none') {
			// 菜单展开
			$(this).find(".burger-nav-f1").slideDown(200);
			// 其他菜单收起
		} else {
			$(this).find(".burger-nav-f1").slideUp(200);
			$(this).find(".burger-nav-f1").slideUp(200)
			$(this).find(".burger-nav-f2").slideUp(200)
		}


	} else {}
})

$('.burger-nav-f1>li').click(function(e) {
	e.stopPropagation();
	if ($(this).find('.burger-nav-f2').length > 0) {

		if ($(this).find('.burger-nav-f2').css('display') == 'none') {
			$(this).find(".burger-nav-f2").slideDown(200);

		} else {
			$(this).find(".burger-nav-f2").slideUp(200);
		}

	} else {

	}
})


var pageCaseBottom = new Swiper(".seo-coug .swiper", {
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 10,
	loop: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	navigation: {
		nextEl: ".seo-coug .swiper-button-next",
		prevEl: ".seo-coug .swiper-button-prev",
	},
	breakpoints: {
		480: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		640: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		768: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		860: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		1200: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 20,
		},
		1400: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 20,
		},
		1600: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 20,
		},
	}
});

$('.about-core ul.flex > li').mouseover(function() {
	$(this).addClass('active').siblings('').removeClass('active');
})


$(".footer-li h3").on("click",function(){
	
	if($(this).hasClass("footer-li-active")){
		$(this).removeClass("footer-li-active")
		$(this).next('ul').hide()
	}else{
		$(this).addClass("footer-li-active")
		$(this).next('ul').show()
	}
	

})

var pageCaseBottom = new Swiper(".page-b2b-bottom", {
	slidesPerView: 2,
	spaceBetween: 20,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	breakpoints: {
		480: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		640: {
			slidesPerView: 2.5,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3.5,
			spaceBetween: 20,
		},
		860: {
			slidesPerView: 4.5,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 5.5,
			spaceBetween: 20,
		},
		1400: {
			slidesPerView: 6.5,
			spaceBetween: 20,
		},
		1600: {
			slidesPerView: 7.5,
			spaceBetween: 20,
		},
	}
});

var pageCaseTop = new Swiper(".page-b2b-top", {
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: true,
	},
	navigation: {
		nextEl: ".page-b2b-top .swiper-button-next",
		prevEl: ".page-b2b-top .swiper-button-prev",
	},
	thumbs: {
		swiper: pageCaseBottom
	}
});

var pageCaseBottom1 = new Swiper(".page-b2c-bottom", {
	slidesPerView: 2,
	spaceBetween: 20,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	breakpoints: {
		480: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		640: {
			slidesPerView: 2.5,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3.5,
			spaceBetween: 20,
		},
		860: {
			slidesPerView: 4.5,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 5.5,
			spaceBetween: 20,
		},
		1400: {
			slidesPerView: 6.5,
			spaceBetween: 20,
		},
		1600: {
			slidesPerView: 7.5,
			spaceBetween: 20,
		},
	}
});

var pageCaseTop1 = new Swiper(".page-b2c-top", {
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: true,
	},
	navigation: {
		nextEl: ".page-b2c-top .swiper-button-next",
		prevEl: ".page-b2c-top .swiper-button-prev",
	},
	thumbs: {
		swiper: pageCaseBottom1
	}
});

var videoSeo = new Swiper(".video-swiper .swiper", {
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: true,
	},
	navigation: {
		nextEl: ".video-swiper .swiper-button-next",
		prevEl: ".video-swiper .swiper-button-prev",
	},
});

var swiperResults = new Swiper('.slideshow-results .swiper', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,
	autoplay: true,
	coverflowEffect: {
		rotate: 0,
		stretch: 10,
		depth: 100,
		modifier: 1,
		// slideShadows : true,
	},
	pagination: {
		el: '.swiper-pagination-results',
	},
});


var swiperCase = new Swiper('.xiao-case-swiper .swiper ', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,
	autoplay: true,
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 150,
		modifier: 1,
		slideShadows : true,
	},
	pagination: {
		el: '.xiao-case-swiper .swiper-pagination-case',
	},
});

$(".page-case-thead ul li").eq(0).addClass("on");
$(".page-case-tbody .page-case-tbody-item").eq(0).show();
$(".page-case-thead ul li").on("click", function() {
	$(this).addClass("on").siblings().removeClass("on")
	$(".page-case-tbody .page-case-tbody-item").eq($(this).index()).show().siblings().hide()
})


$(".wechat-service-l .wechat-service-item").eq(0).addClass("active");
$(".wechat-service-r img").eq(0).show();
$(".wechat-service-l .wechat-service-item").on("click", function() {
	$(this).addClass("active").siblings().removeClass("active")
	$(".wechat-service-r img").eq($(this).index()).show().siblings().hide()
})


new WOW().init();
// function mycheckWidth() {
// 	let html = [];
// 	let papeWidth = $(window).width();
// 	if ($(".checkWidth")) {
// 		$(".checkWidth").remove()
// 	}
// 	html =
// 		'<style> .checkWidth { position: fixed; top: 0; left: 0; z-page: 999; padding: 5px; background-color: rgba(0, 0, 0, .5); color: #fff; font-size: 16px; } </style><div class="checkWidth">' +
// 		papeWidth + '</div>';
// 	$("body").append(html)
// }
// mycheckWidth()
// $(window).resize(function() {
// 	mycheckWidth()
// })