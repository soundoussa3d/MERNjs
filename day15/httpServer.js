const http =require('http');
/*const requestListener = function (request,response){
    //response.writeHead(200);
    response.end("Hello World! i'm soundous");
}*/

const requestListener = function (request,response){
    if (request.method === 'POST') {
        response.end("POST call");
    } else {
        response.writeHead(405);
        response.end('Method Not Allowed');
    }
}

const server = http.createServer(requestListener);
server.listen(8000);