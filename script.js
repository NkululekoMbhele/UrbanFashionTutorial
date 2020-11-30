$(document).ready(function() {

    // $("").hide();
    // $(".btn").click(function() {
    //     $("ul").fadeToggle();
    //     $(".cart").fadeToggle("slow");
    //     $("h1").fadeToggle(3000);
    // });

    $(".btn").click(function() {
        $(".cart").animate({
            left: '250px'
        });
    });

});