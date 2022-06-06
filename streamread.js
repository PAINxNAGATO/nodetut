const fs  = require('fs');
// 
// in order to read big files .
// object that controls size of buffer 
// that is the chunk of data .
// high water mark
const stream = fs.createReadStream('../content/big.txt',{highWaterMark : 90000,encoding :'utf8'});

// the event 'data' is used when chunks of data is returned .
// And the data is stored in result .
stream.on('data', (result) =>{
  console.log(result);
})
stream.on('error',(err) =>{
  console.log(err);
})