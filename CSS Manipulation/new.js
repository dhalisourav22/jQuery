//Changing the existing CSS 
$("h1").css("color","blue");

//Adding a new CSS
$("h1").css("font-size","300%");
$("h1").css("font-style", "italic");

//all css in one function(Here we use json)
$("h1").css({"background-color": 'red','width':'400px', 'padding': '20px',"border-radius": "20%"});

//Adding class in an element
$("p").addClass("styleByJs styleByJs1");

//Rrmoving class of an specific element
$("p").removeClass("styleByJs styleByJs1");
