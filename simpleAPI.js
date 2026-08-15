const http = require('http');

const userData =  [
    {
        name : 'ismail',
        age : 25,
        email : 'ismail@gmail.com'
    },
    {
        name : 'khan',
        age : 30,
        email : 'khan@gmail.com'
    },
    {
        name : 'ali',
        age : 35,
        email : 'ali@gmail.com'
    },
]   

http.createServer((req, resp)=>{
    resp.setHeader('Content-Type', 'application/json');
    resp.write(JSON.stringify(userData));
    resp.end();
}).listen(1900);
