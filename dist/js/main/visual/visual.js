$(document).ready(function(){
    var $Vtab = $("#tab");
    var $Vbtn = $Vtab.find(".btns li");
    var $Vbox = $Vtab.find(".boxs div");
    var $Vnum = $Vtab.find("#number span");

    $Vbtn.on("click",function(e){
        e.preventDefault();
        var i=$(this).index();
        visualtab(i);
        
        
    });

    function visualtab(index){
        $Vbtn.removeClass("on");
        $Vbtn.eq(index).addClass("on");
        $Vbox.find("video").get(0).pause();

        $Vbox.fadeOut();
        $Vbox.eq(index).show();
        $Vbox.eq(index).find("video").get(0).play();
        if(index===0) {
            $Vnum.css({transform:'translateY(-5%)'})
        }else{
            $Vnum.css({transform:'translateY('+(-35*index)+'%)'})

        }
    }
})