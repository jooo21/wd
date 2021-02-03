$(document).ready(function(){
    var isDone = true;
    var delay = convertSpeed('.circle>li') + 100;

    $(".btn").on("click",function(e){
        e.preventDefault();
        var i = $(this).parent().index();
        var has = $(this).hasClass("on");

        
        if(isDone){
            activation(i,has);     
            isDone = false;
        }           
    });

    function activation(i,has){
        if(has) {
            $(".btn").removeClass("on");
            setTimeout(function(){
                $(".circle>li.on").removeClass("on");
                isDone = true;
            }, delay);
            
        }else{
            $(".btn").removeClass("on");
            $(".circle>li").eq(i).find(".btn").addClass("on");

            setTimeout(function(){
                $(".circle>li.on").removeClass("on");
                $(".circle>li").eq(i).addClass("on");

                isDone = true;
            }, delay);
        }
        
    }

    function convertSpeed(selector){
        var dur = $(selector).css('transition-duration');
        dur = parseFloat(dur.split('s')[0]) * 1000;
        return dur;
    }

});