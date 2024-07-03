var arr= [1, 5, 3, 6, 1, 15, 7, 6, 1, 2];
var element= 4;

function sortArray(arr){
    var arrLength= arr.length;
    for(var i= 0; i< arrLength; i++){
        for(var j= 0; j< arrLength; j++){
            if(arr[j] > arr[j+ 1]){
                var temp= arr[j];
                arr[j]= arr[j+ 1];
                arr[j+ 1]= temp;
            }
        }
    }

    return arr;
}
var newArray= sortArray(arr);
console.log(`Mang sau khi sap xep: ${newArray}`);

function insertArray(arr, element, index){
    var arrLength= arr.length;
    var newArray= [];
    for(var i= 0; i< arrLength; i++){
        if(i=== index){
            newArray[newArray.length]= element;
        }
        newArray[newArray.length]= arr[i];
    }
    return newArray;
}

console.log(insertArray(newArray, element, 4));