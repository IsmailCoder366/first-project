const http = require('http');
http.createServer((req, resp)=>{
    resp.write('<h1>this is me ismail</h1>')
    resp.end('hello world');
}).listen(4800);

http.createServer((req, resp)=>{
    resp.write('<h1>this is me khan</h1>')
    resp.end('hello world');
}).listen(5800);
