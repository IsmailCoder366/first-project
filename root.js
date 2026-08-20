const http = require('http')
const userForm = require('./userForm');
http.createServer((req, resp) => {
    userForm(req, resp);
    resp.end()
}


).listen(1100)