// module - are encapsulated code .
// other way of creating function 
// instead of function sayhi(name){
//  console.log(`you bastard ${name} hello there`)
// }
const sayhi = (name) =>{
  console.log(`you bastard ${name} HI !`)
}
// exporting from module function.
// using exports function of module.
module.exports = sayhi;

// invoking the function 
// three times
// sayhi('basu')
// sayhi('nikhil')
// sayhi('nova')

//accessing the names 
const names = require('./names');
// we get console loog in the form of objects
console.log(names);
