const http = require('http');

http.createServer((req, resp) =>{
    resp.writeHead(200, {'content-type': 'text/html'});
    if(req.url == '/'){
resp.write(`
        <form action = "/submit" method = "POST">
        <input type = "text" placeholder = "Enter your name"/>
        <input type = "text" placeholder = "Enter your email"/>
        <button>Submit</button>
        </form>
        `);
    }
    else if (req.url== '/submit'){
        resp.write(`
            <h1> Form Submitted Successfully</h1>`)
    }

            resp.end();

    
}).listen(3100);