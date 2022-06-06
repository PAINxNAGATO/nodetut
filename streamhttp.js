// stream http
// 
const http = require('http');
//
const fs = require('fs');
// 
// another methode for using http module
// http
// .createServer((req,res) => {
//  const text = fs.readFileSync('./content/big.txt','utf8',);
//  res.end(text);
// })
// .listen(5000,() =>{
//   console.log(`server running at port 5000`);
// })
// its not good send so much chunks of data over the wire .
const server = http.createServer((req,res) => {
//  const text = fs.readFileSync('./content/big.txt','utf8',);
//  res.end(text);
// alternative procedure 
//
const fileStream = fs.createReadStream('./content/big.txt');
fileStream.on('open',() => {
// filestream has a pipe methode
  fileStream.pipe(res);
// pipe pushes from read stream to write stream.
// hence the data is send back in chunks.
})
fileStream.on('error',(err) =>{
  res.end(err);
})
})

server.listen(5000,() =>{
  console.log(`server running at port 5000`);
})