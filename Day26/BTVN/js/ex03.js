var nums=nums = [1,2,0]

function findNumber(arr){
    var num= 1;
    arr.forEach(function(element){
        while(true){
            if(element !== num){
                return num;
            }
            num++;
        }
    })
    return num;
}

console.log(findNumber(nums));