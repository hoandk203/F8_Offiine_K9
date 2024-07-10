var nums1 = [1,2], nums2 = [3];

function findMedian(arr1, arr2){
    var newArr= arr1.concat(arr2);
    var newArrLength= newArr.length;
    
    if (newArrLength % 2 === 0) {
        return (newArr[newArrLength / 2 - 1] + newArr[newArrLength / 2]) / 2;
    } else {
        return newArr[(newArrLength / 2)|0];
    }
}

console.log(findMedian(nums1, nums2));