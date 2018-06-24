  
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
        $(".content_middle_con").css({"height":"273px"});
    },function(){  
        $(".content_middle_con").css({"height":"0"});
    });
});

$(document).ready(function(){  
    $(".pic1_li,.pic1").hover(function(){  
        $(".pic1").css({"display":"block"});
    },function(){  
        $(".pic1").css({"display":"none"});
    });
});
$(document).ready(function(){  
    $(".pic2_li,.pic2").hover(function(){  
        $(".pic2").css({"display":"block"});
    },function(){  
        $(".pic2").css({"display":"none"});
    });
});
$(document).ready(function(){  
    $(".pic3_li,.pic3").hover(function(){  
        $(".pic3").css({"display":"block"});
    },function(){  
        $(".pic3").css({"display":"none"});
    });
});