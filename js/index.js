/*
 * @Author: Administrator
 * @Date:   2016-04-12 15:48:03
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-04-14 11:29:44
 */

'use strict';


//倒计时
var interval = 1000;

function ShowCountDown(year, month, day, second, divname) {
    var now = new Date();
    var endDate = new Date(year, month - 1, day, second);
    var leftTime = endDate.getTime() - now.getTime();
    var leftsecond = parseInt(leftTime / 1000);
    var day1 = Math.floor(leftsecond / (60 * 60 * 24));
    var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600);
    var minute = Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60);
    var second = Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60);

    $(".day").html(day1);
    $(".hour").html(hour);
    $(".minute").html(minute);
    $(".second").html(second);
}

window.setInterval(function() {
    ShowCountDown(2016, 7, 1, 0, 'divdown1');
}, interval);

/*向上翻转文字*/
function autoScroll(obj) {
    $(obj).find("ul").animate({
        marginTop: "-35px"
    }, 500, function() {
        $(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);
    })
}
$(function() {
    setInterval('autoScroll(".sign_up_box")', 3000);
})


/*第二屏地图动画*/

/*function animateMap(obj, time) {
    setTimeout(function() {
        obj.fadeIn();
    }, time)
};

animateMap($(".qingdao"), 300);
animateMap($(".main section.page2 h1 img"), 300);*/
function biling() {
    setTimeout(function() {
        $(".cricle1").fadeIn();
    }, 2600);
    setTimeout(function() {
        $(".cricle2").fadeIn();
    }, 2800);
    setTimeout(function() {
        $(".cricle4").fadeIn();
    }, 3000);
    setTimeout(function() {
        $(".cricle5").fadeIn();
    }, 3200);
    setTimeout(function() {
        $(".cricle6").fadeIn();
    }, 3400);
    setTimeout(function() {
        $(".cricle7").fadeIn();
    }, 3600);
    setTimeout(function() {
        $(".cricle8").fadeIn();
    }, 3800);
    setTimeout(function() {
        $(".cricle9").fadeIn();
    }, 4000);
    setTimeout(function() {
        $(".cricle10").fadeIn();
    }, 4200);
    setTimeout(function() {
        $(".cricle11").fadeIn();
    }, 4400);
    setTimeout(function() {
        $(".cricle12").fadeIn();
    }, 4600);
    setTimeout(function() {
        $(".cricle13").fadeIn();
    }, 4800);
    setTimeout(function() {
        $(".cricle14").fadeIn();
    }, 5000);
}

function nobiling() {
    setTimeout(function() {
        $(".cricle1").fadeOut();
    }, 2600);
    setTimeout(function() {
        $(".cricle2").fadeOut();
    }, 2800);
    setTimeout(function() {
        $(".cricle4").fadeOut();
    }, 3000);
    setTimeout(function() {
        $(".cricle5").fadeOut();
    }, 3200);
    setTimeout(function() {
        $(".cricle6").fadeOut();
    }, 3400);
    setTimeout(function() {
        $(".cricle7").fadeOut();
    }, 3600);
    setTimeout(function() {
        $(".cricle8").fadeOut();
    }, 3800);
    setTimeout(function() {
        $(".cricle9").fadeOut();
    }, 4000);
    setTimeout(function() {
        $(".cricle10").fadeOut();
    }, 4200);
    setTimeout(function() {
        $(".cricle11").fadeOut();
    }, 4400);
    setTimeout(function() {
        $(".cricle12").fadeOut();
    }, 4600);
    setTimeout(function() {
        $(".cricle13").fadeOut();
    }, 4800);
    setTimeout(function() {
        $(".cricle14").fadeOut();
    }, 5000);
}

function add2() {

    if ($(".page2").hasClass("active")) {
        $(".active.page2 .page2_main .map span img").addClass("animated fadeInUp");
        $(".active.page2  h1 img").addClass("animated zoomInDown");
        biling()
    } else {
        $(".page2 .page2_main .map span img").removeClass("animated fadeInUp");
        $(".page2 h1 img").removeClass("animated zoomInDown");
        nobiling()
    }

}

function add3() {

    if ($(".page4").hasClass("active")) {
        $(".active.page4 .page_container h1").addClass("animated rubberBand");

    } else {
        $(".page4 .page_container h1").removeClass("animated rubberBand");

    }

}




function move() {
    add2();
    add3();
    biling();
}

$(function() {

    //点击关于我们跳转第四页
    $(".about").click(function() {
        $(".main").moveTo(4);
    });
    //点击免费报名
    $(".free").click(function() {
        $(".sign_box").show();
    });
    $(".sign_box .close").click(function() {
        $(".sign_box").hide();
    });
})
