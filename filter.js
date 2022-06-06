const number = [-1,-2,-3,0,1,2,3];


//used for array manupilation.
// used to filter an array.  
// (value)
//  value is the array elements.

const newNumber = number.filter((value)=>{
    return value >= 0;
})

console.log(newNumber);