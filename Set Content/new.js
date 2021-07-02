//text()  -- This is set only plane text.

// $("button").click(()=>{
//     $("p").text("This is changed..!");
// });


//html()  -- This is set not only plane text but also this is set the text with html.

// $("button").click(()=>{
//     $("p").html("This is <strong>changed</strong>..!");
// });


//val()  -- This is changed the text field valur.

// $("button").click(()=>{
//     $("input").val("Sourav Dhali");
// });


//Using callback function in text();

// $("button").click(()=>{
//     $("p").text(function(index,oldContent){  //Here the first parameter means the index number and the second parameter means the old value of the parageraph.
//         return "NEW : This is new text. OLD : "+oldContent+" INDEX : "+index;
//     });
// });


//Using callback function in html();

$("button").click(()=>{
    $("p").html(function(i,old){  //Here the first parameter means the index number and the second parameter means the old value of the parageraph.
        return "NEW : This is <strong>new text</strong>. OLD : "+old+" INDEX : "+i;
    });
});

