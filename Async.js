// asynchronous approach or the non blocking approach.
// call y is triggered when the program gets done executing.
const fs = require('fs');
// in readFile err message is stored in err or the first argument.
// in readFile res is stored in res or the second argument .

fs.readFile('./content/first.txt','utf8',(err,res) => {
  if(err){
    console.log(err);
    return;
  }
  console.log(res);
  const first = res;
  fs.readFile('./content/second.txt', 'utf8', (err,res) =>{
    if(err){
      console.log('error');
    }
    console.log(res);
    const second = res;
    fs.writeFile('./content/resasync.txt',`here is the result : ${first} ${second}` ,(err,res) =>{
      if(err){
        console.log(err);
        return;
      }
      console.log(res);

    });
  })
  
})