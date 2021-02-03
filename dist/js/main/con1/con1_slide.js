$(document).ready(function(){
    var con1 = $("#con1");
    var $prev = con1.find(".prev");
    var $next = con1.find(".next")
    var $panel_li = con1.find(".panel li");
    var isDone = true;

    $prev.on("click", function(e){
        e.preventDefault();
        if(isDone){
            prev();
            isDone =false;
        }
    });

    $next.on("click", function(e){
        e.preventDefault();
        if(isDone){
            next();
            isDone =false;
        }
        
    });

    function prev(){
        $panel_li.first().appendTo(".panel");
        $panel_li.removeClass("on");
        $panel_li.eq(2).addClass("on");
        isDone=true;
    }

    function next(){
        $panel_li.last().prependTo(".panel");
        $panel_li.removeClass("on");
        $panel_li.eq(2).addClass("on");
        isDone=true;

    }

});