$(document).ready(function(){ 
    var urlinfo = window.location.href;//获取url 
    var urlcontent = urlinfo.split('?')[1].split('&');//拆分url得到”=”后面的参数 
    // 目标管控四级页面进入
    var myid1=urlcontent[0].split("=")[1];
    var myid2=urlcontent[1].split("=")[1];
    var name=decodeURI(urlcontent[2].split("=")[1]);
    var title = '以"三会一课"为基本形式,开展基层党组织"两学一做"学习教育';
    if(title.length>10){
        $(".middle").addClass('middle-long').removeClass('middle');
        $(".m-title").addClass('m-title-long').removeClass('m-title');
        $(".m-h").html(title);
    }else{
       $(".m-h").html(title); 
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
    $('.dr_1').click(function(){
        // 其他关闭
        if($('.dr_2').find('.double_arrow_top').length>0){
            $('.dr_2').click();
        }
        if($(this).find('.double_arrow_low').length>0){
            height = $(this).parent().find('.tt').height();
            $(this).siblings('.ldgz').css({'height':height});
            $(this).siblings('.ldgz').css({'background-color':"#014886"});
            $(this).siblings('.ldgz').css({'z-index':3});
            $(this).siblings(".title-big-long").css({'z-index':4});
            $(this).css({'background-color':"#014886"});
            $(this).find(".double_arrow_low").addClass("double_arrow_top").removeClass("double_arrow_low");
        }else{
            $(this).siblings('.ldgz').css({'height':"1.26rem"});
            $(this).siblings('.ldgz').css({'background-color':"rgba(0,210,255,0.1)"});
            $(this).siblings('.ldgz').css({'z-index':1});
            $(this).css({'background-color':"rgba(0,210,255,0.1)"});
            $(this).find(".double_arrow_top").addClass("double_arrow_low").removeClass("double_arrow_top");
        }   
    });
    $('.dr_2').click(function(){
        if($('.dr_1').find('.double_arrow_top').length>0){
            $('.dr_1').click();
        }
        if($(this).find('.double_arrow_low').length>0){
            height = $(this).parent().find('.tt').height();
            $(this).parent().css({'background-color':"#014886"});
            $(this).siblings().css({'height':height});
            $(this).parent().css({'height':height+$(this).height()});
            $(this).siblings().css({'background-color':"#014886"});
            $(this).siblings().css({'z-index':3});
            $(this).css({'background-color':"#014886"});
            $(this).find(".double_arrow_low").addClass("double_arrow_top").removeClass("double_arrow_low");
        }else{
            $(this).siblings().css({'height':'1rem'});
            $(this).parent().css({'background-color':"rgba(255,255,0,0.1)"});
            $(this).parent().css({'height':'1.2rem'});
            $(this).siblings().css({'background-color':""});
            $(this).siblings().css({'z-index':1});
            $(this).css({'background-color':""});
            $(this).find(".double_arrow_top").addClass("double_arrow_low").removeClass("double_arrow_top");
        }
    });
    $('.zhankai').click(function(){
        if($('.dr_1').find('.double_arrow_top').length>0){
            $('.dr_1').click();
        }
        if($(this).find('.arrow_low').length>0){         
            $(".c-3").fadeOut('fast');
            $(".c-1").fadeOut('fast',function(){
                $(".c-2").css({'margin-top':'2.7rem'});
                $('.c-2').animate({'margin-top':'1.3rem'}, 'slow');
                $('.c-2').animate({'max-height':'6.4rem'}, 'slow');
            });
            $(this).html("<div class='arrow_top'></div>收起表格");
        }else{

            $('.c-2').animate({'max-height':'4.58rem'}, 'slow');
            $('.c-2').animate({'margin-top':'2.7rem'}, 'slow',function(){
                $(".c-2").css({'margin-top':'0.3rem'});
                $(".c-1").fadeIn('fast');
                $(".c-3").fadeIn('fast');
            });
            
            $(this).html("<div class='arrow_low'></div>点击显示全部项目");
        }
    });
    $(".fourth_one .back").click(function() {
            window.location.href=encodeURI("third_one_level.html?id1="+myid1+"&id2="+myid2+"&name="+name);
    });
    $(".fourth_one .close").click(function() {
            window.location.href="index.html";
    });
    
});
