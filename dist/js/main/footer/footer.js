$(document).ready(function(){
    var $footerA =$(".footerMore");

    $footerA.on("click",function(e){
        e.preventDefault();
        $(this).toggleClass("on");

    })
});