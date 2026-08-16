const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {

    if (req.url === '/') {

        fs.readFile('html/form.html', 'utf-8', (error, data) => {

            if (error) {
                resp.writeHead(500, { 'content-type': 'text/plain' });
                resp.end('Internal server error');
                return;
            }

            resp.writeHead(200, { 'content-type': 'text/html' });
            resp.end(data);
        });

    } 
    
    else if (req.url === '/submit') {

        resp.writeHead(200, { 'content-type': 'text/html' });

        resp.end(`
            <h1>Form Submitted Successfully</h1>
        `);

    }

}).listen(3100);