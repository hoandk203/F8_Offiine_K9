
var number= '0123456789';
var symbol= '!@#$%^&*()';

var amount= false;
var isUpper= false;
var isLower= false;
var isNumber= false;
var isSymbol= false;


function checkPassword(password){
    if( password.length > 8){
        amount= true;
    }
    for(var i= 0; i<= password.length; i++){
        var char= password.charAt(i);

        if(char >= 'A' && char <= 'Z'){
            isUpper= true;
        }

        if(char >= 'a' && char <= 'z'){
            isLower= true;
        }

        if(number.includes(char)){
            isNumber= true;
        }

        if(symbol.includes(char)){
            isSymbol= true;
        }
    }

    console.log(amount, isUpper, isLower, isNumber, isSymbol);

    return amount && isUpper && isLower && isNumber && isSymbol;
}

console.log(checkPassword(`Hoandkdkdk`));