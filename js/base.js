  
$(document).ready(function(){
    //获取要定位元素距离浏览器顶部的距离
    var navH = $(".menu_bg").offset().top;
    //滚动条事件
    $(window).scroll(function(){
        //获取滚动条的滑动距离
        var scroH = $(this).scrollTop();
        //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
        if(scroH>=navH){
        $(".menu_bg").css({"position":"fixed","top":0});
        }
        else if(scroH<navH){
        $(".menu_bg").css({"position":"relative"});
        };
    });
});

$(document).ready(function(){  
    $(".content_middle>ul,.content_middle_con").hover(function(){  
        $(".content_middle_con").stop(false,true).slideDown(300);
    },function(){  
        $(".content_middle_con").stop(false,true).slideUp(300);
    });
});

$(document).ready(function() {
    if ($("input[name='txtcontent']").val() == ""){
        alert("对不起，请填写内容！")
        $("input[name='txtcontent']").focus();
        return false
        }
    });