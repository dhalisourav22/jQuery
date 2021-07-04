//Ancestors(1st div) - parent(), parents() and parentsUntil().
//Travers up in the DOM tree.

$(document).ready(() => {

    // $("button").click(() => {
    //     $("span").parent().css({ "border": "2px solid red" });
    // });


    // $("button").click(() => {    //This ambiguity happen because everything is parent of span tag.(body, div etc)
    //     $("span").parents().css({ "border": "2px solid red" });
    // });


    // $("button").click(()=>{
    //     $("span").parents("ul").css({"border": "2px solid red"});
    // });


    // $("button").click(()=>{
    //     $("span").parentsUntil("div").css({"border": "2px solid red"});
    // });

});




//Descendants(1st div) - children() and find().
//Travers down in the DOM tree.

$(document).ready(() => {

    // $("button").click(() => {
    //     $("li").children().css({ "border": "2px solid red" });
    // });


    // $("button").click(() => {      //Here .first means a P tag with class called first.
    //     $("ul").children("li.first").css({ "border": "2px solid red" });
    // });


    // $("button").click(()=>{
    //     $("ul").find("*").css({"border": "2px solid red"});
    // });


    // $("button").click(()=>{
    //     $("div").find("li").css({"border": "2px solid red"});
    // });

});



//Siblings(2nd div) - siblings(), next(), nextAll(), nextUntil(), prev(), prevAll() and prevUntil().
//Travers side by side in the DOM tree.

$(document).ready(() => {

    // $("button").click(() => {
    //     $("h3").siblings().css({ "border": "2px solid red" });
    // });
    // $("button").click(() => {
    //     $("h2").siblings().css({ "border": "2px solid red" });
    // });


    // $("button").click(() => {     
    //     $("span").next().css({ "border": "2px solid red" });
    // });


    // $("button").click(() => {     
    //     $("span").nextAll().css({ "border": "2px solid red" });
    // });


    // $("button").click(() => {     
    //     $("span").nextUntil("h3").css({ "border": "2px solid red" });
    // });


    // $("button").click(() => {     
    //     $("h3").prev().css({ "border": "2px solid red" });
    // });


    // $("button").click(() => {     
    //     $("h3").prevAll().css({ "border": "2px solid red" });
    // });


    // $("button").click(() => {     
    //     $("h3").prevUntil("p").css({ "border": "2px solid red" });
    // });

});



//Filtering - first(), last(), eq(), filter() and not().

$(document).ready(() => {

    // $("button").click(() => {
    //     $("li").first().css({ "border": "2px solid red" });
    // });


    // $("button").click(() => {
    //     $("li").last().css({ "border": "2px solid red" });
    // });


    // $("button").click(()=>{
    //     $("li").eq(1).css({"border": "2px solid red"});
    // });


    // $("button").click(()=>{
    //     $("li").filter(".filt").css({"border": "2px solid red"});
    // });


    // $("button").click(()=>{
    //     $("li").not(".filt").css({"border": "2px solid red"});
    // });

});