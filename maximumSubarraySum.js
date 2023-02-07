var maxSequence = function(arr){
    // ...
    
    let currentMax = arr[0]
    let totalMax = currentMax
    
    if (arr.length == 0) {
        return 0
    }
 // check if all numbers are negative
    if (arr.filter(num => num < 0).length == arr.length) {
        return 0;
    }
    
    for (var i = 1; i < arr.length; i++) {
    
        currentMax = Math.max(arr[i], currentMax + arr[i])
        totalMax = Math.max(currentMax, totalMax)

    }
    return totalMax
    
  }
  
  //Input: array of numbers
  // output:  max sum of numbers that are next to eachother in sequence
  // Steps
  
  /* 
  1. iterate through the array each time starting from new beginning and count the max within each