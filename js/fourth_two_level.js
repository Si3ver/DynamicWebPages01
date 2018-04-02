$(document).ready(function(){ 
    var urlinfo = window.location.href;//获取url 
    var urlcontent = urlinfo.split('?')[1].split('&');//拆分url得到”=”后面的参数 
    // 目标管控四级页面进入
    var myid1=urlcontent[0].split("=")[1];
    var myid2=urlcontent[1].split("=")[1];
    var name=decodeURI(urlcontent[2].split("=")[1]);
    var title = '开展基层党组织"两学一做"学习教育';
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
    jindu = [90.21,78.01,50.12];
    color = ["#5ae16d","#fff100","#c51b00"];
    jindutiao1 = (jindu[0]/100)*3.1+"rem";
    $(".bg-color-1 .jindutiao2").css({'background-color':color[0]});
    $(".bg-color-1 .jindutiao2").animate({width:jindutiao1},1200,function(){
        $(this).siblings('.baifenbi').addClass('baifenbi-1');
        $(this).siblings('.baifenbi').text(jindu[0]+"%");
    });
    jindutiao2 = (jindu[1]/100)*3.1+"rem";
    $(".bg-color-2 .jindutiao2").css({'background-color':color[1]});
    $(".bg-color-2 .jindutiao2").animate({width:jindutiao2},1200,function(){
        $(this).siblings('.baifenbi').addClass('baifenbi-2');
        $(this).siblings('.baifenbi').text(jindu[1]+"%");
    });
    jindutiao3 = (jindu[2]/100)*3.1+"rem";
    $(".bg-color-3 .jindutiao2").css({'background-color':color[0]});
    $(".bg-color-3 .jindutiao2").animate({width:jindutiao3},1200,function(){
        $(this).siblings('.baifenbi').addClass('baifenbi-3');
        $(this).siblings('.baifenbi').text(jindu[2]+"%");
    });
    
    

    $(".fourth_two .back").click(function() {
            window.location.href=encodeURI("third_two_level.html?id1="+myid1+"&id2="+myid2+"&name="+name);
    });
    $(".fourth_two .close").click(function() {
            window.location.href="index.html";
    });
    
});
