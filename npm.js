const _ = require('lodash');

//
const item = [1,[2,[3,4,5,],6],8,[9,10]];
//
// flattendeep methode of lodash flattens array
// flattening an array means reducing the dimensionality of the array 
// nested , 2-D , 3-D , Array are converted to 1-D Array
const newitems = _.flattenDeep(item);
// printing elements of array after flatening the array.
console.log(newitems);