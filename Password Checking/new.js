$("button").click(function(){                   //This checking will be happen, when we are clicked the logIn button.
    let password1 = $("#pass1").val();
    let password2 = $("#pass2").val();
    if(password1 != "" && password2 != "")      //If any password of there is not empty or null.
        if(password1 == password2){             //If password are matched.
            alert("Succesfully Login...!");
        }
        else{                                   //If password are not matched.
            alert("Password Mismatch...!");
        }
    }
    else{                                       //If any of those password is empaty or null.
        alert("Please Enter Password...!")
    }
});
