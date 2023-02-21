// In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

// For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

// The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

// Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

// All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

// Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

// Have fun!

function pickPeaks(arr) {
    // initialize the arrays
    let pos = [];
    let peaks = [];
    
    // loop through elements
    for (let i = 1; i < arr.length - 1; i++) {
      // initialize element and prev and next
      let curr = arr[i];
      let next = arr[i + 1];
      let prev = arr[i-1]
      
      // if current is greater than previous this means we are entering a peak if we go back down
      // at any point
      // so initialize j which is next element
      if (curr > prev) {
        let j = i + 1;
        
        // j++ while j is NOT last (not peak) , while next element is same as current (plateau), 
        while (j < arr.length && arr[j] === curr) {
          j++;
        }
        
        // if j is NOT last and current is greater than arr[j] which is when we go down
        // we ONLY push if there is a derement, no peak if LAST
        
        if (j < arr.length && curr > arr[j]) {
          pos.push(i);
          peaks.push(curr);
        } else if (next < curr) {
          pos.push(i);
          peaks.push(curr);
        }
      }
    }
    return { pos: pos, peaks: peaks };
  }