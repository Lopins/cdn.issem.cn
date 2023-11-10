/*
// yewu
// baidutongji
var _hmt = _hmt || [];
(function() {
	var hm = document.createElement("script");
	hm.src = "https://hm.baidu.com/hm.js?8b6b04060f460dd92d7b09305d068717";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm, s);
})();


// dongsoudi
(function(){
	var dsd= document.createElement("script");
	dsd.src="https://www.dongsoudi.com/analysis?key=dscz34xw0kt2g&ref="+encodeURIComponent(document.referrer);
	var s = document.getElementsByTagName("script")[0];
	document.getElementsByTagName("head")[0].appendChild(dsd);
})();
*/

// baidutuisong
(function(){
	var bp = document.createElement('script');
	var curProtocol = window.location.protocol.split(':')[0];
	if (curProtocol === 'https'){
		bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
	}
	else{
		bp.src = 'http://push.zhanzhang.baidu.com/push.js';
	}
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(bp, s);
})();

(function(){
	// news 20210708
	if ($(".news-information")){ 
		$(".news-information").click(function(){
			let url = $(this).attr('url');
			if (url)
				window.location.href = url;
		});
	}
	
	// tou bu zhe die 20210802
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
	
	// 20211105
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

