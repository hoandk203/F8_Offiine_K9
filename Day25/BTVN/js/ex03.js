var arr = [["a", 1, true, 3], ["b", 2, false]];


//ham flatten cua bai 2, de lam phang mang
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

function sortByType(arr){
    var newArr= [];
    var typesArr= [];

    flatten(arr).forEach(function(element){
        var type= typeof element;
        if(typesArr.indexOf(type) === -1){
            typesArr.push(type);
            newArr.push([element]);
        }else{
            newArr[typesArr.indexOf(type)].push(element);
        }
    })
    return newArr;
}

console.log(sortByType(arr));;