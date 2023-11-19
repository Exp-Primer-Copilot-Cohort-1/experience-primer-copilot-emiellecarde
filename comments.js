// Create web server
// http://localhost:8080/comments
// http://localhost:8080/comments/2

var http = require('http');
var url = require('url');
var comments = require('./comments');

http.createServer(function (req, res) {
    var url_parts = url.parse(req.url);
    switch (url_parts.pathname) {
        case '/':
            index(req, res);
            break;
        case '/comments':
            comments.list(req, res);
            break;
        case '/comments/add':
            comments.add(req, res);
            break;
        case '/comments/delete':
            comments.delete(req, res);
            break;
        default:
            index(req, res);
    }
}).listen(8080);

function index(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
}