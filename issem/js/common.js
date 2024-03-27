// // 禁止调试
// setInterval(function() {
//     function doCheck(a) {
//         if (('' + a / a)['length'] !== 1 || a % 20 === 0) {
//             (function() {}['constructor']('debugger')());
//         } else {
//             (function() {}['constructor']('debugger')());
//         }
//         doCheck(++a);
//     }
//     try {
//         doCheck(0);
//     } catch (err) {

//     }
// }, 5);
/*
// 自动推送 
// 推送代码默认获取页面上所有的本站有效链接，然后去重后进行推送到百度、头条、360
// byte:bb8b81d0260f1b023f148b9e7f0462bf16137bd6bb0b43a7648de149c63beb6b41c9d97bc9c86ff841af3c0f7466bb17a06fd7b99da8c5821872ea98bf8a2f40|360:d182b3f28525f2db83acfaaf6e696dba
(function() {
    // 字符串切割后形成数组
    var jsts = (window.atob(site_jsts) || '').split('|').reduce((acc, pair) => (([key, value] = pair.split(':')), (acc[key] = value, acc)), {});
    var list = document.getElementsByTagName("a");
    var url = [];
    var curProtocol = window.location.protocol.split(':')[0];
    for (var i = 0; i < list.length; ++i) {
        if (typeof list[i].href !== "undefined" && list[i].href.includes(window.location.hostname)) {
            var absoluteLink = new URL(list[i].href, window.location.href).href;
            // 百度推送
            if (curProtocol === 'https') {
                url.push('https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif?l=' + encodeURIComponent(absoluteLink));
            } else {
                url.push('http://api.share.baidu.com/s.gif?r=' + encodeURIComponent(window.location.href) + '&l=' + encodeURIComponent(absoluteLink));
            }
            // 头条推送
            if (jsts.hasOwnProperty("byte") && jsts["byte"]) {
                url.push('https://zhanzhang.toutiao.com/s.gif?url=' + encodeURIComponent(absoluteLink)) + '&token=' + jsts["byte"];
            }
            // 360推送
            if (jsts.hasOwnProperty("360") && jsts["360"]) {
                url.push(curProtocol + '://s.360.cn/so/zz.gif?url=' + encodeURIComponent(absoluteLink)) + '&sid=' + jsts["byte"] + '&token=' + Array.from(url, (_, i) => i.toString() + (i ? url[i] : '')).join('') + Array.from(jsts["byte"].substring(0, 16)).reverse().join('');
            }
        }
    }
    // 去除重复的URL链接后进行推送
    url = url.filter((value, index, self) => self.indexOf(value) === index);
    for (var i = 0; i < url.length; ++i) {
        var t = new Image();
        t.src = url[i];
    }
})(window);

// 统计分析
// 统计代码token是多个统计ID以|分割组成的字符串，然后base64加密，所以需要先解密
// baidu:c011ff44f5dea892e6a6c2da089362f0|google:UA-232915-7|cnzz:1261786887|bing:fpy2h27a9n
(window.atob(site_stat) || '').split('|').forEach(function(part, index) {
    if (part.startsWith("baidu:")) {
        var _hmt = _hmt || [];
        // _hmt.push(['_setAutoPageview', false]);
        // _hmt.push(['_trackPageview', '/']);
        // 百度统计
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?" + (part.split(':'))[1];
            var bd_tj = document.getElementsByTagName("script")[0];
            bd_tj.parentNode.insertBefore(hm, bd_tj);
        })(window);
    } else if (part.startsWith("google:")) {
        // Google Analytics
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', (part.split(':'))[1], 'auto');
        ga('send', 'pageview');
    } else if (part.startsWith("gtm:")) {
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer',(part.split(':'))[1]);
    } else if (part.startsWith("cnzz:")) {
        // 友盟统计
        (function() {
            var cz = document.createElement("script");
            cz.src = "https://s95.cnzz.com/z_stat.php?id=" + (part.split(':'))[1] + "&web_id=" + part;
            var zz_tj = document.getElementsByTagName("script")[0];
            zz_tj.parentNode.insertBefore(cz, zz_tj);
        })(window);
    } else if (part.startsWith("clarity:")){
        // Bing Clarity
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", (part.split(':'))[1]);
    } else {
        // 其他分析
    }
});
*/
// 在线客服
var chats = document.getElementsByClassName('chatim');
for (var i = 0; i < chats.length; i++) {
    chats[i].addEventListener('click', function(event) {
        // 当元素被点击时，调用爱番番函数
        event.preventDefault(); // 阻止默认行为，如链接跳转
        window.open('./contact', "_blank"); //对应的客服页面或者链接
        // window.open(window.atob(site_kefu), "_blank");
        // // 获取nb_invite_ok元素并检查是否存在，然后触发点击事件（假设nb_invite_ok是一个DOM元素）
        // var nbInviteOkElement = document.getElementById("nb_invite_ok");
        // if (nbInviteOkElement) {
        //     nbInviteOkElement.click();
        // }
    });
}

(function($) {
    // 对应页面加载Javascript
    /************************************ index.js ************************************/
    if(pagetag == 1){
        // 网站主页
        // banner
        var bannerSwiper = new Swiper('.index-banenr-swiper .swiper', {
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
        var businessSwiper = new Swiper('.index-business-swiper', {
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
    }
    if(pagetag == 2){
        // 网站优化（SEO） 网站分析
        $("#webAnaly").click(function() {
            var url = $("#keyPrice").val();
            if (url == '') {
                alert("请输入网站域名。");
            } else {
                $("#webAnaly div.fr a").attr("href", "/seoreport?domain=" + url);
            }
        });
    }
    if(pagetag == 3){
        // 关于我们/微信营销
        if ($('.counter').length > 0) {
            $('.counter').countUp();
        }
    }
    if(pagetag == 4){
        // APP营销
        var TouchNav = new Swiper('.page-case-thead .swiper', {
            freeMode: true,
            slidesPerView: 'auto',
        }); 
    }
    if(pagetag == 5){
        // 广告投放（SEM）
        var swiperConfigs = [
            { head: '.ad-launch-head-s1 .swiper', foot: '.ad-launch-foot-s1 .swiper' },
            { head: '.ad-launch-head-s2 .swiper', foot: '.ad-launch-foot-s2 .swiper' },
            { head: '.ad-launch-head-s3 .swiper', foot: '.ad-launch-foot-s3 .swiper' },
            ];
            swiperConfigs.forEach((config, index) => {
            var swiperHead = new Swiper(config.head, {
                freeMode: true,
                watchSlidesProgress: true,
                slidesPerView: 3,
                breakpoints: {
                480: { slidesPerView: 4 },
                768: { slidesPerView: 5 },
                1024: { slidesPerView: 6 },
                },
            });
            var swiperFoot = new Swiper(config.foot, {
                spaceBetween: 0,
                thumbs: {
                swiper: swiperHead,
                },
            });
        }); 
    }
    if(pagetag == 6){
        // 资讯列表
        var TouchNav = new Swiper('.fast-nav .swiper', {
            freeMode: true,
            slidesPerView: 'auto',
        });
    }

    /************************************ global.js ************************************/
    // 限时免费按钮动效
    function intLogo(oScroll) {
        if (oScroll > 0) {
            $('.header').addClass("header-active");
        } else {
            $('.header').removeClass("header-active");
        }
    }
    var oScroll = $(document).scrollTop();
    intLogo(oScroll);
    $(window).scroll(function(e) {
        var oScroll = $(document).scrollTop();
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

    $(".footer-li h3").on("click", function() {
        if ($(this).hasClass("footer-li-active")) {
            $(this).removeClass("footer-li-active")
            $(this).next('ul').hide()
        } else {
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
            slideShadows: true,
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
    //  var html = [];
    //  var papeWidth = $(window).width();
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

    /************************************ common.js ************************************/
    if ($(".news-information")) {
        $(".news-information").click(function() {
            var url = $(this).attr('url');
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
            var B = document.body,
                D = document.documentElement;
            return Math.min(D.clientHeight, B.clientHeight);
        }
    }

    // mobile terminal fold
    $('.m_nav ul li i').click(function() {
        $(this).parent().children('ul').slideToggle().parent().siblings().children('ul').slideUp();
        $(this).toggleClass('sjj_nav_i_se');
        $(this).parent().siblings().find('i').removeClass('sjj_nav_i_se');
    });

    $('.sp_nav_xjb').html('<svg t="1496193951932" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="995" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"> <path d="M768.468 428.876l-84.723-84.723-170.711 170.711-170.711-170.711-84.723 84.723 170.711 170.711-0.092 0.091 84.723 84.724 0.092-0.092 0.092 0.092 84.723-84.724-0.092-0.091z" p-id="996"></path></svg>');

    $('.customer_service_guan').click(function() {
        $('.customer_service').css('display', 'none')
    })
})(jQuery);