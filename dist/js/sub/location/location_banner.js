$(document).ready(function(){
    //전역변수
    var $banner = $("#loBanner");
    var $list = $banner.find(".list");
    var wid = $list.children("li").outerWidth();
    var $prev = $banner.find(".prev");
    var $next = $banner.find(".next");
    var speed = 500;
    var i= -wid;
    var timer;
    var isDone = true;
    var len = $list.children("li").length;
    var total_wid = wid * len;
    $list.css({width: total_wid, marginLeft: -wid});
    

    //로딩시 자동롤링 시작
    timer = setInterval(move ,20);

    //마우스 오버 이벤트
    $banner.on("mouseenter",function(){
        clearInterval(timer);
    });

    //마우스 아웃 이벤트
    $banner.on("mouseleave",function(){
        timer = setInterval(move ,20);
    });

    //next 버튼 이벤트
    $next.on("click",function(e){
        e.preventDefault();

        if(isDone){
            isDone = false;
            next();
        }                
    });

    //prev 버튼 이벤트
    $prev.on("click",function(e){
        e.preventDefault();

        if(isDone){
            isDone=false;
            prev(); 
        }               
    });

    //롤링함수 정의
    function move(){
        if(i <= -wid*2){
            i= -wid;
            $list.children("li").first().appendTo($list);
        }else{
            i--;
        } 
        $list.css({marginLeft : i});
    }

    //next함수정의
    function next(){
        $list.animate({marginLeft : -wid*2},speed,function(){
            $list.children("li").first().appendTo($list);
            $list.css({marginLeft : -wid});
            //next모션이 끝난직후 현재의 위치값을 다시 i값에 업데이트
            i = -wid;
            isDone = true;                   
        });
    }

    //prev함수정의
    function prev(){
        $list.animate({marginLeft : 0},speed,function(){
            $list.children("li").last().prependTo($list);
            $list.css({marginLeft : -wid});
            i= -wid;
            isDone = true; 
        });
    }
})