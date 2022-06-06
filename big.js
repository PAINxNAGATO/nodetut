// big file
const fs = require('fs');

//creating a big file .
for(let i = 0 ; i < 100000 ; i++){
  fs.writeFileSync('./content/big.txt',`The iteration number :${i}\n`,{flag : 'a'});
}