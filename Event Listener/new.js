//Text Manipulation.
// $(".button1").dblclick(()=>{
//     $(".head1").text("This is changed..!");
// });


//For work easy we store selected valu into a variable.
// let changeable = $(".button1");   
// let heading = $(".head1")


//This is hiding any data.
// changeable.click(()=>{
//     heading.hide("slow");    //Here we tell the time of hiding.("slow" or "hide" or milliseconds)
// });

//This is showing any data.
// $(".button2").click(function(){
//     heading.show(2000)
// })


//We can hide and show data by one button and not using if/ else and count by toggle().
// changeable.click(()=>{
//     heading.toggle("fast");
// });


//We can add class by addClass() and we can remove class by removeClass() But by using toggleClass() we can add or remove class by a same button like toggle() do hide() or show() at a time by one single button. toggle has two phase basicaly.

// changeable.click(()=>{
//     heading.toggleClass("style1");  //This is much easy then use addClass() or removeClass().
// });


//This doument ready event use for make sure thet your html and css part means all the document part being ready.
// $(document).ready(()=>{
//     alert("hi");
// });


//focus() and blur() event.
// $(()=>{
//     $("input").focus(function(){
//       $(this).css("background-color", "yellow");
//     });

//     $("input").blur(function(){
//      $(this).css("background-color", "white");
//     });
// });


//Adding event listener with multiple element.
// $(".myButton").click(function () {  //we must use treditional function, we can not use arrow function.
//     var texts = this.innerHTML;
//     $("h1").text(texts + " is clicked.")
// });

//Adding event listener with multiple element By using on method.
$(".myButton").on(click,function () {
    var texts = this.innerHTML;
    $("h1").text(texts + " is clicked.")
});