
$(document).ready(()=>{

    let textArea = $("#result");
    function insertDigit(digit){
        let currentDigit = textArea.val();   //This is return a string type value.
        textArea.val(currentDigit + digit);   
    }   

    function clearTextArea(){
        textArea.val("");  //Setting value empty by empty string.
    }

    function calculate(){
        let result = eval(textArea.val());   //eval() is a function which is evaluate everything which is under it.
        textArea.val(result);
    }

    function deleteDigit(){
        let presentValue = textArea.val();
        if(presentValue!=""){
            textArea.val(presentValue.slice(0,-1));
        }
    }

});
