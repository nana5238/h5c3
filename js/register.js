/*
 * @Author: Administrator
 * @Date:   2016-04-14 13:54:06
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-04-14 14:43:46
 */

'use strict';
$(function() {

    $(".fuwushang").click(function() {

        $(".fuwushang_box").show();
        $(".qiye_box").hide();
    });
    $(".qiye").click(function() {

        $(".fuwushang_box").hide();
        $(".qiye_box").show();
    });

    $(".register_tab ul li").click(function() {
        $(this).addClass("on").siblings().removeClass("on");
    })

})
