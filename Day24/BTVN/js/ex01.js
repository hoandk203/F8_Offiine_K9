var arr= [3, 5, 1, 9, 8];

function min(arr){
    var arrLength= arr.length;
    var min= arr[0];
    for (var i= 0; i< arrLength; i++){
        if(arr[i] < min){
            min= arr[i];
        }
    }
    return min;
}

function max(arr){
    var arrLength= arr.length;
    var max= arr[0];
    for (var i= 0; i< arrLength; i++){
        if(arr[i] > max){
            max= arr[i];
        }
    }
    return max;
}

console.log(`So nho nhat trong mang la: ${min(arr)}`);
console.log(`So nho lon trong mang la: ${max(arr)}`);