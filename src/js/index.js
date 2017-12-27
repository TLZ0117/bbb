
//划过导航时li下边框变红
$('.common1').on('mouseenter',function(){
    
})
//划过导航时a边框、字体变红
$('.entry').on('mouseenter',function(){
    console.log(1);
})

//划过产品让隐藏的子页面显现
$('.production,.xl0').hover(
    function(){
        $('.xl0').css('display','block');
    },
    function(){
        $('.xl0').css('display','none');
    }
);
//划过服务让隐藏的子页面显现
$('.server,.xl1').hover(
    function(){
        $('.xl1').css('display','block');
    },
    function(){
        $('.xl1').css('display','none');
    }
);
//划过大腕让隐藏的子页面显现
$('.bighand,.xl2').hover(
    function(){
        $('.xl2').css('display','block');
    },
    function(){
        $('.xl2').css('display','none');
    }
);
//（上）划过轮播图让方向箭头显现
$('.bigbox,.flash-btn').hover(
    function(){
        $('.flash-btn').css('display','block');
    },
    function(){
        $('.flash-btn').css('display','none');
    }
)
//（下）划过轮播图让方向箭头显现
$('.picarea,.flash-btna').hover(
    function(){
        $('.flash-btna').css('display','block');
    },
    function(){
        $('.flash-btna').css('display','none');
    }
)
//让轮播盒子的高度总等于图片的高度
iHeight = $('.special').height();
$('.bigbox').height(iHeight);
// 获取屏幕窗口宽度和特殊图片时的a的高度
var _width = $(window).width();
var _height = $(".special1").height();
//当屏幕窗口变化时
$(window).resize(function(){
    iHeight = $('.special').height();
    $('.bigbox').height(iHeight);
   //媒体查询时让轮播盒子的高度总等于图片的高度
    $(function () {
        //获取浏览器宽度
        var _width = $(window).width();
        var _height = $(".special1").height();
        if (_width < 745) {
            //当屏幕窗口的宽度小于745px时
            $(".bigbox").height(_height);
            $('.special1').css('display', 'block');
            $('.flash-btn').css('display','none');      
        }else{
            $('.special1').css('display', 'none');
        }
    });
});

//轮播图无缝滚动(大)
$(function () {
    $('.next').click(function () {
        $(".bigbox").animate({ marginLeft: "-100%" }, 800, function () {
            $(".special").eq(0).appendTo($(".bigbox"));
            $(".bigbox").css('marginLeft', '0px');
        });
    })
    $('.prive').click(function () {
        $(".bigbox").css('marginLeft', '-100%');
        $(".special").eq(4).prependTo($(".bigbox"));
        $(".bigbox").animate({ marginLeft: "0px" }, 800);
    })
    // //当鼠标移入遮罩层，按钮显示，移出遮罩层，按钮消失
    // $(".bigbox").onmouseover = function () {
    //     clearInterval(timer);
    //     oBtn[0].style.display = 'block';
    //     oBtn[1].style.display = 'block';
    // };
    // //当鼠标移出的时候开启定时器让ul自动向前运动
    // $(".bigbox").onmouseleave = function () {
    //     setInterval(domove, 2000);
    //     oBtn[0].style.display = 'none';
    //     oBtn[1].style.display = 'none';
    // };
    
})
 
 



//当屏幕窗口小于745时
if (_width < 745) {
    //默认的轮播盒子高度
    $(".bigbox").height(_height);  
    $('.picarea,.flash-btna').hover(
        function () {
            $('.flash-btna').css('display', 'none');
        },
        function () {
            $('.flash-btna').css('display', 'none');
        }
    )
    //轮播图无缝滚动(小)
    $(function () {
        $('.next').click(function () {
            $(".bigbox").animate({ marginLeft: "-100%" }, 800, function () {
                $(".special1").eq(0).appendTo($(".bigbox"));
                $(".bigbox").css('marginLeft', '0px');
            });
        })
        $('.prive').click(function () {
            $(".bigbox").css('marginLeft', '-100%');
            $(".special1").eq(4).prependTo($(".bigbox"));
            $(".bigbox").animate({ marginLeft: "0px" }, 800);
        })
    })
    
}else{
    $('.special1').css('display', 'none');
   
}
//点击右边浮动切换
$(".float-small").on('click',function(){
    $(this).css('display','none');
    $(".float-big").css('display','block');
});

$(".cancel").on("click",function(){
    $(".float-big").css('display','none');
    $(".float-small").css('display','block');
})



//点击列表时出现隐藏内容
$(".liebiaoo").on('click',function(){
    $('.zhedao').css('display','block');
    $('#body').addClass('noscroll');
    // $('.liebiao').css('display','block');
    $(".liebiao").animate({ left: '0' }, "normal");

})
//点击箭头时显示隐藏内容
$('.icon-jiantouxia').on('click',function(){  
        $(this).toggleClass('active');
        $(this).next().stop(true).toggle('slow');
        // $(this).next().slideToggle();
        // $('.cpa').css('display','block');
})

//点击遮挡层自己时隐藏
$(".zhedao").on('click',function(){
    $(this).css('display', 'none');
    $(".liebiao").animate({ left: '-60%' }, "normal");
    $('#body').removeClass('noscroll');
})