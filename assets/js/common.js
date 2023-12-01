var _0x22ac = ['auto', 'px;}', '<style type="text/css">', '<div class="readall"><i></i></div>', 'body', '<div class="readon"><i></i></div>', 'indexOf', 'animate', '</style>', '.viewall_plugin{ height:', '<div class="readnum"><i>', 'location', '.readnum,.readall,.readon', 'prepend', 'append', 'height', 'click', 'ceil', 'length', '1000', 'outerHeight', '.viewall_plugin', 'extend'];
(function(_0x5b4482, _0x22ac7c) {
    var _0xeee190 = function(_0x178757) {
        while (--_0x178757) {
            _0x5b4482['push'](_0x5b4482['shift']());
        }
    };
    _0xeee190(++_0x22ac7c);
}(_0x22ac, 0x1e3));
var _0xeee1 = function(_0x5b4482, _0x22ac7c) {
    _0x5b4482 = _0x5b4482 - 0x0;
    var _0xeee190 = _0x22ac[_0x5b4482];
    return _0xeee190;
};
$(function() {
    $[_0xeee1('0x16')]({
        'viewall': function(_0x339f48, _0x2f82bc, _0x3bf758) {
            if (_0x339f48 == 0x1) {
                var _0x5ee6a6 = _0x2f82bc ? _0x2f82bc : _0xeee1('0x13');
                var _0x37cda3 = _0x3bf758;
                var _0x113e01 = $(_0xeee1('0x15'))[_0xeee1('0x14')]();
                var _0x59eab9 = document[_0xeee1('0xb')]['pathname']['split']('/');
                var _0x1eba7f = _0x59eab9[_0xeee1('0x12')];
                var _0x235ed0 = _0xeee1('0x2') + _0xeee1('0x9') + _0x5ee6a6 + _0xeee1('0x1') + _0xeee1('0x8');
                $(_0xeee1('0x4'))[_0xeee1('0xd')](_0x235ed0);
                var _0x424e97 = $(_0xeee1('0x15'))[_0xeee1('0x14')](!![]);
                var _0x4a321a = 0x64 - Math[_0xeee1('0x11')](_0x424e97 / _0x113e01 * 0x64);
                if (_0x4a321a > 0x0 && _0x59eab9[_0x1eba7f - 0x1][_0xeee1('0x6')]('_') < 0x0) {
                    if (_0x37cda3 == 0x1) {
                        $('.viewall_plugin')[_0xeee1('0xe')](_0xeee1('0xa') + _0x4a321a + '%' + '</i></div>');
                    } else if (_0x37cda3 == 0x2) {
                        $(_0xeee1('0x15'))['append'](_0xeee1('0x5'));
                    } else {
                        $(_0xeee1('0x15'))['append'](_0xeee1('0x3'));
                    }
                    $(_0xeee1('0xc'))['on'](_0xeee1('0x10'), function() {
                        $(_0xeee1('0x15'))[_0xeee1('0x7')]({
                            'height': _0x113e01
                        }, function() {
                            $(_0xeee1('0x15'))['height'](_0xeee1('0x0'));
                        });
                        $(this)['remove']();
                        return ![];
                    });
                } else {
                    $(_0xeee1('0x15'))['css'](_0xeee1('0xf'), 'auto');
                }
            }
        }
    });
});

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
  hm.src = "https://hm.baidu.com/hm.js?913c9fae0cf0b1a059eb7ae4d94f0ef5";
  var sp = document.getElementsByTagName("script")[0]; 
  sp.parentNode.insertBefore(hm, sp);
})(window);

/* Bing分析 */
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "fpy2h27a9n");