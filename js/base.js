$(document).ready(function(){
    var timer = null;
    var drop_down_con = document.getElementsByClassName('.drop_down_con')

    $(".drop_down").mouseover(function(){
        $(".drop_down img").attr("src","image/tutu.gif");
        $(".drop_down span").addClass("drop_down_span");
        $(".drop_down").addClass("drop_down_bg");
        $(".drop_down>div").addClass("drop_down_con_show");
        // $(".drop_down>div").slideDown();
    });
        $(".drop_down").mouseout(function(){
           
            $(".drop_down img").attr("src","image/WOW.gif");
            $(".drop_down span").removeClass("drop_down_span");
            $(".drop_down").removeClass("drop_down_bg");
            $(".drop_down>div").removeClass("drop_down_con_show");
           
        });
        $("body").mouseover(function(e){
            if($(e.target).closest(".drop_down").length==0){
                $(".drop_down>div").removeClass("drop_down_con_show");
                // $(".drop_down>div").slideUp();
            };
        });
});