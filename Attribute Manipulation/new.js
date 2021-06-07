/*

//Showing the attributes value
console.log(document.querySelector("a").getAttribute("href"));

//Adding the new attributes
document.querySelector("a").setAttribute("title","This is a link..!");

//Changing the attribute's value
let changeAble = document.querySelector("a");
changeAble.setAttribute("href","https://www.youtube.com");

*/

//Showing the attributes value
let atteibutesValue = $("a").attr("href");
console.log(atteibutesValue);

//Changing the attributes value
$("a").attr("href","https://www.youtube.com");

//Adding a new attributes
$("a").attr("title","This is a link..!")

//we remove any attributes
$("a").removeAttr("href"); 