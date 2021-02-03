$(document).ready(function(){
    /*
    Math.max(num1, num2); 두개의 숫자 중에서 큰 값을 반환
    Math.min(num1, num2);  두개의 숫자 중에서 작은 값을 반환
    */

    /*
        만약에 반복문 안쪽에 return문을 넣으면 한번만 반복이 돌고 바로 코드 종료
        $().each문 안쪽에서는 아예 return자체가 지원이 안됨 (구문 오류)
        var arr = [1,2,3,4,5];
        for(var i=0; i<arr.length; i++){
            var ht_max = Math.max(ht_max, arr[i]);
           return ht_max;
        }
        */  
    var $header = $("#header_sub");
    var $gnb_li = $("#gnb>li");
    var $gnb_ul = $gnb_li.children("ul");
    var $gnbBtn = $(".gnbBtn");
    var headpos = $header.height();
    var speed = 300;  

    $header.css({transform:"translateY(0px)"});
    $gnbBtn.hide();
    $(window).on("scroll",function(){
        var scroll = $(this).scrollTop();
        var isOn=$gnbBtn.hasClass("on");

        if(isOn){
            if(scroll >=headpos){
                $header.addClass("on");
                $gnbBtn.show();
            }else{
                $header.removeClass("on");
                $header.css({transform:"translateY(0px)"});
                $gnbBtn.hide();
            }
            
            
        }else{
            if(scroll >=headpos){
                $header.css({transform:"translateY(-121px)"});
                $gnbBtn.show();

            }else{
                $header.css({transform:"translateY(0px)"});
                $gnbBtn.hide();
            }
        }
    })
    //헤더에 마우스 올렸을떄, 포커스가 들어갔을떄
    $header.on("mouseenter focusin", openSub);

    //헤더에 마우스가 떠났을때, 포커스가 나갔을떄
    $header.on("mouseleave focusout", closeSub);

    //1depth메뉴에서 마우스가 벗어나도 1depth메유 활성화 유지
    $gnb_li.on("mouseenter",function(){
        $(this).children("a").addClass("on");
    });
    $gnb_li.on("mouseleave",function(){
        $(this).children("a").removeClass("on");
    });


    $gnbBtn.on("click",function(e){
        e.preventDefault();
        $(this).toggleClass("on");
        var isOn=$(this).hasClass("on");

        if(isOn){
            $header.css({transform:"translateY(0px)",top:0})
            $header.addClass("on");
        }else{
            $header.css({transform:"translateY(-121px)"})
            $header.removeClass("on");
        }

    })
    //제일 큰 서브 높이값 반환 함수
    function getMax(){
        var ht_max=0;
              
        $gnb_li.each(function(){ 
            var ht = $(this).children("ul").outerHeight();        
            ht_max = Math.max(ht_max, ht)+30;            
        });  
        return ht_max;               
    }


    //2depth 여는 함수 정의
    function openSub(){
        var ht = $header.outerHeight();
        var bg = $gnb_ul.find("li").css("background-color");

        $header.prepend(
            $("<div class='bgGnb'>")
                .css({
                    width:"100%", height:getMax(), position:"absolute",
                    top:0, left:0, backgroundColor:bg, display:"none",paddingTop:"100px",
                    borderRadius:"0px 0px 50px 0px"
                })
        )
        $gnb_ul.stop().slideDown(speed);
        $(".bgGnb").stop().slideDown(speed);
    }


    //2depth 닫는 함수 정의
    function closeSub(){
        $gnb_ul.stop().slideUp(speed/3);
        $(".bgGnb").stop().slideUp(speed/2,function(){
            $(this).remove();
        });
    }

    
});