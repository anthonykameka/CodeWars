// Complete the solution so that it splits the string into 
// pairs of two characters. If the string contains an odd number of 
// characters then it should replace the missing second character of 
// the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']




//REFACTOR

const splitString2 = (str) => {
    let i = 0
    let result = []
    if (str.length % 2 !==0) {
        str = str + "_"
    }

    while (i < str.length) {
        result.push(str[i] + str[i+1])
        i +=2
    }
    return result
}

// LONG METHOD

const splitString = (str) => {
    let len = str.length;  //base cases
    let result = null;
    if (len == 2) {
        result = [str]
    }
    else if (len == 1) {
        result = [str + "_"]
    }
    else if (len == 0) {
        result = ["__"]
    }

    else {
        result = [];
        if (len % 2 == 0) {
            let pairs = len /2
            console.log("pairs " + pairs)
            for (let i = 0; i < pairs*2; i += 2) {
                console.log(i)
                let pair = str.substr(i, 2)
                console.log(pair)
                result.push(pair)
        }


    }
        else {
            let pairs = Math.floor(len/2)
            console.log("pairs " + pairs)
            for (let i = 0; i < pairs*2; i += 2) {
                let pair = str.substr(i, 2)
                result.push(pair)
            }
            result.push(str.slice(-1) + "_")
    }

    }
    return result
}



console.log(splitString("Guide"))
console.log(splitString2("c"))

