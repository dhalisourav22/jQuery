//selecting with tag name.
$("h2").text("This is heading of our JQuery..!");  //this is change all the heading. This way is not applicable in js.

//Select multiple element.
$(".my-div p , .name").text("This is the demo of multiple element..!");    //This way is not applicable in js.




//text()  -- this is change the document's text(can't use html in this)
let peraWithName = $(".bio");   //we can use this way
peraWithName.text("This text replaced by text method.");

//html()  -- this is change the document's text(can use html in this)
let changingTheExtraPera =$(".extra1");
changingTheExtraPera.html("<strong>This is bold</strong>");



//after()
let newh3 = $("<h3></h3>").html("<em>This is new text..!</em>");
$(".extra1").after(newh3);

//before()
$(".extra1").before($("<h2></h2>").text("This is new text..!"));



//append()
$("h4").append(". I read in NUBT.");

//prepend()
$("h4").prepend("My name is ");