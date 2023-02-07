// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

// Examples:

// findNb(1071225) --> 45
// findNb(91716553919377) --> -1

// INPUT: m = total volume
// OUTPUT : n where n^3 n-1^3 .... 1^3

function findNb(m) {
    // your code
    
    for (let n = 1; n <= m; n++){
        let total = 0;
        for (let i = n; i >= 1; i--) {

            total += i**3
            if (total == m) {
                return n
            } else if (total > m) {
                return -1
            }
        }
    }
    return -1
}

// simplify // above is not efficient


function findNb2(m) {
    let n = 1
    let total = 0

    while (total<= m) {
        total += n**3
        if (total == m) {
            return n
        }
        n++
    }
    return -1
}

console.log(findNb2(144296576547201))