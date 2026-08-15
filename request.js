const http = require('http');

http.createServer((req, resp) =>{
    if(req.url === '/'){

    resp.write("<h1>Welcome to my first page</h1>");
    }
    else if(req.url === '/about'){
        resp.write("<h1>Welcome to my about page</h1>");
    }
    else if(req.url === '/contact'){
        resp.write("<h1>Welcome to my contact page</h1>");
    }
    else{
        resp.write("<h1>404 Page Not Found</h1>");
    }
    resp.end();
}).listen(5500);