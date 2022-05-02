// fs 
// to read files

const fs = require('fs');

const first = fs.readFileSync('./content/first.txt','utf8');
const second = fs.readFileSync('./content/second.txt','utf8');
// writefilesync writes in a file ,
// if a desired file is not present it will create one ,
// and then write in that.
// to append write flag = a .
fs.writeFileSync('./content/result.txt',`here is the result : ${first} ${second}`,{flag : 'a'});

//
console.log(first,second);