// OS
// beneficial for interacting with operating system and servers.
//built - in - module
//
// calling the os module
const { clear } = require('console');
const os = require('os');
// info about the current user 
const user = os.userInfo();
// console.log(user);
// 
// methode os os to tell the uptime of the system in seconds 
// 

// some os methode 
const curros = {
   name : os.type(),
   release : os.release(),
   total : os.totalmem(),
   free : os.freemem()
}
console.table(curros);
