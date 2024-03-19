/*

                    上海楚莺信息服务工作室
                       QQ : 995113189
                   https://www.chuying.ltd

                          _ooOoo_
                         o8888888o
                         88" . "88
                         (| -_- |)
                         O\  =  /O
                      ____/`---'\____
                    .'  \\|     |//  `.
                   /  \\|||  :  |||//  \
                  /  _||||| -:- |||||-  \
                  |   | \\\  -  /// |   |
                  | \_|  ''\---/''  |   |
                  \  .-\__  `-`  ___/-. /
                ___`. .'  /--.--\  `. . __
             ."" '<  `.___\_<|>_/___.'  >'"".
            | | :  `- \`.;`\ _ /`;.`/ - ` : | |
            \  \ `-.   \_ __\ /__ _/   .-` /  /
       ======`-.____`-.___\_____/___.-`____.-'======
                          `=---='
              佛祖保佑    网站正常    流量上涨
              权重上升    排名稳定    同行第一
*/
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

//回收业务链接处理
$(".menu_first a").each(function(){
    // console.log(this)
    var href = $(this).attr("href");
    href=kufu_link[Math.floor(Math.random()*(kufu_link.length))]+'?ref='+href;
    $(this).attr('href',href);
});
$("ul.list-por > li > span a").each(function(){
    // console.log(this)
    var href = $(this).attr("href");
    href=kufu_link[Math.floor(Math.random()*(kufu_link.length))]+'?ref='+href;
    $(this).attr('href',href);
});

//页头链接转换处理
$("ul.nav > li:nth-child(3) a").each(function(){
    // console.log(this)
    var href = $(this).attr("href");
    href=kufu_link[Math.floor(Math.random()*(kufu_link.length))]+'?ref='+href;
    $(this).attr('href',href);
});
$("ul.nav > li:nth-child(4) a").each(function(){
    // console.log(this)
    var href = $(this).attr("href");
    href=kufu_link[Math.floor(Math.random()*(kufu_link.length))]+'?ref='+href;
    $(this).attr('href',href);
});
$("ul.nav > li:nth-child(5) a").each(function(){
    // console.log(this)
    var href = $(this).attr("href");
    href=kufu_link[Math.floor(Math.random()*(kufu_link.length))]+'?ref='+href;
    $(this).attr('href',href);
});

//页脚链接转换处理
$("ul.foot-nav > li:nth-child(2) a").each(function(){
    // console.log(this)
    var href = $(this).attr("href");
    href=kufu_link[Math.floor(Math.random()*(kufu_link.length))]+'?ref='+href;
    $(this).attr('href',href);
});
$("ul.foot-nav > li:nth-child(3) a").each(function(){
    // console.log(this)
    var href = $(this).attr("href");
    href=kufu_link[Math.floor(Math.random()*(kufu_link.length))]+'?ref='+href;
    $(this).attr('href',href);
});
$("ul.foot-nav > li:nth-child(4) a").each(function(){
    // console.log(this)
    var href = $(this).attr("href");
    href=kufu_link[Math.floor(Math.random()*(kufu_link.length))]+'?ref='+href;
    $(this).attr('href',href);
});


if (scode === '0') {
    $(document).ready(function() {
        $('.index-banner').slick({
            dots: true,
            arrows: true,
            autoplay: true,
            slidesToShow: 1,
            autoplaySpeed: 5000,
            pauseOnHover: false,
            lazyLoad: 'ondemand',
            responsive: [{
                breakpoint: 959,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }]
        });

        $('.index-bout').slick({
            dots: true,
            arrows: false,
            autoplay: true,
            slidesToShow: 1,
            autoplaySpeed: 5000,
            pauseOnHover: false,
            lazyLoad: 'ondemand',
            responsive: [{
                breakpoint: 959,
                settings: {
                    dots: true,
                }
            }]
        });

        $('.ind-notice').slick({
            dots: false,
            arrows: false,
            vertical: true,
            autoplay: true,
            slidesToShow: 1,
            autoplaySpeed: 3000,
            pauseOnHover: false,
            lazyLoad: 'ondemand',
        });

        $('.list-por').slick({
            dots: false,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            rows: 2,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            }]
        });
    });
    document.getElementById("seotag").innerHTML = "上海楚莺信息服务工作室";
}

function search_button() {
    var search = $("#searchkey").val()
    if (search == "请输入要搜索的产品名称" || search == "") {
        alert("必须输入要搜索产品的名称!");
    } else {
        document.getElementById("search_form").submit();
    }
}

$(function() {
    $("#aFloatTools_Show").click(function() {
        $('#divFloatToolsView').animate({ width: 'show', opacity: 'show' }, 100, function() { $('#divFloatToolsView').show(); });
        $('#aFloatTools_Show').hide();
        $('#aFloatTools_Hide').show();
    });
    $("#aFloatTools_Hide").click(function() {
        $('#divFloatToolsView').animate({ width: 'hide', opacity: 'hide' }, 100, function() { $('#divFloatToolsView').hide(); });
        $('#aFloatTools_Show').show();
        $('#aFloatTools_Hide').hide();
    });
});
$("#tjwx0").mouseover(function() { $("#tjwx00").css("display", "block"); });
$("#tjwx0").mouseout(function() { $("#tjwx00").css("display", "none"); });
$(document).ready(function() {
    $("#divFloatToolsView li:last").css("border", "none");
});

/*
if (mcode === '4' || mcode === '3') {
    $(document).ready(function() {
        // 案例：相关图片轮播
        $('.m-picture ul').slick({
            dots: false,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            rows: 1,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 479,
                settings: {
                    slidesToShow: 2
                }
            }]
        });
    });
}

if (mcode === '4') {
    function resizeimage(objImg){
        var w0=0;
        var w1=1316;
        var h0=0;
        var h1=0;
        if (objImg.width>w1){
            w0=objImg.width;
            h0=objImg.height;
            h1=w1/w0*h0;
            objImg.style.width=w1;
            objImg.style.height=h1;
        }
    }
} 

// ajax提交表单
function subform(obj){
    var url = frurl;
    var tel = $(obj).find("#tel").val();
    var referrer = $(obj).find("#referrer").val();
    var name = $(obj).find(".un").val();
    var company = $(obj).find(".com").val();
    var amount = $(obj).find(".amount").val();
    var content = $(obj).find(".con").val();
    //var checkcode=$(obj).find("#checkcode").val();
    var reg = /^(1|0)[\d\-]+$/;   
    if (!reg.test(tel)) {
        alert('电话号码错误！');
        return false;
    }
    $.ajax({
    type: 'POST',
    url: url,
    dataType: 'json',
    data: {
        tel: tel,
        referrer: referrer,
        name: name,
        company: company,
        amount: amount,
        content: content
    },
    success: function (response, status) {
        if(response.code){
            alert("您的来电已收到，我们会尽快联系您！");
            $(obj)[0].reset(); 
        }else{
            alert(response.data);
        }
    },
    error:function(xhr,status,error){
        alert('返回数据异常！');
    }
    });
    return false;
}
*/

/*百度地图*/
function initMap() {
    createMap();
    setMapEvent();
    addMapControl();
    addMarker();
}
function createMap() {
    var map = new BMap.Map("dituContent");
    var point = new BMap.Point(map_lon,map_lat);
    map.centerAndZoom(point, 18);
    window.map = map;
}
function setMapEvent() {
    map.enableDragging();
    map.enableScrollWheelZoom();
    map.enableDoubleClickZoom();
    map.enableKeyboard();
}
function addMapControl() {
    var ctrl_ove = new BMap.OverviewMapControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        isOpen: 0
    });
    map.addControl(ctrl_ove);
    var ctrl_sca = new BMap.ScaleControl({
        anchor: BMAP_ANCHOR_BOTTOM_LEFT
    });
    map.addControl(ctrl_sca);
}
var markerArr = [{
    title: map_name,
    content: "服务热线：" + map_tel + "<br/>" + map_addr,
    point: map_lon + "|" + map_lat,
    isOpen: 1,
    icon: {
        w: 23,
        h: 25,
        l: 46,
        t: 21,
        x: 9,
        lb: 12
    }
}];
function addMarker() {
    for (var i = 0; i < markerArr.length; i++) {
        var json = markerArr[i];
        var p0 = json.point.split("|")[0];
        var p1 = json.point.split("|")[1];
        var point = new BMap.Point(p0, p1);
        var iconImg = createIcon(json.icon);
        var marker = new BMap.Marker(point, {
            icon: iconImg
        });
        var iw = createInfoWindow(i);
        var label = new BMap.Label(json.title, {
            "offset": new BMap.Size(json.icon.lb - json.icon.x + 10, -20)
        });
        marker.setLabel(label);
        map.addOverlay(marker);
        label.setStyle({
            borderColor: "#808080",
            color: "#333",
            cursor: "pointer"
        });
        (function() {
            var index = i;
            var _iw = createInfoWindow(i);
            var _marker = marker;
            _marker.addEventListener("click", function() {
                this.openInfoWindow(_iw);
            });
            _iw.addEventListener("open", function() {
                _marker.getLabel().hide();
            })
            _iw.addEventListener("close", function() {
                _marker.getLabel().show();
            })
            label.addEventListener("click", function() {
                _marker.openInfoWindow(_iw);
            })
            if (!!json.isOpen) {
                label.hide();
                _marker.openInfoWindow(_iw);
            }
        })()
    }
}
function createInfoWindow(i) {
    var json = markerArr[i];
    var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title +
        "</b><div class='iw_poi_content'>" + json.content + "</div>");
    return iw;
}
function createIcon(json) {
    var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w, json.h), {
        imageOffset: new BMap.Size(-json.l, -json.t),
        infoWindowOffset: new BMap.Size(json.lb + 5, 1),
        offset: new BMap.Size(json.x, json.h)
    })
    return icon;
}
initMap();

/*
// 客服
$(".kefu").click(function(e){
    e.stopPropagation();//禁止响应父元素的相关事件
    e.preventDefault();//防止跳转
    
    //方法一、在当前窗口弹出百度商桥爱番番
    if ($('#nb_invite_ok').length > 0) {
        $('#nb_invite_ok').click();
    }
    //方法二、53快服
    //var _$53= _$53 || [];_$53.push(["_kfclient",{type:'popup',}]);
});
*/
/*
if (getCookie("once_kefu")!="1"){
    // var kufu_link = new Array('{pboot:companyother}','{pboot:companyother}','{pboot:companyother}');
    document.write('<a href="' + kufu_link[Math.floor(Math.random()*(kufu_link.length))] + '" target="_blank" style="position: absolute; z-index: 9999999999; opacity: 0.1;top: 0px; left: 0px; width: 100%; height: '+document.body.offsetHeight+'px; background-color: rgb(255, 255, 255);" id="once_kefu" onclick="once_kefu();"></a>');
    function once_kefu(){
        document.getElementById("once_kefu").style.display="none";
        setCookie("once_kefu","1");
    }
}
function setCookie(cname,cvalue){
    document.cookie = cname + "=" + cvalue + "; path=/";
}
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0){
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
*/
/*
// 自动跳转客服
if (scode === '0') {
    var uaTest = /Baiduspider|Googlebot|Google-Read-Aloud|360Spider|SogouSpider|Sogou web spider|YisouSpider|bingbot|BingPreview|Bytespider/i.test(navigator.userAgent.toLowerCase());
    if(!uaTest){ 
        setTimeout(function(){ 
            window.open("/kefu.html?ref="+kufu_link[Math.floor(Math.random()*(kufu_link.length))],"_blank"); 
            
        }, 15000);
    }
}
*/