$(function(){
	var thisday=new Date();
	var thenow=thisday.getHours()*10000 + thisday.getMinutes()*100 + thisday.getSeconds();

	var fz=getCookie ("fontsize");
	var bg=getCookie ("bgcolor");
	if (fz!=null && fz>=10 && fz<=25) {
		setfont(fz);
	}
	if (bg!=null && (bg.indexOf("#")>=0 || bg.indexOf(".")>=0)) {
		setbackground(bg);
	}
				 
	$("#backg a").each(function() {
		if ($(this).attr("value").indexOf("#")>=0) {
			$(this).css("background-color",$(this).attr("value"));
		} else if ($(this).attr("value").indexOf(".")>=0) {
			$(this).css("background-image","url(http://s.ftimg.net/img/" + $(this).attr("value") + ")");
		}
	});
	$("#backg a").click(function(){
		setbackground($(this).attr("value"));
	});
	$("#fonts a").click(function(){
		setfont($(this).attr("value"));
	});
})

function setbackground(thebg) {
	var thebg;
	if (thebg.indexOf("#")>=0) {
		$(".newsContent").css("background-color",thebg).css("background-image","");
	} else if (thebg.indexOf(".")>=0) {
		$(".newsContent").css("background-image","url(http://s.ftimg.net/img/" + thebg + ")").css("background-color","");
	}
	//for deep color, change font color accordingly
	if (thebg=="#0C3202") {
		$(".newsContent,.newsContent a:link,.newsContent a:visited").css("color","#FFF");
	} else {
		$(".newsContent").css("color","#000");
		$(".newsContent a:link,.newsContent a:visited").css("color","");
	}
	setCookie("bgcolor",thebg);
}

function setfont(thefont) {
	var thefont;
	$(".newsContent,.newsContent *").css({"font-size":thefont + "px","line-height":"22px"});
	$(".newsdes").css({"font-size":thefont + "px"});
	setCookie("fontsize",thefont);
}

function setCookie(name,value){   
    var Days = 30;   
    var exp  = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);   
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();   
}

function getCookie(name){   
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null){   
        return unescape(arr[2]);   
    }else{   
        return "";   
    }   
}  

function delCookie(name){
    var exp = new Date();    
    exp.setTime(exp.getTime() - 1);   
    var cval=getcookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
}
