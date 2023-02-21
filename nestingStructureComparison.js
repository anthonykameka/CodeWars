// Complete the function/method (depending on the language) 
// to return true/True when its argument is an array that has the same nesting structures and same corresponding length
//  of nested arrays as the first array.

// For example:

//  // should return true
// [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
// [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

//  // should return false 
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// // should return true
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// // should return false
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     
// For your convenience, there is already a function 'isArray(o)'
// declared and defined that returns true if its argument is an array, false otherwise.



Array.prototype.sameStructureAs = function (other) {
    // Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'.
    if (!isArray(other) || this.length !== other.length ) {
        return false
    };

    let check = true;
    this.forEach((element, index) => {
        if (isArray(element) !== isArray(other[index])) {
        check = false
        return;
      }
      
    if (isArray(element)) {
        if (!element.sameStructureAs(other[index])) {
            check = false;
            return;
        }
    }
})
    return check;

};


// INPUT array // to call, the array would be used like 
// arrIAmChecking.sameStructureAs(InputArray)

//OUTPUT true/false

// NOTE, this stands for the arrayIAmChecking

// 1. first step is to compare both this and other lengths and verify if the input array is an array with provided function
// 2. if this first test doesnt pass, then it is surely not the same structure
// 3. for each loop through initial array
// 4. forEach element, check if the corresponding input array at that the same index shares the structure (isArray)
// 5. if passed, check if the element is an array. if it is, we know they both are at this point. and vice versa.
// 6. RECURSIVE the METHOD sameasStructure to do the above checks until it has gone through all elements.