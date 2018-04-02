$(window).resize(function(){ 
    // document.getElementById("pie-doughnut-1").removeAttribute("_echarts_instance_");
    // pie1();

});

$(document).ready(function(){ 
    // 目标管控和公司治理页面进入
    var myid=GetQueryString("id");
    if(myid !=null && myid.toString().length>1)
    {
        if(myid == "mbgk"){         // 目标管控
            $(".img-fake").css('background','url("static/img-fake/mbgk_dcl.png") no-repeat');
            $(".img-fake").css('background-size','100% 100%'); 

        }else{                      // 公司治理
            // 换head图片 -> 公司治理
            $(".head .title").css('background','url("static/third_2/top.png") no-repeat');
            $(".head .title").css('background-size','100% 100%'); 
          
            $(".img-fake").css('background','url("static/img-fake/gszl_dcl.png") no-repeat');
            $(".img-fake").css('background-size','100% 100%'); 
        }
    }

    $(".back").hover(function(){
        $(".back-img").css("background","url(static/second/backbutton_selected.png) no-repeat");
        $(".back-img").css("background-size","100% 100%");
        $(".back-img").css("margin","-0.13rem -0.13rem -0.13rem -0.13rem");
        $(".back-img").css("padding","0.13rem 0.13rem 0.13rem 0.13rem");
        },function(){
            $(".back-img").css("background","url(static/second/backbutton_normal.png) no-repeat");
            $(".back-img").css("background-size","100% 100%");
            $(".back-img").css("margin","");
            $(".back-img").css("padding","");
      });
    $(".close").hover(function(){
        $(".close-img").css("background","url(static/second/closebutton_selected.png) no-repeat");
        $(".close-img").css("background-size","100% 100%");
        $(".close-img").css("margin","-0.13rem -0.13rem -0.13rem -0.13rem");
        $(".close-img").css("padding","0.13rem 0.13rem 0.13rem 0.13rem");
        },function(){
            $(".close-img").css("background","url(static/second/closebutton_normal.png) no-repeat");
            $(".close-img").css("background-size","100% 100%");
            $(".close-img").css("margin","");
            $(".close-img").css("padding","");
      });
    $(".third_dcl .back").click(function() {
            window.location.href=encodeURI("second_level.html?id="+myid);
    });
    $(".third_dcl .close").click(function() {
            window.location.href="index.html";
    });

});

function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
