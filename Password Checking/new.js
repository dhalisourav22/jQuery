$("button").click(function(){
    let password1 = $("#pass1").val();
    let password2 = $("#pass2").val();
    if(password1 != "" && password2 != ""){
        if(password1 == password2){
            alert("Succesfully Login...!");
        }
        else{
            alert("Password Mismatch...!");
        }
    }
    else{
        alert("Please Enter Password...!")
    }
});