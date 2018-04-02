$(window).resize(function(){ 
    document.getElementById("pie-doughnut-1").removeAttribute("_echarts_instance_");
    document.getElementById("pie-doughnut-2").removeAttribute("_echarts_instance_"); 
    pie1();
    pie2();
});
$(document).ready(function(){ 
    chImg();
    pie1();
    pie2();
    $(".left .main-content").click(function() {
            window.location.href="second_level.html?id=mbgk";
    });
    $("#pie-doughnut-1").click(function() {
            window.location.href="second_level.html?id=mbgk";
    });

    $(".right .main-content").click(function() {
            window.location.href="second_level.html?id=gszl";
    });
    $("#pie-doughnut-2").click(function() {
            window.location.href="second_level.html?id=gszl";
    });

});

Img1 = new Array();
Img2 = new Array();
for(var x=0;x<90;x++){
    if(x<10){
        Img1[x] = "static/left_light/light_left2_0000"+ x +".png"
        Img2[x] = "static/right_light/light_right2_0000"+ x +".png"
    }else{
        Img1[x] = "static/left_light/light_left2_000"+ x +".png"
        Img2[x] = "static/right_light/light_right2_000"+ x +".png"
    }
    
}
size = Img1.length;  
i = 0;  
function chImg(){  
    $(".picID1").attr('src',Img1[i]);  
    $(".picID2").attr('src',Img2[i]); 
    i++;  
    if (i>=size) i = 0;  
    setTimeout("chImg()",22);
} 

function pie1(){
    var echart = echarts.init(document.getElementById('pie-doughnut-1'));  
    option = {
        // animation: false,
        animationDuration:1500,
        tooltip: {
            show:true,
            trigger: 'item',
            formatter: function(params, ticket, callback){
                var num = '29';
                var str = '<div style="text-align: center" id="toolTipBox"><p style="font-size:0.4rem;margin:0px">'+ num + '</p></div>'
                return str
            },
            position: function (point, params, dom, rect, size) {
                //size参数可以拿到提示框的outerWidth和outerheight，dom参数可以拿到提示框div节点。
                //console.log(dom)可以看到，提示框是用position定位
                var marginW = Math.ceil(size.contentSize[0]/2);
                var marginH = Math.ceil(size.contentSize[1]/2);
                dom.style.marginLeft='-' + marginW + 'px';
                dom.style.marginTop='-' + marginH + 'px';
                return ["44%", "52%"];
            },
            alwaysShowContent:true,
            backgroundColor:false,  //设置提示框的背景色
            textStyle:{
                color:'#00d2ff'
            }
        },          
        series: [{
            name:'目标管控',
            type:'pie',
            radius: ['60%', '90%'],
            center: ["44%", "52%"],
            avoidLabelOverlap: false,
            hoverAnimation:false,   //关闭 hover 在扇区上的放大动画效果。
            cursor:'default', //鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 cursor。
            itemStyle: {
                normal : { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                    label : {  //饼图图形上的文本标签
                        show : false
                    },
                    labelLine : {     //标签的视觉引导线样式
                        show : false
                    }, 
                },
                emphasis: {  
                    show : false
                }  
            } ,
            data:[
                {
                    value:5,  
                    itemStyle:{
                        normal:{color:'#fff100'}
                    },
                    name:'黄色'
                },
                {
                    value:24,
                    itemStyle:{
                        normal:{color:'#5ae06d'}
                    }, 
                    name:'绿色'
                }
            ]
        }]
    };
                  
    echart.setOption(option);  
    echart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: 0
    });
    setTimeout(function () { 
        $(".d-right-1").css('display','inline-block'); 
    }, 1400);
}

function pie2(){
    var echart = echarts.init(document.getElementById('pie-doughnut-2'));  
    option = {
        animation: true,
        animationDuration:1500,
        tooltip: {
            show:true,
            trigger: 'item',
            formatter: function(params, ticket, callback){
                var num = '26';
                var str = '<div style="text-align: center" id="toolTipBox"><p style="font-size:0.4rem;margin:0px">'+ num + '</p></div>'
                return str
            },
            position: function (point, params, dom, rect, size) {
                //size参数可以拿到提示框的outerWidth和outerheight，dom参数可以拿到提示框div节点。
                //console.log(dom)可以看到，提示框是用position定位
                var marginW = Math.ceil(size.contentSize[0]/2);
                var marginH = Math.ceil(size.contentSize[1]/2);
                dom.style.marginLeft='-' + marginW + 'px';
                dom.style.marginTop='-' + marginH + 'px';
                return ["44%", "52%"];
            },
            alwaysShowContent:true,
            backgroundColor:false,  //设置提示框的背景色
            textStyle:{
                color:'#00d2ff'
            }
        },          
        series: [{
            name:'目标管控',
            type:'pie',
            radius: ['60%', '90%'],
            center: ["44%", "52%"],
            // silent:true,
            avoidLabelOverlap: false,
            hoverAnimation:false,   //关闭 hover 在扇区上的放大动画效果。
            cursor:'default', //鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 cursor。
            itemStyle: {
                normal : { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                    label : {  //饼图图形上的文本标签
                        show : false
                    },
                    labelLine : {     //标签的视觉引导线样式
                        show : false
                    }, 
                },
                emphasis: {  
                    show : false
                }  
            } ,
            data:[
                {
                    value:6,  
                    itemStyle:{
                        normal:{color:'#fff100'}
                    },
                    name:'黄色'
                },
                {
                    value:20,
                    itemStyle:{
                        normal:{color:'#5ae06d'}
                    }, 
                    name:'绿色'
                }
            ]
        }]
    };
                  
    echart.setOption(option);  
    echart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: 0
    });
    setTimeout(function () { 
        $(".d-right-2").css('display','inline-block'); 
    }, 1400);  
}
