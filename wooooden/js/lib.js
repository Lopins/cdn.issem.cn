
$(document).ready(function($) {
// 手机导航2021.4.2更改
		$('.menuBtn').append('<b></b><b></b><b></b>');
		$('.menuBtn').click(function(event) {
			$(this).toggleClass('open');
			var _winw = $(window).width();
			var _winh = $(window).height();
			if( $(this).hasClass('open') ){
				$('body').addClass('open');
				if( _winw<=767 ){
	                $('.nav-phone2').stop().addClass('nav-out');
	                $('.bg-black').fadeIn('slow');
				}
			}else{
				$('body').removeClass('open');
				if( _winw<=767 ){
	                $('.nav-phone2').stop().removeClass('nav-out');
	                $('.bg-black').fadeOut('slow');
				}
			};
		});


		// 鼠标经过效果的导航
		$(".nav li").mouseenter(function(){
		    $(this).toggleClass('on').find("dl").stop(true,true).slideToggle();
		}); 
		$(".nav li").mouseleave(function(){
			$(this).removeClass('on').find("dl").stop().slideUp();
		});

// 2021.4.2更改
		$(".nav-phone2 li em").click(function(event) {
			$(this).parent("li").toggleClass('on').find('dl').slideToggle('');


		});
			

			// 微信弹出
			$('.phone-foot .wx').click(function(){
				$('body').find('.foot-wx').fadeToggle();
			});
			$('.foot-wx .ewm-bg').click(function(){
				$(this).parent('.foot-wx').fadeOut();
			});

		    

		    // 返回顶部
		    $('.toTop').click(function(){
		        $('body,html').animate({
		            'scrollTop':0
		        }, 500);
		    });
		    $(window).scroll(function(){
		        var _top = $(window).scrollTop();
		        if( _top<200 ){
		            $('.toTop').stop().fadeOut(500);
		        }else{
		            $('.toTop').stop().fadeIn(500);
		        }
		    });



		    $(".TAB li").mousemove(function(){
		    	var $vv=$(this).parent(".TAB").attr("id");
		    	$($vv).hide();
		    	$(this).parent(".TAB").find("li").removeClass("hover");
		    	var xx=$(this).parent(".TAB").find("li").index(this);
		    	$($vv).eq(xx).show();
		    	$(this).addClass("hover");
		    });

		    //侧导航
		    	$(".menu_first").click(function() {
		    	$(this).next('dd').slideToggle('fast').siblings('dd').stop().slideUp()
		     });

		    	$(".phone-por-menu dt").click(function() {
		    	    $(this).parents("dl").toggleClass("on").siblings('dl').removeClass('on').find('dd').stop().slideUp();
		    	if($(this).parents('dl').hasClass('on')) {
		    	    $(this).next("dd").stop().slideDown();
		    	}else{
		    	    $(this).next("dd").stop().slideUp();
		    	}
		    	});


		   
		   /*function myNav(){
		   	var _winw = $(window).width();
		   	if( _winw>767 ){
			   	$('.list-case').slick({
			   		dots:false,
			   		arrows:true,
			   	   slidesToShow: 4,
			   	   slidesToScroll: 1,
			   	   rows: 1,
			   	   autoplay:true,
			   		autoplaySpeed: 2000
			   	})
			   	}else{
			   	$('.list-case').slick({
			   		dots:false,
			   		arrows:false,
			   	   slidesToShow: 2,
			   	   slidesToScroll: 1,
			   	   rows: 3,
			   	   autoplay:true,
			   		autoplaySpeed: 2000
			   	})
		   	}
		   }
		   myNav();
		   $(window).resize(function(event) {
		   	myNav();
		   });*/


});