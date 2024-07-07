var arr= [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

var newArr= [];
function flatten(arr){
    arr.forEach(function(element){
        if(Array.isArray(element)){
            newArr.concat(flatten(element));
        }else{
            newArr.push(element);
        }
    })
    return newArr;
}

console.log(flatten(arr));