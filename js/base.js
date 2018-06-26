  
$(document).ready(function(){
    $(function () {
        $("a").click(function () {

            $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top -20+ "px"}, 500);
        
            return false;//不要这句会有点卡顿
        
        });
    });

    $(function(){
        //获取要定位元素距离浏览器顶部的距离
        var navH = $(".menu_bg").offset().top;
        //滚动条事件
        $(window).scroll(function(){
            //获取滚动条的滑动距离
            var scroH = $(this).scrollTop();
            //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
            if(scroH>=navH){
            $(".menu_bg").css({"position":"fixed","top":"0px"});
            $(".side").css({"position":"fixed","top":"180px"});
            $(".content_bg").css("margin","44px auto 0 auto");
            $(".back").css({"right":"50px","bottom":"50px"});
            }
            else if(scroH<navH){
            $(".menu_bg").css("position","relative");
            $(".content_bg").css("margin","0 auto");
            $(".side").css({"position":"absolute","top":"280px"});
            $(".back").css({"right":"1150px","bottom":"1150px"});
            };
        });
    });

// ***************导航条******************

    $(function(){
        $(".content_middle>ul,.content_middle_con").hover(function(){  
            $(".content_middle_con").css("height","273px");
        },function(){  
            $(".content_middle_con").css("height","0");
        });
    });

    $(function(){
        $(".pic1_li,.pic0").hover(function(){  
            $(".pic0").css({"display":"block"});
        },function(){  
            $(".pic0").css({"display":"none"});
        });


        $(".pic2_li,.pic1").hover(function(){  
            $(".pic1").css({"display":"block"});
        },function(){  
            $(".pic1").css({"display":"none"});
        });


        $(".pic3_li,.pic2").hover(function(){  
            $(".pic2").css({"display":"block"});
        },function(){  
            $(".pic2").css({"display":"none"});
        });
    });
    
    $(function(){  
        $('a[href*=#],area[href*=#]').click(function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
              var targetOffset = $target.offset().top;
              $('html,body').animate({
                scrollTop: targetOffset
              },
              1000);
              return false;
            }
          }
        });
      })
});

