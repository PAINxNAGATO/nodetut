// promise ==> kasam
// resolve -- promise poori kar do 
// reject  -- nhi kar paye poori promise
// pending -- ki promise pending hai abhi 


// creating an callback function 
const fs = require('fs');
//
function func1(path){
  // this functions call back returns a new promise.
  // promise is a API
  // uses another callback 
   return new Promise((resolve,reject) =>{
     fs.readFile(path,"utf8",(err,data) =>{
       if(err){
         reject(err);
       }
       else{
         resolve(data);
       }
     })
   })
}
// usage of promise 
// then function replaces resolve in the function 
// catch function replaces reject in the function
func1("./content/second.txt").then((data) => console.log(data)).catch((err) => console.log(err));
