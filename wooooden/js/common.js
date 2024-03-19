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
        console.log(this)
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