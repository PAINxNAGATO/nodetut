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
console.log('hello world');
console.log('hello bastards');
console.log('oye oye oye');
console.log('keys is bastard');
// using nodemon saves us the trouble of re-running the code again again.
// nodemon in js <===> liveserver in browser 
// just save an run and refresh
// to stop nodemon in termonal press ctrl + c
// instead of global packages we can use npx

// what is npx ?

// npx => stands for package runner => or execute.
// use for creating things without installing packages globally
// instead of setting the cli globally we can use npx .
// for 
