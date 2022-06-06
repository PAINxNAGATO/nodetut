// Async Await

// function fun(){
//   return "oye oye oye";
// }

// let a = fun();
// console.log(a);

// if we do the same thing with async await
// by typing async before function 
// then that function will return an promise 
// promise that is in javascript
// async function pp(){
//   console.log("inside pp function");
//   return "oye oye oye erwin";
// }
// console.log("before calling pp");
// let a = pp();
// // return a promise here 
// console.log("after calling pp");
// console.log(a);
// console.log("last line of js file");

// Async await




// code 

// we fs function to return a promise 
// and then use async await for it 
// to invoke it .


const fs = require('fs').promises;
// in the above defination it returns a promise.



// util module 
// const util = require('util');
// we can use util methode to return a promise 
// i e util.promisify(fs.readFile)
// i e util.promisefy(fs.writeFile)
// const readFilePromise  = util.promisify(fs.readFile);
// const writeFilePromise = util.promisify(fs.writeFile);
// here we use getText function 
// and also use promise function 
// const getText = (path) => {
//   return new Promise((resolve,reject)=>{
//     fs.readFile(path,"utf8",(err,data) =>{
//       if(err){
//         reject(err);
//       }
//       else{
//         resolve(data);
//       }
//     })  
//   })
// }

// calling the function with a promise 
// in an call back function to execute a single line of code no braces are used 
// to call back multiple line of code curly braces are used 
// getText('./content/first.txt').then((data) => console.log(data)).catch((err) => console.log(data)
// )
// getText('./content/second.txt').then((data) => console.log(data)).catch((err) => console.log(err)
// )

// using Async
// equivalent to usage of then() and catch().
const start = async() => {
  try {
    const first = await fs.readFile("./content/first.txt","utf8")
    const second = await fs.readFile("./content/second.txt","utf8");
    await fs.writeFile("./content/luffy.txt", `I am gonna be the pirate king : ${first} ${second}`);
  console.log(first,second);
  } catch (error) {
    console.log(error);
  }
}
start();
// 
// async -- returns a promise attched to a function.
// await -- it receives a promise as an function.
// and await function acts as an call back 
// it tells the program to continue its execution 
// wait for its reponse , it reponds when the promise has been resolved .
// cleaner call back stuff.

// async - await === call-back.
// await way of working acts as an switch block 
// awaits the excution of all lines below it 
// and returns the function 
// awaits means using multiple threads.