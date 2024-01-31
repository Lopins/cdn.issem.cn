if (window.location.href.indexOf("view-source:") > -1) {
  window.location.href = "https://www.issem.cn/";
}
setInterval(function() {
    debuggerCheck();
}, 1000);
var debuggerCheck = function() {
    function doCheck(a) {
        if (('' + a / a)['length'] !== 1 || a % 20 === 0) {
            (function() {}['constructor']('debugger')());
        } else {
            (function() {}['constructor']('debugger')());
        }
        doCheck(++a);
    }
    try {
        doCheck(0);
    } catch (err) {

    }
};
debuggerCheck();


// 获取所有class为"chatim"的元素,遍历这些元素并添加点击事件监听器
var elements = document.getElementsByClassName('chatim');
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function() {
    // 当元素被点击时，调用aiFanFan函数
    // aiFanFan();
    alert("点击了爱番番");
  });
}

// 限时免费按钮动效
let oScroll = $(document).scrollTop();
function intLogo(oScroll) {
    if (oScroll > 0) {
        $('.header').addClass("header-active");
    } else {
        $('.header').removeClass("header-active");
    }
}
intLogo(oScroll);
$(window).scroll(function(e) {
    let oScroll = $(document).scrollTop();
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
//  let html = [];
//  let papeWidth = $(window).width();
//  if ($(".checkWidth")) {
//      $(".checkWidth").remove()
//  }
//  html =
//      '<style> .checkWidth { position: fixed; top: 0; left: 0; z-page: 999; padding: 5px; background-color: rgba(0, 0, 0, .5); color: #fff; font-size: 16px; } </style><div class="checkWidth">' +
//      papeWidth + '</div>';
//  $("body").append(html)
// }
// mycheckWidth()
// $(window).resize(function() {
//  mycheckWidth()
// })

(function(){
	if ($(".news-information")){ 
		$(".news-information").click(function(){
			let url = $(this).attr('url');
			if (url)
				window.location.href = url;
		});
	}
	
    var fadetimeM;
    $(".header .nav .has-sub").hover(function() {
        var $this = $(this);
        var t = $(".header").height() - $this.position().top;
        clearTimeout(fadetimeM);
        $this.find(".trigger").addClass("open");
        $this.siblings(".has-sub").find(".trigger").removeClass("open");
        $this.find(".sub-nav").stop().show().animate({
            "top": t,
            "opacity": "1"
        }, 200).css({
            "flter": "Alpha(Opacity=100)"
        });
        $this.siblings(".has-sub").find(".sub-nav").stop().animate({
            "top": t + 40,
            "opacity": "0"
        }, 200, function() {
            $(this).hide();
        }).css({
            "flter": "Alpha(Opacity=0)"
        });
    }, function() {
        var $this = $(this);
        var t = $(".header").height() - $this.position().top;
        fadetimeM = setTimeout(function() {
            $this.find(".trigger").removeClass("open");
            $this.find(".sub-nav").stop().animate({
                "top": t + 40,
                "opacity": "0"
            }, 200, function() {
                $(this).hide();
            }).css({
                "flter": "Alpha(Opacity=0)"
            });
        }, 300);
    });
	
    var fadetimeMNews;
    $(".header .nav .has-sub-news").hover(function() {
        var $this = $(this);
        var t = $(".header").height() - $this.position().top;
        clearTimeout(fadetimeMNews);
        $this.find(".trigger").addClass("open");
        $this.siblings(".has-sub-news").find(".trigger").removeClass("open");
        $this.find(".sub-nav-news").stop().show().animate({
            "top": t,
            "opacity": "1"
        }, 200).css({
            "flter": "Alpha(Opacity=100)"
        });
        $this.siblings(".has-sub-news").find(".sub-nav-news").stop().animate({
            "top": t + 40,
            "opacity": "0"
        }, 200, function() {
            $(this).hide();
        }).css({
            "flter": "Alpha(Opacity=0)"
        });
    }, function() {
        var $this = $(this);
        var t = $(".header").height() - $this.position().top;
        fadetimeMNews = setTimeout(function() {
            $this.find(".trigger").removeClass("open");
            $this.find(".sub-nav-news").stop().animate({
                "top": t + 40,
                "opacity": "0"
            }, 200, function() {
                $(this).hide();
            }).css({
                "flter": "Alpha(Opacity=0)"
            });
        }, 300);
    });

    $(window).scroll(function() {

        var h = $("body").height() - window.getHeight();
        if ($(window).scrollTop() > 28 && h > 120) {
            $(".header").addClass("is-fixed").find(".logo-txt").fadeOut(400);

        } else if ($(window).scrollTop() < 28) {
            $(".header").removeClass("is-fixed").find(".logo-txt").fadeIn(400);

        }
    });

    window.getHeight = function() {
        if (window.innerHeight != undefined) {
            return window.innerHeight;
        } else {
            var B = document.body
            , D = document.documentElement;
            return Math.min(D.clientHeight, B.clientHeight);
        }
    }
    
    // mobile terminal fold
    $('.m_nav ul li i').click(function () {
        $(this).parent().children('ul').slideToggle().parent().siblings().children('ul').slideUp();
        $(this).toggleClass('sjj_nav_i_se');
        $(this).parent().siblings().find('i').removeClass('sjj_nav_i_se');
    });
    
    $('.sp_nav_xjb').html('<svg t="1496193951932" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="995" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"> <path d="M768.468 428.876l-84.723-84.723-170.711 170.711-170.711-170.711-84.723 84.723 170.711 170.711-0.092 0.091 84.723 84.724 0.092-0.092 0.092 0.092 84.723-84.724-0.092-0.091z" p-id="996"></path></svg>');

    $('.customer_service_guan').click(function(){
        $('.customer_service').css('display','none')
    })
})();

/* 百度推送 */
(function(){
    var list = document.getElementsByTagName("a");
    var url = [];
    var curProtocol = window.location.protocol.split(':')[0];
    for (var i = 0; i < list.length; ++i) {
        if (typeof list[i].href !== "undefined" && list[i].href.includes(window.location.hostname)) {
            var absoluteLink = new URL(list[i].href, window.location.href).href;
            if (curProtocol === 'https') {
                url.push('https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif?l=' + encodeURIComponent(absoluteLink));
            } else {
                url.push('http://api.share.baidu.com/s.gif?r=' + encodeURIComponent(window.location.href) + '&l=' + encodeURIComponent(absoluteLink));
            }
        }
    }
    for (var i = 0; i < url.length; ++i) {
        var t = new Image();
        t.src = url[i];
    }
})(window);

/* 头条推送 */
(function(){
var el = document.createElement("script");
el.src = "https://lf1-cdn-tos.bytegoofy.com/goofy/ttzz/push.js?2da07297707878f3f21d377ee213b8de36a10476b25de977823062c7e6a73fae30632485602430134f60bc55ca391050b680e2741bf7233a8f1da9902314a3fa";
el.id = "ttzz";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(el, s);
})(window);

/* 百度分析 */
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?c011ff44f5dea892e6a6c2da089362f0";
  var sp = document.getElementsByTagName("script")[0]; 
  sp.parentNode.insertBefore(hm, sp);
})(window);

/* Bing分析 */
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "fpy2h27a9n");