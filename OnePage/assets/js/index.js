const HITOKOTO_URL = "https://v1.hitokoto.cn";
var audioStart = false;

// Animate
$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = (function (el) {
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
            };

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    return animations[t];
                }
            }
        })(document.createElement('div'));

        this.addClass('animate__animated ' + 'animate__' + animationName).one(animationEnd, function () {
            $(this).removeClass('animate__animated ' + 'animate__' + animationName);

            if (typeof callback === 'function') callback();
        });

        return this;
    },
});

$(function () {
    // 自动刷新一言
    autoRefreshHitokoto();
    // 自动播放音乐
    autoPlayAudio();
    // 播放按钮点击
    $("#audio-btn").click(() => playBgm(true));
    // vconsole调试工具
    startVConsoleIfNecessary();
    // layout事件绑定
    $(".layout-start-link").click(() => openLayout())
    $(".layout-mask").click(() => closeLayout());
    $(".layout-link").click(() => closeLayout());
    // 个人信息展示窗口
    $(".contact-btn").click(() => openOrCloseContactWindow());
    $("#contact-close-btn").click(() => openOrCloseContactWindow());
    // 验证码
    $(".captcha-btn").click(() => openOrCloseCaptcha());
});

/**
 * 打开/关闭 个人简介窗口
 */
function openOrCloseContactWindow() {
    const $contact = $("#contact");
    const display = $contact.css("display");
    if (display === "block") {
        $contact.css("display", "none");
        // closeMask();
    } else {
        $contact.css("display", "block");
        // openMask();
    }
}
/**
 * 打开/关闭 个人简介窗口
 */
function openOrCloseCaptcha() {
    const $contact = $("#captcha");
    const display = $contact.css("display");
    if (display === "block") {
        $contact.css("display", "none");
        // closeMask();

    } else {
        $contact.css("display", "block");
        // openMask();

        const captcha = initRandomCaptcha("#captcha-div", {
            // 生成验证码url
            genCaptchaUrl: "https://api.captcha.tianai.cloud/gen/random",
            // 验证接口
            validUrl: "https://api.captcha.tianai.cloud/check2"
        }, {
            // 滑动按钮
            btnUrl: "https://minio.tianai.cloud/public/captcha-btn/btn3.png",
            bgUrl: "https://minio.tianai.cloud/public/captcha-btn/btn3-bg.jpg",
            moveTrackMaskBgColor: "#f7b645",
            moveTrackMaskBorderColor: "#ef9c0d"
        })
        captcha.successCallback = function () {
            alert("验证成功")
            captcha.loadCaptcha();
        }
        captcha.hideWindow = function () {}
        captcha.showWindow = function () {}
        captcha.loadCaptcha();
    }
}

/**
 * 打开vconsole调试工具 如果有必要
 */
function startVConsoleIfNecessary() {
    if (getUrlParam("debug") === "true") {
        $.getScript("./js/vconsole.min.js", () => {
            new VConsole();
        })
    }
}

/**
 * 关闭layout
 */
function closeLayout() {
    $(".layout").css("transform", "translateX(-250px)");
    $(".layout").css("-webkit-transform", "translateX(-250px)");
    closeMask();
}

/**
 * 打开layout
 */
function openLayout() {
    $(".layout").attr("class", "layout layout-show")
    $(".layout").css("-webkit-transform", "translateX(0)");
    openMask();
}

/**
 * 关闭遮罩
 */
function closeMask() {
    $(".layout-mask").css("visibility", "hidden");
}

/**
 * 打开遮罩
 */
function openMask() {
    $(".layout-mask").css("visibility", "visible");
}

/**
 * 工具audio状态修改按钮图标
 */
function reloadAudioBtn() {
    if (document.getElementById("bgm-audio").paused) {
        // $("#audio-btn").attr("src", "images/start.png");
        $("#audio-btn").html("&#xe67d;");
    } else {
        // $("#audio-btn").attr("src", "images/stop.png");
        $("#audio-btn").html("&#xe629;");
    }
}

/**
 * 播放背景音乐
 * @param startOfStop 如果启动了是否停止
 * @returns {null}
 */
function playBgm(startOfStop) {
    const audio = document.getElementById("bgm-audio");
    let result = null;
    if (audio.paused) {
        result = audio.play().then(() => {
            audio.loop = true;
            console.log("音乐播放...")
            audioStart = true;
            reloadAudioBtn();
        })
    } else if (startOfStop) {
        audio.pause();
        console.log("音乐停止...")
        audioStart = false;
        reloadAudioBtn();
    } else {
        reloadAudioBtn();
    }
    return result;
}

/**
 * 自动播放音乐，递归重试
 * @returns {Promise<*>}
 */
async function autoPlayAudio() {
    reloadAudioBtn();
    await sleep(1000);
    try {
        if (audioStart && document.getElementById("bgm-audio").paused) {
            await playBgm(false);
            if (document.getElementById("bgm-audio").paused) {
                throw new Error("播放失败");
            }
            console.log("自动播放音乐中...")
        }
    } catch (e) {
        console.log("自动播放音乐重试...")
    }
    return autoPlayAudio();
}



/**
 * 获取url中的参数
 * @param name
 * @returns {string|null}
 */
function getUrlParam(name) {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    const r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null;
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

/**
 * 自动刷新一言
 */
function autoRefreshHitokoto() {
    refreshHitokoto();
    setInterval(refreshHitokoto, 7000);
}

/**
 * 刷新一言
 */
function refreshHitokoto() {
    $.get(HITOKOTO_URL, (data) => {
        const hitokoto = data.hitokoto;
        const from = data.from;
        if (data.from_who) {
            data.fromWho = data.from_who;
        }
        let fromWho = data.fromWho ? data.fromWho : "";
        const author = "—— " + fromWho + "「" + from + "」";
        if ($('#hitokoto').hasClass("animate__animated")) {
            $('#hitokoto').removeClass("animate__animated");
            $('#hitokoto').removeClass("animate__fadeIn");
        }
        $("#hitokoto_text").text(hitokoto);
        $("#hitokoto_author").text(author);
        $('#hitokoto').animateCss('bounce');
    });
}
