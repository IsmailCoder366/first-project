const http = require('http');
http.createServer((req, resp)=>{
    resp.setHeader('Content-Type', 'text/html');
    resp.write(`
         <html>
            <head>  
                <title>My First Page</title>
            </head>
            <body>
                <h1>My First Page</h1>
                <p>Hello, World!</p>
            </body>
        </html>
        `);
    resp.end();
}).listen(3000);