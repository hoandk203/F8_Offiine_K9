var arrA= [1, 4, 3, 2];
var arrB= [5, 2, 6, 7, 1, 1];



function intersectArr(arrA, arrB){
    var newArr= [];
    var newArr1= [];
    arrA.concat(arrB).forEach(function(element){
        if(newArr.includes(element) && !newArr1.includes(element)){
            newArr1.push(element); 
        }
        newArr[newArr.length]= element;
    })
    newArr1.sort(function(a, b){
        if(b> a){
            return -1;
        }
    })
    return newArr1;
}

console.log(intersectArr(arrA, arrB));