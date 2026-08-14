const http = require('http');
const age = 25
http.createServer((req, resp)=>{
    resp.setHeader('Content-Type', 'text/html');
    resp.write(`
         <html>
            <head>  
                <title>My First Page</title>
            </head>
            <body>
                <h1>My First Page</h1>
                <p>`+age+`</p>
                <h2>`+ Date()+`</h2>

            </body>
        </html>
        `);
    resp.end();
}).listen(3000);