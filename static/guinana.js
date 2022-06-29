$("#logo-fg").click(function(){
    $(this).slideUp();
});

$(".narrative").click(function(){
    // if closed --> widen on click
    if ($(this).find(".open:visible").length == 0) {
        // widen
        $(this).siblings(".spacer").removeClass("col-md-5");
        $(this).siblings(".spacer").addClass("col-md-2");
        $(this).removeClass("col-md-2");
        $(this).addClass("col-md-8");

        // make sure the other segments aren't open
        $(".narrative").not(this).siblings(".spacer").addClass("col-md-5");
        $(".narrative").not(this).siblings(".spacer").removeClass("col-md-2");
        $(".narrative").not(this).addClass("col-md-2");
        $(".narrative").not(this).removeClass("col-md-8");
    } else {
        // back to the start
        $(this).siblings(".spacer").addClass("col-md-5");
        $(this).siblings(".spacer").removeClass("col-md-2");
        $(this).addClass("col-md-2");
        $(this).removeClass("col-md-8");
    };
    
    // on click -> open and close all
    $(this).find(".open").slideToggle();
    $(".narrative").not($(this)).find(".open").slideUp();
    $(this).removeClass("red");
}); 

$("body").addClass("test-rotate");

// Base class = test-rotate
// Rotates every couple of seconds

var colors = [
    "./static/img/bananas.jpg",
    "./static/img/cacao.jpg",
    "./static/img/honey.jpg",
    "./static/img/vanilla.jpg",
    "./static/img/future.jpg"
];
var i = 0;

setInterval(function() {
    if($($(".narrative").find('.open:visible')).length == 0) {
        $(".test-rotate").css("background-image", "url("+colors[i]+")");

        // remove class red from (i-1)th child
        $(".test-rotate").find(".narrative").eq(i).addClass("red");
        $(".test-rotate").find(".narrative").eq(i-1).removeClass("red");
        
        // add class red to i-th child
        i++;
        if(i > 4) { i = 0; };
    };
 }, 5000);

// When hovered, switch to test
// Test is specific element

$(".narrative").mouseenter(function(){
    if($($(".narrative").find('.open:visible')).length == 0) {
        $(".narrative").not($(this)).removeClass("red");
        $(this).addClass("red");
        $("body").addClass("test");
        $("body").removeClass("test-rotate");

        $(".test").css("background-image", "url("+colors[$(".narrative").index(this)]+")");
    };
});

$(".narrative").mouseleave(function(){
    $(this).removeClass("red");
    $("body").removeClass("test");
    $("body").addClass("test-rotate");
});
