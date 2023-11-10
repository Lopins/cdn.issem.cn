;

(function ($, window, document, undefined) {
    'use strict';
    var $winW = function () {
        return $(window).width();
    };
    var $winH = function () {
        return $(window).height();
    };
    var $screensize = function (element) {
        $(element).width($winW()).height($winH());
    };
    var screencheck = function (mediasize) {
        if (typeof window.matchMedia !== "undefined") {
            var screensize = window.matchMedia("(max-width:" + mediasize + "px)");
            if (screensize.matches) {
                return true;
            } else {
                return false;
            }
        } else {
            if ($winW() <= mediasize) {
                return true;
            } else {
                return false;
            }
        }
    };
    $(function () {
        ckeckFullpage();
        checkHeader();
        //回到顶部
        //页面文档的高度>浏览器当前窗口可视区域高度
        checkScroll();
        videoH();
        new WOW().init();

        function checkScroll() {
            if (($(document.body).outerHeight(true) > $(window).height()) && ($(window).width() >= 768)) {
                $(".bottom-follow .toTop").fadeIn()
            } else {
                $(".bottom-follow .toTop").fadeOut()
            }
        }
        $(".toTop").click(function () {
            $("body,html").animate({
                scrollTop: 0
            }, 500);
            // $("#fullpage").css('transform', 'translateY(0px)')
        });
        // $('#fullpage').fullpage();
        function checkHeader() {
            if ($(window).width() >= 1100) {
                // console.log($(window).width())
                $("#fullpage").siblings(".header").css("position", "fixed")
                $(".fp-section .fp-tableCell").css("padding-top", "70px")

            }
        }

        function videoH() {
            var bannerH = $("#fullpage .section1 .index-banner").height();
            // console.log(bannerH);
           // $(".video-item").height(bannerH)
        }
        $(window).resize(function () {
            checkHeader();
            checkScroll();
            videoH()
        })

        function ckeckFullpage() {
            if ($('.fullpage-default').length) {
                // console.log('全屏滚动')
				
                //$("#fullpage").siblings(".header").addClass("sticked")
                var myFullpage = new fullpage('.fullpage-default', {
                    // licenseKey: ' C7F41B00-5E824594-9A5EFB99-B556A3D5',
                    // anchors: ['slide01', 'slide02', 'slide03', 'slide04'],
                    menu: '#sidebar',
                    lazyLoad: true,
                    navigation: true,
                    navigationPosition: 'right',
                    // scrollOverflow: true,
                    responsiveWidth: 1100,
                    // responsiveHeight: 600,
                    responsiveSlides: true,
                    css3: true,
                    scrollBar: true,
                    afterRender: function () {
                        var wow = new WOW({
                            animateClass: 'animated',
                        });
                        wow.init();
                    }

                });
            }
        }

    });
    $(function () {
        //超过一定高度导航添加类名
        var nav = $("header"); //得到导航对象  
        var win = $(window); //得到窗口对象  
        var sc = $(document); //得到document文档对象。  
        win.scroll(function () {
            if (sc.scrollTop() >= 100) {
                nav.addClass("on");
            } else {
                nav.removeClass("on");
            }
        })

        //移动端展开nav
        $('#navToggle').on('click', function () {
            $('.m_nav').addClass('open');
        })
        //关闭nav
        $('.m_nav .top .closed').on('click', function () {
            $('.m_nav').removeClass('open');
        })

        //二级导航  移动端
        $(".m_nav .ul li").click(function () {
            $(this).children("div.dropdown_menu").slideToggle('slow')
            $(this).siblings('li').children('.dropdown_menu').slideUp('slow');
        });

    });

    var mySwiper = new Swiper('.swiper-container-process.swiper-container-honor', {
        autoplay: true, //可选选项，自动滑动
        slidesPerView: 4,
        spaceBetween: 50,
        breakpoints: {
            //当宽度小于等于479
            479: {
                slidesPerView: 1,
            },
            //当宽度小于等于575
            575: {
                slidesPerView: 2,
            },
            //当宽度小于等于768
            768: {
                slidesPerView: 2,
            }, //当宽度小于等于992
            992: {
                slidesPerView: 2,
            },
            //当宽度小于等于1100
            1100: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        },
        // loop: true,
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper  
        observeParents: true, //修改swiper的父元素时，自动初始化swiper  
    })

    var mySwiper = new Swiper('.purchase-slide', {
        autoplay: true, //可选选项，自动滑动
        slidesPerView: 4,
        spaceBetween: 15,
        breakpoints: {
            //当宽度小于等于479
            479: {
                slidesPerView: 1,
            },
            //当宽度小于等于575
            575: {
                slidesPerView: 2,
            },
            //当宽度小于等于768
            768: {
                slidesPerView: 2,
            }, //当宽度小于等于992
            992: {
                slidesPerView: 2,
            },
            //当宽度小于等于1100
            1100: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper  
        observeParents: true, //修改swiper的父元素时，自动初始化swiper  
    })

    


})(jQuery, window, document);


