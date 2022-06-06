// module like http depends on events .

const http = require('http');

// using event APIs
const server = http.createServer();
// emit request events 
// another way of setting up a server .
// using emit Api
// server emits the request event behind the scene
// on listens for it .
// we can subscribe to it / listen to it / respond to it .
// event name is request 
server.on('request',(req,res) => {
  res.end('welcome');
})

sever.listen(5000)


