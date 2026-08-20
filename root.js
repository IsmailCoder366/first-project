const http = require('http')
const userForm = require('./userForm');
http.createServer((req, resp) => {
    resp.writeHead(200, {"Content-type" : "text/html"})
    if(req.url == '/'){
        userForm(req, resp)
    }
    else if(req.url == '/submit'){
        resp.write('form submitted')
    }
    resp.end()
}


).listen(1100)