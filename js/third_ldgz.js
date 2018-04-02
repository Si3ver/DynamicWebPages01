$(window).resize(function(){ 
    // document.getElementById("pie-doughnut-1").removeAttribute("_echarts_instance_");
    // pie1();

});

$(document).ready(function(){ 
    // 目标管控和公司治理页面进入
    var myid=GetQueryString("id");
    if(myid != null && myid.toString().length > 1)
    {
        if(myid == "mbgk"){         // 目标管控
            //显示主内容背景
            //滚动条效果(ldgz)
            $(".left").css('display','inline-block');
            if($('#colee').height()<$('#colee1').height()){
                // console.log(""+$('#colee').height()+$('#colee1').height());
                scoll1();
            }else{
                $('#colee').css('overflow-y','hidden'); 
            }
            //插入新闻图片
            var div = $('.detail-block')[0];
            console.log(div);
            for(var i = 1; i <= 24; i++){
                if($(div).children("div.news"+i).children("div.imgSlides").length!=0){
                    $(div).children("div.news"+i).children("div.imgSlides").append("<img src='static/third_ldgz/left_"+i+".png' class=newsImg />");
                    // $(div).children("div.news"+i).children("div.imgSlides").css("background",'url("static/third_ldgz/left_'+i+'.png") no-repeat');
                    // $(div).children("div.news"+i).children("div.imgSlides").css("background-size",'9.79rem, 3.24rem');
                    // console.log('url("../static/third_ldgz/left_'+i+'.png") no-repeat;');
                }
            }

        }else{                      // 公司治理
            // 换head图片 -> 公司治理
            $(".head .title").css('background','url("static/third_2/top.png") no-repeat');
            $(".head .title").css('background-size','100% 100%'); 
            //显示镜像的主内容背景
            $(".right").css('display','inline-block'); 
            //滚动条效果
            if($('#r-colee').height()<$('#r-colee1').height()){
                // console.log($('#r-colee1').height());
                scoll3();
            }else{
                $('#r-colee').css('overflow-y','hidden');
            }
            //插入新闻图片
            var div = $('.detail-block')[1];
            console.log(div);
            for(var i = 1; i <= 24; i++){
                if($(div).children("div.news"+i).children("div.imgSlides").length!=0){
                    $(div).children("div.news"+i).children("div.imgSlides").append("<img src='static/third_ldgz/left_"+i+".png' class=newsImg />");
                    // $(div).children("div.news"+i).children("div.imgSlides").css("background",'url("static/third_ldgz/left_'+i+'.png") no-repeat');
                    // $(div).children("div.news"+i).children("div.imgSlides").css("background-size",'9.79rem, 3.24rem');
                    // console.log('url("../static/third_ldgz/left_'+i+'.png") no-repeat;');
                }
            }
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
    $(".third_ldgz .back").click(function() {
            window.location.href=encodeURI("second_level.html?id="+myid);
    });
    $(".third_ldgz .close").click(function() {
            window.location.href="index.html";
    });

});

function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

function scoll1(){
    
    $('#colee').niceScroll({
        cursorcolor: "#00d2ff",//#CC0071 光标颜色
        cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
        cursorwidth: "0.055rem", //像素光标的宽度
        cursorborder: "0rem solid #666", // 游标边框css定义
        cursorborderradius: "0.05rem",//以像素为光标边界半径
        autohidemode: "true"
    });
    var speed=20;
    var colee2=document.getElementById("colee2");
    var colee1=document.getElementById("colee1");
    var colee=document.getElementById("colee");
    colee2.innerHTML=colee1.innerHTML; //克隆colee1为colee2
    function Marquee1(){
    //当滚动至colee1与colee2交界时
    $("#colee").getNiceScroll().hide();
    
    var hx = colee2.offsetTop - colee1.offsetTop;
    if(hx-colee.scrollTop<=0){
        colee.scrollTop-=colee2.offsetTop; //colee跳到最顶端
    }else{
        colee.scrollTop++;
        // console.log(" "+colee.scrollTop + ","+colee2.offsetTop+ ","+colee1.offsetTop);
    }
    }
    var MyMar1=setInterval(Marquee1,speed);//设置定时器
    //鼠标移上时清除定时器达到滚动停止的目的
    $('.ldgz').mouseover(function() {
        clearInterval(MyMar1);
        $("#colee").getNiceScroll().show();
    });
    $('#ascrail2000').mouseover(function() {
        clearInterval(MyMar1);
        $("#colee").getNiceScroll().show();
    });
    $('#ascrail2000').css('cursor','pointer');

    $('.p').click(function() {              //点击nav栏的新闻---------------------------------
        var div = $(this);
        div.css("background","url('static/third_ldgz/banner_bg_highlight.png') 100% 100% no-repeat"); //换毛玻璃
        div.css('background-size','100% 100%'); 
        if(div.children("div.t").children("span").html() == undefined)
            div.children("div.t").prepend("<span id='xxx'><img src='static/third_ldgz/star.png' height='12px' width='12px' style='margin-right:8px'></span>");  //增加星星
        div.children("div.t").css("font-size","0.26rem");               //增大字体
        for(var i = 1; i <= 18; i++){                                   //清除旧新闻
            $(".detail-block .news"+i).css("display", "none");
        }
        $(".detail-block ."+div.attr("news")).css("display", "block");  //显示相关新闻

    });

    //鼠标移开时重设定时器
    $('.ldgz').mouseout(function(){
        MyMar1=setInterval(Marquee1,speed);
        $('.p').css("background","url('static/third_ldgz/banner_bg.png') no-repeat");                                                  //恢复透明玻璃
        $('#xxx').remove();                                             //移除星星
        $('.p .t').css("font-size","0.22rem");                          //缩小字体
    });
}

function scoll3(){
    $('#r-colee').niceScroll({
        cursorcolor: "#00d2ff",//#CC0071 光标颜色
        cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
        cursorwidth: "0.055rem", //像素光标的宽度
        cursorborder: "0rem solid #666", // 游标边框css定义
        cursorborderradius: "0.05rem",//以像素为光标边界半径
        autohidemode: "true"
    });
    var speed=10;
    var colee2=document.getElementById("r-colee2");
    var colee1=document.getElementById("r-colee1");
    var colee=document.getElementById("r-colee");
    colee2.innerHTML=colee1.innerHTML; //克隆colee1为colee2
    function Marquee1(){
    //当滚动至colee1与colee2交界时
    $("#r-colee").getNiceScroll().hide();

    var hx = colee2.offsetTop - colee1.offsetTop;
    if(hx - colee.scrollTop<=0){
        colee.scrollTop-=colee2.offsetTop; //colee跳到最顶端
    }else{
        colee.scrollTop++;
    }
    }
    var MyMar1=setInterval(Marquee1,speed);//设置定时器
    //鼠标移上时清除定时器达到滚动停止的目的
    $('.ldgz').mouseover(function() {
        clearInterval(MyMar1);
        $("#r-colee").getNiceScroll().show();
    });
    $('#ascrail2000').mouseover(function() {
        clearInterval(MyMar1);
        $("#r-colee").getNiceScroll().show();
    });
    $('#ascrail2000').css('cursor','pointer');

    $('.p').click(function() {              //点击nav栏的新闻---------------------------------
        var div = $(this);
        div.css("background","url('static/third_ldgz/banner_bg_highlight.png') 100% 100% no-repeat"); //换毛玻璃
        div.css('background-size','100% 100%'); 
        if(div.children("div.t").children("span").html() == undefined)
            div.children("div.t").prepend("<span id='xxx'><img src='static/third_ldgz/star.png' height='12px' width='12px' style='margin-right:8px'></span>");  //增加星星
        div.children("div.t").css("font-size","0.26rem");               //增大字体
        for(var i = 1; i <= 18; i++){                                   //清除旧新闻
            $(".detail-block .news"+i).css("display", "none");
        }
        $(".detail-block ."+div.attr("news")).css("display", "block");  //显示相关新闻

    });

    //鼠标移开时重设定时器
    $('.ldgz').mouseout(function(){
        MyMar1=setInterval(Marquee1,speed);
        $('.p').css("background","url('static/third_ldgz/banner_bg.png') no-repeat");                                                  //恢复透明玻璃
        $('#xxx').remove();                                             //移除星星
        $('.p .t').css("font-size","0.22rem");                          //缩小字体
    });
}
