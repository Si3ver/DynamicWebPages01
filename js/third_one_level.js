var content_data = {
    "V":{
        "1":[
        ["营业收入(F)","y"],
        ["利润总额(C)","b"],
        ["经济增加值(C)","b"],"增长战略,1"
        ],
        "2":[
        ["军品营业收入(G)","b"],
        ["军品承接合同(G)","b"],"增长战略,1"
        ],
        "3":[
        ["民品营业收入(G)","y"],
        ["民品承接合同(G)","y"],"增长战略,1"
        ],
        "4":[
        ["两金占流动资产比率(C)","b"],
        ["资产负债率(G)","b"],"生产力战略,2"
        ]
    },
    "C":{
        "1":[
        ["完成重点型号生产任务","y"],
        ["推动海洋装备技术跨进陆空天","b"],
        ["推动对外技术引进立项及签约","b"],"服务军方客户,3"
        ],
        "2":[
        ["提升造船效率(G)","b"],
        ["做强非船产业","b"],"服务民品客户,4"
        ],
        "3":[
        ["确保质量形势平稳","y"],
        ["确保生产安全形势平稳","y"],
        ["落实节能环保任务","b"],
        ["完成保密工作任务、力保不出现重大失泄密事件","b"],
        ["完成以扶贫为核心的社会责任任务","b"],"社会责任/品牌,5"
        ]
    },
    "P":{
        "1":[
        ["完成动力板块涉军研制任务","y"],
        ["完成电子信息板块涉军研制任务","b"],
        ["完成国防科技创新和武器装备技术发展战略研究","b"],"以军为本,6"
        ],
        "2":[
        ["提升武器装备科研生产保障能力","b"],"以军为本,6"
        ],
        "3":[
        ["推动重大军民融合能力基地建设","y"],
        ["优化动力板块产业布局","y"],
        ["推进重点项目与军民融合产业事业群建设","b"],"军民融合,7"
        ],
        "4":[
        ["加强产业投资与管理","y"],"军民融合,7"
        ],
        "5":[
        ["推进海洋探测与开发装备技术项目","b"],
        ["提升集团公司智能制造水平","b"],
        ["推进电子信息科研项目","b"],"技术领先,8"
        ],
        "6":[
        ["推进基础研究和前沿技术研究","y"],"技术领先,8"
        ],
        "7":[
        ["推进创新平台建设","y"],"技术领先,8"
        ],
        "8":[
        ["推进资产证券化","b"],"产融一体,9"
        ],
        "9":[
        ["推进证券市场股权、债券发行","y"],"产融一体,9"
        ],
        "10":[
        ["加强资金、保险和授信等集中管理","y"],"产融一体,9"
        ],
        "11":[
        ["增加海外业务收入和布点","b"],"参与“一带一路”,10"
        ],
        "12":[
        ["加快发展军贸业务","y"],"参与“一带一路”,10"
        ],
        "13":[
        ["推进供给侧改革","y"],"深化改革,11"
        ],
        "14":[
        ["完成三供一业和厂办大集体移交任务","b"],
        ["完成“晒态势、促提升”任务","b"],
        ["推进集中采购、公车改革","b"],"深化改革,11"
        ],
        "15":[
        ["加强全面风险管理","y"],
        ["力保不出现群体性、恶性上访事件","y"],"监督与控制,12"
        ],
        "16":[
        ["推进“法治船舶”建设","y"],"监督与控制,12"
        ],
        "17":[
        ["加强内审和内控评价工作","b"],
        ["落实监事会工作","b"],"监督与控制,12"
        ],
        "18":[
        ["加强巡视工作","y"],
        ["开展党风廉政和反腐倡廉工作","y"],"监督与控制,12"
        ]
    },
    "L":{
        "1":[
        ["推进党团工作","y"],
        ["推进企业文化建设","b"],"提升组织能力,13"
        ],
        "2":[
        ["完善信息化发展规划","b"],"提高信息化水平,14"
        ],
        "3":[
        ["加强领导干部检查、考核管理","y"],"加强人力资源开发,15"
        ],
        "4":[
        ["加强科技和技能领军人才队伍建设","b"],"加强人力资源开发,15"
        ]
    }
};

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
        //背景待定
        //动画待完善
       $(".t1").text(myid1+""+myid2);
       $(".t2").text(name);
       data = content_data[myid1][myid2];
       length =data.length - 1;
       if(length > 3){
        $(".middle1").css("left","2rem");
       }
       $(".c"+length).show();
       var yellow=0;
       var red=0;
       for(var x = 1;x<=length;x++){
            $(".c"+length+" .b"+x+" .xuhao").html(myid1+""+myid2+"-"+x);
            $(".c"+length+" .b"+x+" .wenzi").html(data[x-1][0]);
            a = $(".c"+length+" .b"+x).attr('class');
            num = a.split('-')[1];
            if(data[x-1][1] == "b"){$(".c"+length+" .b"+x).addClass('button-blue'+"-"+num);}
            else if(data[x-1][1] == "y"){ $(".c"+length+" .b"+x).addClass('button-yellow'+"-"+num);yellow=1;}
            else {$(".c"+length+" .b"+x).addClass('button-red'+"-"+num);red=1;}
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
       $(".content-all").addClass('content-'+data[length].split(",")[1]);
       if(data[length].split(",")[0].length>9){
        $(".tab").addClass('tab-long').removeClass('tab');
        $(".h").html(data[length].split(",")[0]);
       }
       $(".h").html(data[length].split(",")[0]);
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
    $(".third_one .back").click(function() {
            window.location.href="second_level.html?id=mbgk";
    });
    $(".button-2,.button-3,.button-1,.button-4,.button-5,.button-6").click(function(){
        window.location.href=encodeURI("fourth_one_level.html?id1="+myid1+"&id2="+myid2+"&name="+name);

    });
    $(".third_one .close").click(function() {
            window.location.href="index.html";
    });
    chImg();

    //圆饼图表效果
    // pie1();
});
Img1 = new Array();
for(var x=0;x<100;x++){
    if(x<10){
        Img1[x] = "static/dongxiao/dongxiao_0000"+ x +".png"
    }else{
        Img1[x] = "static/dongxiao/dongxiao_000"+ x +".png"
    }
    
}
size = Img1.length;  
i = 0;  
function chImg(){  
    $("#picID1").attr('src',Img1[i]);  
    i++;  
    if (i>=size) return 1;  
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