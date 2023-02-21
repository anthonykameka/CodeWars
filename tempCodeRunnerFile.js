const longestConsec = (arr, k) => {
    // your code
  
  const n = arr.length
  
  if (n == 0 || k > n || k <= 0) {
    return ""
  }
  
  let maxLen = 0;
  let maxStr = "";
  
  for (let i = 0; i <= n-k; i++) {
    console.log("start i loop again")
    
    let currStr = ""
    for (let j = 0; j < i + k; j++ ) {
      currStr += arr[j]
      console.log("currStr" + currStr)
    }
    
  
    if (currStr.length > maxLen) {
      maxLen = currStr.length
      maxStr = currStr
    }
    console.log(maxStr)
    
  }
  return maxStr
}