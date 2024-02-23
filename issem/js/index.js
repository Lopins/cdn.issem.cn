// banner
let bannerSwiper = new Swiper('.index-banenr-swiper .swiper', {
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: true,
	},
	pagination: {
		el: ".index-banenr-swiper .swiper-pagination",
		clickable: true,
	},
	speed: 500,
	// mousewheel: false,
});
// business
let businessSwiper = new Swiper('.index-business-swiper', {
	effect: 'fade',
	// direction: 'horizontal',
	noSwiping: true,
	speed: 500,
	mousewheel: false,

});



var indexCaseBottom = new Swiper(".index-b2b-bottom", {
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

var indexCaseTop = new Swiper(".index-b2b-top", {
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: true,
	},
	navigation: {
		nextEl: ".index-b2b-top .swiper-button-next",
		prevEl: ".index-b2b-top .swiper-button-prev",
	},
	thumbs: {
		swiper: indexCaseBottom
	}
});

var indexCaseBottom1 = new Swiper(".index-b2c-bottom", {
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

var indexCaseTop1 = new Swiper(".index-b2c-top", {
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: true,
	},
	navigation: {
		nextEl: ".index-b2c-top .swiper-button-next",
		prevEl: ".index-b2c-top .swiper-button-prev",
	},
	thumbs: {
		swiper: indexCaseBottom1
	}
});
(function($) {
	$(".index-case-thead ul li").eq(0).addClass("on");
	$(".index-case-tbody .index-case-tbody-item").eq(0).show();
	$(".index-case-thead ul li").on("click", function() {
		$(this).addClass("on").siblings().removeClass("on")
		$(".index-case-tbody .index-case-tbody-item").eq($(this).index()).show().siblings().hide()
	})

	$(".index-marketing-left ul li").eq(0).addClass("on");
	$(".index-marketing-right .index-marketing-item").eq(0).show();
	$(".index-marketing-left ul li").on("click", function() {
		$(this).addClass("on").siblings().removeClass("on")
		$(".index-marketing-right .index-marketing-item").eq($(this).index()).show().siblings().hide()
	})

	var indexMarketingDesc = new Swiper(".index-marketing-desc .swiper", {
		slidesPerView: 1,
		spaceBetween: 20,
		pagination: {
			el: ".index-marketing-desc .swiper-pagination",
		},
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		autoplay: {
			delay: 3000,
			stopOnLastSlide: false,
			disableOnInteraction: true,
		},
		breakpoints: {
			640: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},

			1400: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		}
	});
	$(".index-banenr-arr").on("click", function() {
		$("html,body").animate({
			scrollTop: $("#next").offset().top - 50
		}, 1000)
	});
});
