//That way we ger the problem or error..!

// $("button").click(()=>{
//     $("p").hide(3000);
//     alert("Our hiding proccess is done.");
// });


//Use of callback function for solve this problem. 

$("button").click(()=>{
    $("p").hide(3000, ()=>{                  //This is anonymous callback function. we can use any kind of anonymous function.
        alert("Our hiding proccess is done.");
    });
});

