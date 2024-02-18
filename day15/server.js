//Setting up an HTTP server

const http= require('http');

//crete the server
const server = http.createServer((req ,res)=>{
    //request handling logic goes here
    const url = require('url');

    // Inside the request handler
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;

    // Inside the request handler
    if (path === '/users') {
        // Handle the '/users' endpoint
    } else if (path === '/products') {
        // Handle the '/products' endpoint
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('I am a list of products :p');
    } else {
        // Handle unknown endpoints
    }
    });

    

//listening for requests
server.listen(3000 , () =>{
    console.log('server is listening on port 3000');

});

//Handling HTTP requests

//parse request data