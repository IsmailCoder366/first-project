const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req, resp) => {

    if (req.url === '/') {

        fs.readFile('html/form.html', 'utf-8', (error, data) => {

            if (error) {
                resp.writeHead(500, { 'content-type': 'text/plain' });
                resp.end('Internal server eror');
                return;
            }

            resp.writeHead(200, { 'content-type': 'text/html' });
            resp.end(data);
        });

    } 
    
    else if (req.url === '/submit') {

    let dataBody = [];

    req.on('data', (chunk) => {
        dataBody.push(chunk);
    });

    req.on('end', () => {

        let rawData = Buffer.concat(dataBody).toString();
        let readableData = querystring.parse(rawData);
        let dataString = "my name is "+readableData.name+ " and my email is "+readableData.email;
                console.log(dataString);
                fs.writeFileSync("text/" + readableData.name + ".txt", dataString)

        resp.writeHead(200, {
            'content-type': 'text/html'
        });

        resp.end(`
            <h1>Form Submitted Successfully</h1>
        
        `);
    });
}

}).listen(4100);