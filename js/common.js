var rem;
$(window).resize(function () {      //当浏览器大小变化时页面自适应大小
    var Btype = BrowserType();
    var whdef = 100/2160;// 表示2160的设计图,使用100PX的默认值
    var hwdef = 100/1400;
    body_height = $(document.body).height();
    body_width = $(document.body).width();
    if(body_height/body_width <= 1400/2160){
        rem = body_height * hwdef;// 以默认比例值乘以当前窗口高度,得到该高度下的相应FONT-SIZE值
        $('html').css('font-size', rem + "px");
        $(".body").height(body_height);
        $(".body").offset({top:0});
        $(".content").height(body_height);
        $(".content").width((body_height/1400)*2160);
        $(".content").offset({top:0,left:(body_width-(body_height/1400)*2160)/2});        
    }else{
        rem = body_width * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
        $('html').css('font-size', rem + "px");
        $(".body").height((body_width/2160)*1400);
        $(".body").offset({top:(body_height-(body_width/2160)*1400)/2});
        $(".content").height((body_width/2160)*1400);
        $(".content").width(body_width);
        $(".content").offset({top:(body_height-(body_width/2160)*1400)/2,left:0});
    }
    // // 首页字体溢出的问题进行适配
    //     if(!!!Btype['edge'] && !!!Btype['safari'] && !!!Btype['ie'] && !!!Btype['opera']){
    //         if(rem <63){
    //            $(".index .font-4").css({
    //             // 'font-size':'14px',
    //             '-webkit-transform': 'scale('+(rem/100)+')',
    //             '-o-transform': 'scale(1)'
    //            });
    //             $(".index .button .q1").css({width:'0.07rem'});
    //             $(".index .button .q3").css({
    //                 width: '1.5rem'
    //             }); 
    //             $(".index .button").css({'line-height':'0.6rem'});
    //         }else{
    //             $(".index .font-4").css({
    //             '-webkit-transform': '',
    //             '-o-transform': ''
    //            });
    //             $(".index .button .q1").css({width:''});
    //             $(".index .button .q3").css({
    //                 width: '1.22rem'
    //             }); 
    //             $(".index .button").css({'line-height':'0.47rem'});
    //         }  
    //     }
        $(".content").css('display','block');
    
});

$(document).ready(function(){
    // 页面自适应大小
    var Btype = BrowserType(); 
    var whdef = 100/2160;// 表示2160的设计图,使用100PX的默认值
    var hwdef = 100/1400;
    body_height = $(document.body).height();
    body_width = $(document.body).width();
    if(body_height/body_width <= 1400/2160){
        rem = body_height * hwdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
        $('html').css('font-size', rem + "px");
        $(".body").height(body_height);
        $(".body").offset({top:0});
        $(".content").height(body_height);
        $(".content").width((body_height/1400)*2160);
        $(".content").offset({top:0,left:(body_width-(body_height/1400)*2160)/2});
        
    }else{
        rem = body_width * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
        $('html').css('font-size', rem + "px");
        $(".body").height((body_width/2160)*1400);
        $(".body").offset({top:(body_height-(body_width/2160)*1400)/2});
        $(".content").height((body_width/2160)*1400);
        $(".content").width(body_width);
        $(".content").offset({top:(body_height-(body_width/2160)*1400)/2,left:0});
    }
    // // 首页字体溢出的问题进行适配
    //     if(!!!Btype['edge'] && !!!Btype['safari'] && !!!Btype['ie'] && !!!Btype['opera']){
    //         if(rem < 63){
    //            $(".index .font-4").css({
    //             // 'font-size':'14px',
    //             '-webkit-transform': 'scale('+(rem/100)+')',
    //             '-o-transform': 'scale(1)'
    //            });
    //             $(".index .button .q1").css({width:'0.07rem'});
    //             $(".index .button .q3").css({
    //                 width: '1.5rem'
    //             }); 
    //             $(".index .button").css({'line-height':'0.6rem'});
    //         }
        
    //     }
        $(".content").css('display','block');
});

function BrowserType()
{
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.indexOf('edge') !== - 1 ? Sys.edge = 'edge' : ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1]:
        (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
        (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
        (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
        (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
        (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
    return Sys;
}