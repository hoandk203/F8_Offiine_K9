var arr1= [1, 4, 6, 10, 12]; // mang khong co so nguyen to
var arr2= [1, 2, 3, 4, 5, 7, 8, 11]; // mang co so nguyen to

function isPrime(number){
    if(number <= 1){
        return false;
    }else{
        for(var i= 2; i <= (number/2); i++){
            if(number % i ===0){
                return false;
            }
        }
    }
    return true;
}

function averagePrime(arr){
    var arrLength= arr.length;
    var result= 0;
    var count= 0;
    for(var i= 0; i< arrLength; i++){
        if(isPrime(arr[i])){
            result= result + arr[i];
            count++;
        }
    }
    if(count=== 0){
        return `Khong co so nguyen to`;
    }
    return result/count;
}

console.log(averagePrime(arr1));