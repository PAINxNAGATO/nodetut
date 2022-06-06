// const fs = require('fs');
// //
// console.log("start");
// // type of error is stored in err,first arguement .
// // and the content of the file is stored in res or the second arguement.
// fs.readFile("./content/fisrt.txt","utf8",(err,res) =>{
//      if(err){
//        console.log(err);
//      }
//      else{
//        const first = res;
//        fs.readFile("./content/second.txt","utf8", ()=>{
//         if(err){
//           console.log(err);
//         }
//         else{
//           const second = res;
//         }
//        })
//      }
// })

const http = require('http');

const server = http.createServer((req,res) =>{
  if(req.url === '/'){
    res.end('This is our Home Page');
  }
  else if(req.url === '/about'){
    // here as anyone request the about url 
    // it gets blocked by the blocking code 
    // here the blocking code is the nested for loop.
     for(let i = 0; i < 1000 ; i++){
       for(let j = 0 ; j < 1000; j++){
         console.log(`${i}  ${j}`);
       }
     }
     // hence we use Asynchronous code with nested calll backs to maximize the use 
     // of threads 
     res.end('This is our About page');
  }
  else{
    res.end('OOPs wrong page bastard');
  }
})
server.listen(5000,() =>{
  console.log("server listening at port 5000");
})