var arr= [1, 5, 3, 5, 6, 5, 4, 1, 2, 3, 3, 10, 1];

function removeDuplicate(arr){
    var arrLength= arr.length;
    var newArray= [];
    for(var i= 0; i< arrLength; i++){
        var newArrayLength= newArray.length;
        var duplicate= false;
        for(var j= 0; j< newArrayLength; j++){
            if(arr[i] === newArray[j]){
                duplicate= true;
                break;
            }
        }
        if(duplicate=== false){
            newArray[newArrayLength]= arr[i];
        }
    }
    return newArray;
}

console.log(removeDuplicate(arr));