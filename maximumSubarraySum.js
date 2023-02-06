// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function(arr){
    // ...
    
        let currentMax = arr[0]
        let totalMax = currentMax
        if (arr.length == 0) {
        return 0
    }
    
    for (var i = 1; i < arr.length; i++) {
    
        console.log("arr[i]: " + arr[i])
        currentMax = Math.max(arr[i], currentMax + arr[i])
        console.log("current: " + currentMax)
        totalMax = Math.max(currentMax, totalMax)
        console.log("total: " + totalMax)
    }
    return totalMax
    
}
  //Input: array of numbers
  // output:  max sum of numbers that are next to eachother in sequence
  // Steps

/* 
1. iterate through the array each time starting from new beginning and count the max within each

  */