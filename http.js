// http module 
// This module has different methode
// like creation of server


const http = require('http'); 

// req or the first arguement represent the request by the user to the server 
// all the information and request are stored there .
// res or the second arguement of the function represent the response 
// the reponse send by the server to the user of the server.
 
const server = http.createServer((req,res) => {
   if(req.url === '/'){
     res.write('This is our home page :');
     res.end();
   }
   else if(req.url === '/about')
   {
     res.write('welcome to our about page');
     res.end();
   }
   else{
   res.write(`OOPs bastard wrong choice`);
   res.end();
   }
  
})

// server listening to a port 
 server.listen(5000)