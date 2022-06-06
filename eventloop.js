// what is javascript ?
// javascript is a language which is --
// a single threaded 
// non-blocking
// Asynchronous
// concurrent .
// -- it has a call stack , an event loop , a call back queue , other api's 
// soln is Asynchronous callbacks 

// event loops ==>
// 
// event loops are somethings which allow nodejs to perform non-blocking
// input - output operation despite the fact that javascript is single threaded
// by offloading operation to the system kernel whenever possible.
//
//
  // setTimeout(() => {
  //   console.log("second");
  // },0)
  // console.log("first");

  // In this code setTimeout is an API with a callback that performs a task in 
  // qeuery and not in the call stack to reduce amount of execution time and 
  // by increasing the number of threads used 
  // event loop basically passes the function from query to call stack ;


//   const { Console } = require('console');
// const fs = require('fs');

//    console.log("first");
//    // this is happening because readfile is Asynchronous .
//   fs.readFile("./content/first.txt","utf8",(err,res) => {
//     if(err){
//       console.log(err);
//     }
//     else{
//       console.log(res);
//       console.log("third");
//     }

//   })

//   console.log("second");

  // due to event-loop the call back is dne in a faster time and 
  // and it returns the value when call stack gets cleared 
  // after console.log("second") is executed .
  // setInterval is Asynchronous .
  // setInterval(() => {
  //   console.log("hello world");
  // },1000)
  // console.log("first excution here due to singly threaded");


  const http = require('http');
  
 const server = http.createServer((req,res) => {
    console.log("request event");
    res.end('hello world');
 })

 server.listen(5000,() =>{
   console.log("server listening at port 5000");
 });
 // server.listen(port, hostname, backlog, callback);