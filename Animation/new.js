//hide(), show() and toggle().

// $("button").click(()=>{
//     // $(".myDiv").hide(2000).show(2000);
//     // $(".myDiv").hide(2000);
//     // $(".myDiv").show(2000);
//     // $(".myDiv").toggle(3000);
// });


//fadeOut(), fadeIn(), fadeToggle() and fadeTo(time , opacityValue).

// $("button").click(()=>{
//     // $(".myDiv").fadeOut(2000).fadeIn("fast");
//     // $(".myDiv").fadeOut(2000);
//     // $(".myDiv").fadeIn(2000);
//     // $(".myDiv").fadeToggle(3000);
//     // $(".myDiv").fadeTo(2000 , 0.5)
// });


//slideUp(), slideDown() and slideToggle();

// $("button").click(()=>{
//     // $(".myDiv").slideUp().slideDown();
//     // $(".myDiv").slideUp(2000);
//     // $(".myDiv").slideDown(2000);
//     // $(".myDiv").slideToggle(3000);
// });


//animate() - Single Statement and Multiple Statement animation.

// $("button").click(()=>{
//     // $(".myDiv").animate({width : "300px"});
//     // $(".myDiv").animate({width : "300px"},2000);
//     // $(".myDiv").animate({width : "300px", marginLeft : "30px"},2000);

//     // $(".myDiv").animate(
//     //     {
//     //         width : "300px",
//     //          marginLeft : "30px"
//     //     },2000);
// });

// $("button").click(()=>{
//     $(".myDiv").animate({width : "300px"},3000);
//     $(".myDiv").animate({marginLeft : "30px"},2000);
// });


//stop() and stop(true) - Multiple statement animation.

$(".b1").click(()=>{
    $(".myDiv").animate({width : "300px"},3000);
    $(".myDiv").animate({marginLeft : "30px"},2000);
});

$(".b2").click(()=>{
    // $(".myDiv").stop();
    $(".myDiv").stop(true);
});