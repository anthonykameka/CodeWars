// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note
// consecutive strings : follow one after another without an interruption



const longestConsec = (arr, k) => {
    // your code
  // n is length of array
    const n = arr.length
    // prelim checks.
    // if length is 0. if the k is greater than the length, or if k is negative return "" as per the problem
    if (n == 0 || k > n || k <= 0) {
        return ""
    }
    // initialize max len and str
    let maxLen = 0;
    let maxStr = "";
    

  // loop through the array from index 0 up to the index that is k positions before the end of the array
  // the reason we only loop up to n - k is that any concatenation of k strings starting at index i
  // with i + k being out of bounds of the array, will be shorter than a concatenation that starts
  // at an index that is less than n - k.


    for (let i = 0; i <= n-k; i++) {
    
        
        let currStr = ""
        for (let j = i; j < i + k; j++ ) {
            
            currStr += arr[j]
        }
          
        if (currStr.length > maxLen) {
            maxLen = currStr.length
            maxStr = currStr
        }
           
    }
    return maxStr
    }



// input array and integer
// output = string of concatenated strings. First longest

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))