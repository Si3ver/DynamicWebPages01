var content_data = {
    "1":{
        "1":[
        ["建立党建工作目标管理制度","97.44","b"],"97.44"
        ],
        "2":[
        ["将党建工作总体要求写入企业章程或基本制度","90.68","b"],
        ["落实一岗双职责的领导体制","93.59","b"],"92.13"
        ],
        "3":[
        ["坚持党组织研究讨论前置程序","82.42","b"],
        ["编制（编发）党组织会议记录、纪要","98.72","b"],"90.57"
        ],
        "4":[
        ["建立重大决策终身责任追究制度","87.18","b"],
        ["报告个人履职和廉洁自律情况","97.44","b"],"92.31"
        ],
        "5":[
        ["定期开展党委（党组）“两学一做”集中学习","98.72","b"],
        ["以“三会一课”为基本形式，开展基层党组织“两学一做”学习教育","97.44","b"],"98.08"
        ],
        "6":[
        ["开展党员考核评价","91.35","y"],
        ["开展党组织考核评价","95.51","b"],"93.43"
        ]
    },
    "2":{
        "1":[
        ["建立“三重一大”决策制度","100.00","b"],
        ["制定“三重一大”具体管理制度","97.44","b"],"98.72"
        ],
        "2":[
        ["形成“三重一大”决策的过程记录","100.00","b"],"100.00"
        ],
        "3":[
        ["明确“三重一大”决策监督责任","98.72","b"],"98.72"
        ],
        "4":[
        ["建立“三重一大”决策后评估制度","55.13","y"],
        ["建立“三重一大”责任追究制度","97.44","b"],"76.28"
        ]
    },
    "3":{
        "1":[
        ["建立重大项目管控制度并实现制度流程化","96.15","b"],"96.15"
        ],
        "2":[
        ["建立重大项目决策审批制度","97.44","b"],
        ["建立重大项目风险评估制度","85.90","b"],
        ["建立重大项目合同评审制度","91.03","b"],
        ["建立重大项目采购管理制度","93.59","b"],
        ["建立重大项目招标管理制度","94.87","b"],
        ["建立重大项目资金管理制度","97.87","b"],"92.95"
        ],
        "3":[
        ["建立重大项目后评价制度","73.08","y"],"73.08"
        ],
        "4":[
        ["建立重大项目责任落实与奖惩制度","83.97","b"],"83.97"
        ],
        "5":[
        ["建立管理重大项目流程的信息系统","50.00","y"],"50.00"
        ],
        "6":[
        ["编制和执行投资计划","90.61","b"],"90.61"
        ]
    },
    "4":{
        "1":[
        ["建立全面预算管理组织机构","89.95","b"],"98.72"
        ],
        "2":[
        ["编制本单位预算方案","98.72","b"],"98.72"
        ],
        "3":[
        ["明确预算目标与责任主体","93.59","b"],"93.59"
        ],
        "4":[
        ["编制预算执行情况问题清单","79.62","y"],
        ["设置预算控制红线","94.87","b"],
        ["预算执行反馈和偏差管理","88.03","b"],
        ["预算调整","96.15","b"],"89.67"
        ],
        "5":[
        ["实现预算各环节衔接，形成闭环","89.74","b"],
        ["采用对标评价进行预算考核","53.85","y"],
        ["预算问责","82.05","b"],"75.21"
        ],
        "6":[
        ["建立全面预算管理信息系统","37.82","r"],"37.82"
        ]
    },
    "5":{
        "1":[
        ["建立绩效考核组织体系","100.00","b"],"100.00"
        ],
        "2":[
        ["建立绩效考核办法","100.00","b"],"100.00"
        ],
        "3":[
        ["公开考核结果，接受群众监督","98.72","b"],"98.72"
        ],
        "4":[
        ["考核结果与干部任免挂钩","100.00","b"],"100.00"
        ]
    }
}

$(window).resize(function(){ 
    // document.getElementById("pie-doughnut-1").removeAttribute("_echarts_instance_");
    // pie1();

});
$(document).ready(function(){ 
    var urlinfo = window.location.href;//获取url 
    var urlcontent = urlinfo.split('?')[1].split('&');//拆分url得到”=”后面的参数 
    // 公司治理三级页面进入
    var myid1=urlcontent[0].split("=")[1];
    var myid2=urlcontent[1].split("=")[1];
    var name=decodeURI(urlcontent[2].split("=")[1]);
    if(myid1 !=null)
    {
       $(".content-all").addClass('content-'+myid1);
       $(".h"+myid1).show();
       $(".t1").text(myid1+"."+myid2);
       $(".t2").text(name);
       data = content_data[myid1][myid2];
       length =data.length - 1;
       $(".c"+length).show();
       var yellow=0;
       var red=0;
       for(var x = 1;x<=length;x++){
            $(".b"+x+" .xuhao").html(myid1+"."+myid2+"."+x);
            $(".b"+x+" .wenzi").html(data[x-1][0]);
            $(".b"+x+" .baifenbi").html(data[x-1][1]+"%");
            jindutiao = (data[x-1][1]/100)*3.2+"rem";
            $(".b"+x+" .jindutiao2").animate({width:jindutiao},1200);
            if(data[x-1][2] == "b"){$(".b"+x).addClass('button-blue');}
            else if(data[x-1][2] == "y"){ $(".b"+x).addClass('button-yellow');yellow=1}
            else {$(".b"+x).addClass('button-red');red=1}
       }
       if(red == 1){
            $(".icon-r-b").show();
            $(".icon-r-l").hide();
       }else if(yellow == 1){
            $(".icon-y-b").show();
            $(".icon-y-l").hide();
       }else{
            $(".icon-b-b").show();
            $(".icon-b-l").hide();
       }
       $(".baifenbi-all").html(data[length]+"%");
        $('.pointer').rotate('-52deg');
        var pointer = 180*(data[length]/100);
        var time = 2000*(data[length]/100)
       $(".pointer").animate({"rotate":"+="+pointer+"deg"},time);
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
    $(".button").hover(function(){
        $(this).find(".xuhao").css("right","0.06rem");
        $(this).find(".wenzi").css("left","0.66rem");
        $(this).find(".jindutiao").css("left","0.66rem");
        $(this).find(".jindutiao2").css("left","0.66rem");
        $(this).find(".baifenbi").css("left","4.06rem");
        },function(){
        $(this).find(".xuhao").css("right","0rem");
        $(this).find(".wenzi").css("left","0.6rem");
        $(this).find(".jindutiao").css("left","0.6rem");
        $(this).find(".jindutiao2").css("left","0.6rem");
        $(this).find(".baifenbi").css("left","4rem");
      });
    $(".third_two .back").click(function() {
            window.location.href="second_level.html?id=gszl";
    });
    $(".third_two .close").click(function() {
            window.location.href="index.html";
    });
    $(".button").click(function(){
        window.location.href=encodeURI("fourth_two_level.html?id1="+myid1+"&id2="+myid2+"&name="+name);

    });
    

    //圆饼图表效果
    // pie1();
});

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
                return ["50%", "50%"];
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
            center: ["50%", "50%"],
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