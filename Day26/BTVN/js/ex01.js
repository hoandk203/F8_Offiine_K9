var num= 11;

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= num/2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function reverseNumber(num){
    var newNum=0;
    while(num !== 0){
        newNum= newNum*10 + num%10;
        num = (num / 10)|0; 
    }
    return newNum
}

function soDoiXung(num){

    while(true){
        if(isPrime(num) && reverseNumber(num) === num){
            return num;
        }
        num++;
    }
}

console.log(soDoiXung(13));